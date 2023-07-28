import { challenge,globalCss } from "../_store";

export default function Correct() {
    return (<div class="flex flex-col items-center">
            <h3>Correct</h3>
            <iframe
                id="correctIframe"
                class="border-none w-full"
                srcdoc={
                    `<html>
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