import { Show } from 'solid-js'
import Editor from '../editor/editor'
import { html as HTMLLang } from '@codemirror/lang-html'
import { css as CSSLang } from '@codemirror/lang-css'
import { css, html, setCss, setHtml } from '../../_store'
import type { TCodePanel } from './TCodePanel'
import './code-panel.scss'

export default function CodePanel(props: TCodePanel) {
  return (
    <div class='code-panel'>
      <div class='code-panel__header'>
        <div class='code-panel__title'>Editor</div>
        <div class='code-panel__tabs'>
          <button
            onClick={() => props.onSwitchTab('html')}
            class={`code-panel__tab ${props.currentTab() === 'html' ? 'code-panel__tab--active' : ''}`}
          >
            HTML
          </button>
          <button
            onClick={() => props.onSwitchTab('css')}
            class={`code-panel__tab ${props.currentTab() === 'css' ? 'code-panel__tab--active' : ''}`}
          >
            CSS
          </button>
        </div>
      </div>
      <div class='code-panel__editor-container'>
        <Show when={props.currentTab() === 'html'}>
          <Editor
            type='HTML'
            text={html}
            setText={setHtml}
            Lang={HTMLLang}
          />
        </Show>
        <Show when={props.currentTab() === 'css'}>
          <Editor
            type='CSS'
            text={css}
            setText={setCss}
            Lang={CSSLang}
          />
        </Show>
      </div>
    </div>
  )
}
