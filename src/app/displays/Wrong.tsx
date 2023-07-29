import { challenge, css, html, globalCss } from '../_store'

export default function Wrong() {
  return (
    <div class='flex h-full flex-1 flex-col items-center'>
      <h3>Wrong</h3>
      <iframe
        id='wrongIframe'
        class='h-full w-full border-none'
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
