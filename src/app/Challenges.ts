export const Challenges = [
    {
        id: 0,
        name: "Tutorial Challenge",
        description: "Welcome to the tutorial! All you need to do is correct the below invalid CSS to make the 'wrong' design look like the 'correct' design.",
        HTML: `<h1><span>Hello,</span> world.</h1>`,
        generalCSS: `html,body {
                margin: 0;
                padding: 0;
                height:100%;
                overflow:hidden;
            }

            body {
                background: #666;
                color: white;
                font-family: sans-serif;
                display: grid;
                place-items: center;
            }`,
        correctCSS: `h1 {
            color: rgb(100,100,255);
        }

        h1 span {
            color: rgb(80,30,155);
        }`,
        wrongCSS: `h1 {
            color: rgb(100,100,255);
        }`,
        }
]