import { challenge, displayColor, globalCss } from '../../../_store'
import './correct-display.scss'

export default function CorrectDisplay() {
  return (
    <div
      class='correct-display'
      style={`height: ${challenge().height}px; width: ${challenge().width}px;`}
    >
      <h3 class='correct-display__title'>Correct Design</h3>
      <iframe
        id='correctIframe'
        class='correct-display__iframe'
        style={`height: ${challenge().height}px; width: ${
          challenge().width
        }px;`}
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
            ${challenge().correctCSS}
        </style>
    </head>
    <body>
        ${challenge().HTML}
    </body>
</html>`}
      />
    </div>
  )
}
