import { createSignal } from 'solid-js'
import { type Challenge, Challenges } from './Challenges'

export const [theme, setTheme] = createSignal<'light' | 'dark'>('dark')
export const [compareAttmepts, setCompareAttempts] = createSignal(0)
export const [currentXp, setCurrentXp] = createSignal<number>(0)
export const [challenge, setChallenge] = createSignal<Challenge>(Challenges[0])
export const [css, setCss] = createSignal('')
export const [html, setHtml] = createSignal('')
export const [displayColor, setDisplayColor] = createSignal<'light' | 'dark'>(
  'dark'
)
export const [globalCss, setGlobalCss] = createSignal(
  `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  font-size: 16px;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;
  display: grid;
  place-items: center;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

body {
  background-color: rgb(254, 254, 254);
  }
body.dark {
  background-color: rgb(30, 30, 30);
}
`
)
