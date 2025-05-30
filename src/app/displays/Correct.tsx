import { challenge, displayColor, globalCss } from '../_store'

export default function Correct() {
  return (
    <div
      class='flex flex-col items-center'
      style={`height: ${challenge().height}px; width: ${challenge().width}px;`}
    >
      <h3 class='text-2xl font-bold text-lime-600'>Correct Design</h3>
      <iframe
        id='correctIframe'
        class='border-2'
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
