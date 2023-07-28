import { challenge } from "../_store";

export default function Correct() {
    return (
        <div class="w-[300px] h-[300px] flex flex-col items-center">
            <h3>Correct</h3>
            <iframe
                width="300px"
                height="300px"
                id="correctIframe"
                style="border:none;"
                srcdoc={
                    `<html>
                    <head>
                        <style>
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