import type { Accessor } from 'solid-js'

export type TAppBar = {
  currentChallenge: Accessor<number>
  onPreviousChallenge: () => void
  onNextChallenge: () => void
}
