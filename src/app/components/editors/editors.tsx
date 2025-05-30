import { css, html, setCss, setHtml } from '../../_store'
import { html as HTMLLang } from '@codemirror/lang-html'
import { css as CSSLang } from '@codemirror/lang-css'
import Editor from '../editor/editor'
import './editors.scss'

export default function Editors() {
  return (
    <div class='editors'>
      <div class='editors__section'>
        <h2 class='editors__title'>HTML</h2>
        <Editor
          type='HTML'
          text={html}
          setText={setHtml}
          Lang={HTMLLang}
        />
      </div>
      <div class='editors__section'>
        <h2 class='editors__title'>CSS</h2>
        <Editor
          type='CSS'
          text={css}
          setText={setCss}
          Lang={CSSLang}
        />
      </div>
    </div>
  )
}
