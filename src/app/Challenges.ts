export const Challenges = [
  {
    id: 0,
    name: 'Tutorial Challenge',
    description:
      "Welcome to the tutorial! All you need to do is correct the below invalid CSS to make the 'wrong' design look like the 'correct' design.",
    HTML: `<h1>
  <span>Hello,</span> world.
</h1>`,
    generalCSS: '',
    correctCSS: `h1 {
            color: rgb(100,100,255);
        }

        h1 span {
            color: rgb(80,30,155);
        }`,
    wrongCSS: `h1 {
  color: rgb(100,100,255);
}`,
  },
  {
    id: 1,
    name: 'Size matters!',
    description:
      "On something as simple as an input, details matter. Make the 'wrong' design look like the 'correct' design.",
    HTML: `<div>
  <input type="text" placeholder="Enter your name here" />
  <button>Submit</button>
</div>
        `,
    generalCSS: '',
    correctCSS: `div {
  display: flex;
  gap: 0;
}
input {
  font-size: 1.5rem;
  border: none;
  padding: 1rem;
  background: rgb(210,180,250);
  border-radius: 15px 0 0 15px;
  color: black;
}
button {
  border: none;
  background: rgb(80,30,155);
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 0 15px 15px 0;
}`,
    wrongCSS: `div {
  display: flex;
  gap: 0;
}
input {
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 1rem;
  background: rgb(210,180,250);
  border-radius: 5px 0 0 5px;
  color: black;
}
button {
  border: none;
  background: rgb(80,30,155);
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0 5px 5px 0;
}`,
  },
]
