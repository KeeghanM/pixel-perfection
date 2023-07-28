import { challenge, css, html } from "../_store";

export default function Wrong() {
    return (
        <div class="w-[300px] h-[300px] flex flex-col items-center">
            <h3>Wrong</h3>
            <iframe
                width="300px"
                height="300px"
                id="wrongIframe"
                style="border:none;"
                srcdoc={
                    `<html>
                    <head>
                        <style>
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