import { challenge, css, html, globalCss, displayColor } from '../_store'

export default function Wrong() {
  return (
    <div
      class='flex flex-col items-center'
      style={`height: ${challenge().height}px; width: ${challenge().width}px`}
    >
      <h3 class='text-2xl font-bold text-red-600'>Wrong Design</h3>
      <iframe
        id='wrongIframe'
        class='border-2'
        style={`height: ${challenge().height}px; width: ${challenge().width}px`}
        srcdoc={`<html>
    <head>
        <style>
            ${globalCss()}
            ${
              displayColor() === 'dark'
                ? 'body{background: #666; color: white;}'
                : 'body{background: white; color: black;}'
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
