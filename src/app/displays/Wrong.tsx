import { challenge, css, html, globalCss } from '../_store'

export default function Wrong() {
  return (
    <div
      class='flex flex-col items-center'
      style={`height: ${challenge().height}px; width: ${challenge().width}px`}
    >
      <h3 class='text-2xl font-bold text-red-600'>Wrong Design</h3>
      <iframe
        id='wrongIframe'
        class='border-none'
        style={`height: ${challenge().height}px; width: ${challenge().width}px`}
        srcdoc={`<html>
    <head>
        <style>
            ${globalCss()}
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
