import { Challenges } from "./Challenges";
import { createSignal, createEffect } from "solid-js";
import { setChallenge } from "./_store";

export const Swapper = () => {
    const [currentChallenge, setCurrentChallenge] = createSignal(0)
    createEffect(() => {
        setChallenge(Challenges[currentChallenge()])
    })

    return (
        <div class="w-fit mx-auto flex flex-col justify-center">
            <p class="font-extrabold">Challenge:</p>
            <div class="flex gap-2">
            {currentChallenge() > 0 ? <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCurrentChallenge(currentChallenge() - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" /><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z" /></svg>
            </button> : null}
            {currentChallenge() + 1} out of {Challenges.length}
            {currentChallenge() < Challenges.length - 1 ? <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCurrentChallenge(currentChallenge() + 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z" /><path fill="currentColor" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z" /></svg>
            </button> : null}
            </div>
        </div>
    )
}