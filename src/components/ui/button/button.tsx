import type { TButton } from './TButton'
import './button.scss'

export default function Button(props: TButton) {
  const {
    type,
    theme = 'primary',
    style = 'solid',
    label,
    classes = '',
    size = 'default',
  } = props

  return type === 'link' ? (
    <a
      href={props.href}
      target={props.target ?? '_self'}
      rel={props.rel}
      class={`btn btn-${theme} btn-${style} btn-${size} ${classes}`}
    >
      {label}
    </a>
  ) : (
    <button
      type={type}
      onClick={props.onClick}
      disabled={props.disabled}
      class={`btn btn-${theme} btn-${style} btn-${size} ${classes}`}
    >
      {label}
    </button>
  )
}
