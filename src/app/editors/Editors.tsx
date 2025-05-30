import { css, html, setCss, setHtml } from '../_store'
import { html as HTMLLang } from '@codemirror/lang-html'
import { css as CSSLang } from '@codemirror/lang-css'
import Editor from './Editor'

export default function Editors() {
  return (
    <>
      <div class='flex flex-col items-center'>
        <h2 class='text-2xl font-bold'>HTML</h2>
        <Editor
          type='HTML'
          text={html}
          setText={setHtml}
          Lang={HTMLLang}
        />
      </div>
      <div class='flex flex-col items-center'>
        <h2 class='text-2xl font-bold'>CSS</h2>
        <Editor
          type='CSS'
          text={css}
          setText={setCss}
          Lang={CSSLang}
        />
      </div>
    </>
  )
}
