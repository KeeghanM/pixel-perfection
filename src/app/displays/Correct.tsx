import { challenge, globalCss } from '../_store'

export default function Correct() {
  return (
    <div
      class='flex flex-col items-center'
      style={`height: ${challenge().height}px; width: ${challenge().width}px;`}
    >
      <h3 class='text-2xl font-bold text-lime-600'>Correct Design</h3>
      <iframe
        id='correctIframe'
        class=' border-none'
        style={`height: ${challenge().height}px; width: ${
          challenge().width
        }px;`}
        srcdoc={`<html>
    <head>
        <style>
            ${globalCss()}
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
