type Base = {
  theme: 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  style: 'solid' | 'outline' | 'ghost'
  size?: 'small' | 'default' | 'large'
  label: string
  classes?: string
}

type ButtonProps = Base & {
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
}

type LinkProps = Base & {
  type: 'link'
  href: string
  target?: '_blank' | '_self'
  rel?: string
  onClick?: never
  disabled?: never
}

export type TButton = ButtonProps | LinkProps
