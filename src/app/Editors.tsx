import { css, html, setCss, setHtml } from "./_store";

export default function Editors() {
    return (
        <>
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-2xl">HTML</h2>
                <textarea class="bg-gray-200 p-2 dark:bg-gray-900 text-black dark:text-gray-100 w-full h-full" name="html" id="html" cols="30" rows="10" value={html()} oninput={e => setHtml(e.target.value)} />
            </div>
            <div class="flex flex-col items-center">
                <h2 class="font-bold text-2xl">CSS</h2>
                <textarea 
                class="bg-gray-200 p-2 dark:bg-gray-900 text-black dark:text-gray-100 w-full h-full" 
                name="css" id="css" cols="30" rows="10" value={css()} 
                oninput={e => setCss(e.target.value)} />
            </div>
        </>
    )
}