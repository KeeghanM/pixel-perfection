import { challenge, css, html, globalCss } from "../_store";

export default function Wrong() {
    return (<div class="flex-1 flex flex-col items-center h-full">
            <h3>Wrong</h3>
            <iframe
                id="wrongIframe"
                class="border-none w-full h-full"
                srcdoc={
                    `<html>
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