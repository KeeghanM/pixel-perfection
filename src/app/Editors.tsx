import { challenge, css, html, setCss, setHtml } from "./_store";
import { onMount, createEffect } from "solid-js"
import { EditorView, basicSetup } from "codemirror"
import { EditorState, StateField, StateEffect } from "@codemirror/state"
import { html as HTMLLang } from "@codemirror/lang-html"
import { css as CSSLang } from "@codemirror/lang-css"


export default function Editors() {
    let htmlEditorRef: any
    let cssEditorRef: any
    let htmlEditor: any
    let cssEditor: any

    const HTMLdocChangedEffect = StateEffect.define();
    const HTMLdocChangedField = StateField.define({
        create() { return false; },
        update(value, tr) {
            if (tr.docChanged) return HTMLdocChangedEffect.of(tr.docChanged);
            for (let effect of tr.effects) {
            if (effect.is(HTMLdocChangedEffect)) return true;
            }
            return value;
        },
        effects: [HTMLdocChangedEffect]
    });

    createEffect(() => {
        const challengeStatic = challenge()
        if (htmlEditor && cssEditor) {
            htmlEditor.dispatch({
                changes: { from: 0, to: htmlEditor.state.doc.length, insert: challengeStatic.HTML }
            });
            cssEditor.dispatch({
                changes: { from: 0, to: cssEditor.state.doc.length, insert: challengeStatic.wrongCSS }
            });
        }
    })

    const CSSdocChangedEffect = StateEffect.define();
    const CSSdocChangedField = StateField.define({
        create() { return false; },
        update(value, tr) {
            if (tr.docChanged) return CSSdocChangedEffect.of(tr.docChanged);
            for (let effect of tr.effects) {
            if (effect.is(CSSdocChangedEffect)) return true;
            }
            return value;
        },
        effects: [CSSdocChangedEffect]
    });

    onMount(() => {
        htmlEditor = new EditorView({
            state: EditorState.create({
                doc: html(),
                extensions: [basicSetup, HTMLLang(),
                HTMLdocChangedField,
                EditorState.transactionFilter.of(tr => {
                    if (tr.docChanged) setHtml(tr.newDoc.toString());
                    return tr;
                })],
            }),
            parent: htmlEditorRef
        })

        cssEditor = new EditorView({
            state: EditorState.create({
                doc: css(),
                extensions: [basicSetup, CSSLang(),
                CSSdocChangedField,
                EditorState.transactionFilter.of(tr => {
                    if (tr.docChanged) setCss(tr.newDoc.toString());
                    return tr;
                })],
            }),
            parent: cssEditorRef
        })
    })

    return (
        <>
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-2xl">HTML</h2>
                <div ref={htmlEditorRef} class="w-full h-full max-h-full bg-gray-100 dark:bg-gray-900"></div>
            </div>
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-2xl">CSS</h2>
                <div ref={cssEditorRef} class="w-full h-full max-h-full bg-gray-100 dark:bg-gray-900"></div>
            </div>
        </>
    )
}