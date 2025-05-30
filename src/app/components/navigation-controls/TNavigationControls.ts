export interface NavigationControlsProps {
  currentChallenge: () => number
  onPreviousChallenge: () => void
  onNextChallenge: () => void
  onExitChallenge: () => void
}
