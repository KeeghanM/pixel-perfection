import Button from '../../../components/ui/button/button'
import { challenge, currentXp } from '../../_store'
import { Challenges } from '../../Challenges'
import './app-bar.scss'
import type { TAppBar } from './TAppBar'

export default function AppBar(props: TAppBar) {
  return (
    <div class='app-bar'>
      <div class='app-bar__left-section'>
        <div class='app-bar__logo'>PixelPerfection</div>
      </div>

      <div class='app-bar__center-section'>
        <Button
          type='button'
          theme='primary'
          variant={props.currentChallenge() === 0 ? 'ghost' : 'outline'}
          size='small'
          disabled={props.currentChallenge() === 0}
          onClick={props.onPreviousChallenge}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
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
        </Button>

        <div class='app-bar__challenge-info'>
          <h1 class='app-bar__challenge-title'>{challenge().name}</h1>
          <p class='app-bar__challenge-description'>
            {challenge().description}
          </p>
        </div>

        <Button
          type='button'
          theme='primary'
          size='small'
          variant={
            props.currentChallenge() === Challenges.length - 1
              ? 'ghost'
              : 'outline'
          }
          disabled={props.currentChallenge() === Challenges.length - 1}
          onClick={props.onNextChallenge}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
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
        </Button>
      </div>

      <div class='app-bar__right-section'>
        <div class='app-bar__xp-container'>
          <svg
            class='app-bar__xp-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
          >
            <polygon points='12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2' />
          </svg>
          <span class='app-bar__xp-value'>{currentXp()}</span>
          <span class='app-bar__xp-label'>XP</span>
        </div>
        <div class='app-bar__user-avatar'>
          <div class='app-bar__user-avatar-circle'>JD</div>
        </div>
      </div>
    </div>
  )
}
