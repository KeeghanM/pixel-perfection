export type Challenge = {
  id: number
  name: string
  HTML: string
  generalCSS: string
  description: string
  correctCSS: string
  wrongCSS: string
}

export const Challenges: Challenge[] = [
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
  {
    id: 2,
    name: 'Dealers choice',
    description:
      "Cards are a commonplace element in modern web design, but they're not always easy to get right. Make the 'wrong' design look like the 'correct' design.",
    HTML: `<div>
  <div class="card">
    <div class="inner">
      <h2>Card 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quod voluptates voluptatem quos
        voluptatibus quae doloribus quas natus. Quisquam voluptatum,
      </p>
      <button>Read More</button>
    </div>
  </div>`,
    generalCSS: `body {
      padding: 1rem;
    }`,
    correctCSS: `.card {  
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  background: rgb(80,30,155);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
.card .inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 0.5rem;
  border-radius: 10px;
}
.card .inner h2 {
  font-size: 2rem;
  color: rgb(80,30,155);
}
.card .inner p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: black;
}
.card .inner button {
  border: none;
  background: rgb(80,30,155);
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  margin-top: 1rem;
}`,
    wrongCSS: `.card {  
  border-radius: 10px;
  overflow: hidden;
  background: rgb(80,30,155);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.card .inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
}
.card .inner h2 {
  font-size: 1.5rem;
  color: rgb(80,30,155);
}
.card .inner p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: black;
}
.card .inner button {
  border: none;
  background: rgb(80,30,155);
  color: white;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
}`,
  },
]
