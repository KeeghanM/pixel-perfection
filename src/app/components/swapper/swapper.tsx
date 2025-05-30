import { Challenges } from '../../Challenges'
import { createSignal, createEffect } from 'solid-js'
import {
  challenge,
  setChallenge,
  setCompareAttempts,
  setCss,
  setHtml,
} from '../../_store'
import './swapper.scss'

export const Swapper = () => {
  const [currentChallenge, setCurrentChallenge] = createSignal(0)

  createEffect(() => {
    setChallenge(Challenges[currentChallenge()])
    setCss(Challenges[currentChallenge()].wrongCSS)
    setHtml(Challenges[currentChallenge()].HTML)
  })

  const swap = (num: number) => {
    setCurrentChallenge(currentChallenge() + num)
    setCompareAttempts(0)
  }

  return (
    <div class='swapper'>
      <div class='swapper__controls'>
        <button
          disabled={currentChallenge() === 0}
          class={`swapper__nav-button ${
            currentChallenge() === 0
              ? 'swapper__nav-button--disabled'
              : 'swapper__nav-button--enabled'
          }`}
          onClick={() => swap(-1)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            viewBox='0 0 16 9'
          >
            <path
              fill='currentColor'
              d='M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z'
            />
            <path
              fill='currentColor'
              d='M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z'
            />
          </svg>
        </button>

        <h1 class='swapper__title'>{challenge().name}</h1>

        <button
          disabled={currentChallenge() === Challenges.length - 1}
          class={`swapper__nav-button ${
            currentChallenge() === Challenges.length - 1
              ? 'swapper__nav-button--disabled'
              : 'swapper__nav-button--enabled'
          }`}
          onClick={() => swap(1)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            viewBox='0 0 16 9'
          >
            <path
              fill='currentColor'
              d='M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5Z'
            />
            <path
              fill='currentColor'
              d='M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z'
            />
          </svg>
        </button>
      </div>
      <p class='swapper__description'>{challenge().description}</p>
    </div>
  )
}
