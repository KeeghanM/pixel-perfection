import { Challenges } from '../../Challenges'
import type { NavigationControlsProps } from './TNavigationControls'
import './navigation-controls.scss'

export default function NavigationControls(props: NavigationControlsProps) {
  return (
    <>
      {/* Previous Challenge Button */}
      <button
        onClick={props.onPreviousChallenge}
        disabled={props.currentChallenge() === 0}
        class='navigation-controls__prev-button'
      >
        ←
      </button>

      {/* Next Challenge Button */}
      <button
        onClick={props.onNextChallenge}
        disabled={props.currentChallenge() === Challenges.length - 1}
        class='navigation-controls__next-button'
      >
        →
      </button>

      {/* Exit Button */}
      <button
        onClick={props.onExitChallenge}
        class='navigation-controls__exit-button'
      >
        Exit
      </button>
    </>
  )
}
