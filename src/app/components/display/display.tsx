import { challenge, displayColor, globalCss } from '../../_store'
import './display.scss'

export default function Display(props: { css: string }) {
  return (
    <div
      class='design-display'
      style={`height: 100%; width: 100%;`}
    >
      <iframe
        id='correctIframe'
        class='design-display__iframe'
        style={`height: 100%; width: 100%;`}
        srcdoc={`<html>
    <head>
        <style>
            ${globalCss()}
            ${challenge().generalCSS}
            ${props.css}
        </style>
    </head>
    <body class="${displayColor()}">
        ${challenge().HTML}
    </body>
</html>`}
      />
    </div>
  )
}
