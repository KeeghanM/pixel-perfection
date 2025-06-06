import { createMemo } from 'solid-js'
import { challenge, displayColor, globalCss } from '../../_store'
import './display.scss'

export default function Display(props: {
  html: string
  css: string
  type: 'correct' | 'wrong'
}) {
  // Create a memo to ensure srcdoc is properly regenerated when dependencies change
  const srcdocContent = createMemo(
    () =>
      `<html>
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
</html>`
  )

  return (
    <div
      class='design-display'
      style={{ height: '100%', width: '100%' }}
    >
      <iframe
        id={`${props.type}Iframe`}
        title={`${props.type}Iframe`}
        class='design-display__iframe'
        style={{ height: '100%', width: '100%' }}
        srcdoc={srcdocContent()}
      />
    </div>
  )
}
