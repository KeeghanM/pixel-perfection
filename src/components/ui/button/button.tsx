import type { TButton } from './TButton'
import './button.scss'

export default function Button(props: TButton) {
  const className = () =>
    `btn btn-${props.theme || 'primary'} btn-${props.variant || 'solid'} btn-${props.size || 'default'} ${props.classes || ''}`

  return (
    <>
      {props.type === 'link' ? (
        <a
          href={props.href}
          target={props.target ?? '_self'}
          rel={props.rel}
          class={className()}
        >
          {props.label || props.children}
        </a>
      ) : (
        <button
          onClick={props.onClick}
          disabled={props.disabled}
          class={className()}
        >
          {props.label || props.children}
        </button>
      )}
    </>
  )
}
