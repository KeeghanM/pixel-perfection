import { challenge, css, html, globalCss, displayColor } from '../../_store'
import './wrong-display.scss'

export default function WrongDisplay() {
  return (
    <div
      class='wrong-display'
      style={`height: ${challenge().height}px; width: ${challenge().width}px`}
    >
      <h3 class='wrong-display__title'>Wrong Design</h3>
      <iframe
        id='wrongIframe'
        class='wrong-display__iframe'
        style={`height: ${challenge().height}px; width: ${challenge().width}px`}
        srcdoc={`<html>
    <head>
        <style>
            ${globalCss()}
            ${
              displayColor() === 'dark'
                ? 'body{background: rgb(101,101,101); color: white;}'
                : 'body{background: rgb(254,254,254); color: black;}'
            }
            ${challenge().generalCSS}
            ${css()}
        </style>
    </head>
    <body>
        ${html()}
    </body>
</html>`}
      />
    </div>
  )
}
