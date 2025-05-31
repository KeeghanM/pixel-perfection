import { onMount, createEffect } from 'solid-js'
import { challenge } from '../../../_store'
import { debounce } from '@solid-primitives/scheduled'
import { EditorView, basicSetup } from 'codemirror'
import { EditorState, StateField, StateEffect } from '@codemirror/state'
import { solarizedLight } from 'cm6-theme-solarized-light'
import { oneDark } from '@codemirror/theme-one-dark'
import type { TEditor } from './TEditor'
import './editor.scss'

export default function Editor(props: TEditor) {
  let editor: any
  let editorRef: HTMLDivElement | undefined

  const docChangedEffect = StateEffect.define()
  const docChangedField = StateField.define({
    create() {
      return false
    },
    update(value, tr) {
      if (tr.docChanged) return true
      for (let effect of tr.effects) {
        if (effect.is(docChangedEffect)) return true
      }
      return value
    },
  })

  // Update the editor when the challenge changes
  createEffect(() => {
    const newText =
      props.type === 'HTML' ? challenge().HTML : challenge().wrongCSS
    if (editor) {
      editor.dispatch({
        changes: { from: 0, to: editor.state.doc.length, insert: newText },
      })
    }
  })

  // Create the editor themselves, has to wait until after the DOM is loaded
  onMount(() => {
    const debouncedSet = debounce(props.setText, 1000)
    const setTheme = () => {
      return document.documentElement.classList.contains('dark')
        ? oneDark
        : solarizedLight
    }
    const createEditor = (theme: any) => {
      let currentText = editor?.state.doc.toString() || props.text()

      if (editor) {
        editor.destroy()
      }

      editor = new EditorView({
        state: EditorState.create({
          doc: currentText,
          extensions: [
            basicSetup,
            props.Lang(),
            docChangedField,
            EditorState.transactionFilter.of((tr) => {
              if (tr.docChanged) debouncedSet(tr.newDoc.toString())
              return tr
            }),
            theme,
          ],
        }),
        parent: editorRef,
      })
    }

    createEditor(setTheme())

    // Create a mutation observer to watch for changes in the body class
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.attributeName === 'class') {
          createEditor(setTheme())
        }
      }
    })

    // Start observing the body with the configured parameters
    observer.observe(document.documentElement, { attributes: true })
  })

  return (
    <div
      ref={editorRef}
      class='editor'
     />
  )
}
