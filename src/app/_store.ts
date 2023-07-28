import { createSignal } from "solid-js";
import { Challenges } from "./Challenges";

export const [css, setCss] = createSignal("");
export const [html, setHtml] = createSignal("");

export const [challenge, setChallenge] = createSignal<Challenge>(Challenges[0]);

