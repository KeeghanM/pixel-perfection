import type { TButton } from './TButton'
import './button.scss'

export default function Button(props: TButton) {
  return props.type === 'link' ? (
    <a
      href={props.href}
      target={props.target ?? '_self'}
      rel={props.rel}
      class={`btn btn-${props.theme || 'primary'} btn-${props.variant || 'solid'} btn-${props.size || 'default'} ${props.classes || ''}`}
    >
      {props.label || props.children}
    </a>
  ) : (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      class={`btn btn-${props.theme || 'primary'} btn-${props.variant || 'solid'} btn-${props.size || 'default'} ${props.classes || ''}`}
    >
      {props.label || props.children}
    </button>
  )
}
