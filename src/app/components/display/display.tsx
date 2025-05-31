import { challenge, displayColor, globalCss } from '../../_store'
import './display.scss'

export default function Display(props: {
  html: string
  css: string
  type: 'correct' | 'wrong'
}) {
  return (
    <div
      class='design-display'
      style='height: 100%; width: 100%;'
    >
      <iframe
        id={`${props.type}Iframe`}
        class='design-display__iframe'
        style='height: 100%; width: 100%;'
        srcdoc={`<html>
  <head>
    <style>
      ${globalCss()}
      ${challenge().generalCSS}
      ${props.css}
    </style>
  </head>
  <body class="${displayColor()}">
    ${props.html}
  </body>
</html>`}
      />
    </div>
  )
}
