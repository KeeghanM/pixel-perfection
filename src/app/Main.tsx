
import { onMount } from "solid-js";
import { challenge, setCss, setHtml } from "./_store";
import Editors from "./Editors";
import Correct from "./displays/Correct";
import Wrong from "./displays/Wrong";
import Compare from "./Compare";
import { Swapper } from "./Swapper";

export default function Main() {

    onMount(() => {
        setHtml(challenge().HTML)
        setCss(challenge().wrongCSS)
    })

    return (
        <div class="grid grid-cols-[minmax(30vw,_450px)_1fr] h-[80vh] p-12">
            <div class="flex flex-col flex-1">
                <Editors />
            </div>
            <div class="flex flex-col gap-2">
                <div class="text-center w-full">
                    <h1 class="mt-6 mb-2 text-4xl text-blue-500">{challenge().name}</h1>
                    <p class="text-xl leading-7 max-w-screen-md mx-auto mb-6">{challenge().description}</p>
                </div>
                <div class="flex gap-6 justify-center">
                    <Correct />
                    <Wrong />
                </div>
                <Compare />
                <Swapper />
            </div>
        </div>
    )
}