import { createSignal } from "solid-js";
import { Challenges } from "./Challenges";

export const [css, setCss] = createSignal("");
export const [html, setHtml] = createSignal("");
export const [globalCss, setGlobalCss] = createSignal(
`* {
    margin: 0;
    padding: 0;
}
html, body {
    height: 100%;
    width: 100%;
}
body {
    font-family: sans-serif;
    display: grid;
    place-items: center;
    background: #666;
    overflow: hidden;
    max-width: 100%;
}`
);

export const [challenge, setChallenge] = createSignal<Challenge>(Challenges[0]);

