import { createSignal, onMount } from 'solid-js'
import {
  challenge,
  setChallenge,
  setCompareAttempts,
  setCss,
  setCurrentXp,
  setHtml,
} from './_store'
import './app.scss'
import { Challenges } from './Challenges'
import AppBar from './components/app-bar/app-bar'
import ControlBar from './components/control-bar/control-bar'
import DesignPanel from './components/design-panel/design-panel'
import Editors from './components/editors/editors'

export default function App() {
  const [currentChallenge, setCurrentChallenge] = createSignal(0)

  onMount(() => {
    setHtml(challenge().HTML)
    setCss(challenge().wrongCSS)
    setCurrentXp(JSON.parse(localStorage.getItem('totalXp') || '0'))
  })

  const previousChallenge = () => {
    if (currentChallenge() > 0) {
      const newIndex = currentChallenge() - 1
      setCurrentChallenge(newIndex)
      setChallenge(Challenges[newIndex])
      setCss(Challenges[newIndex].wrongCSS)
      setHtml(Challenges[newIndex].HTML)
      setCompareAttempts(0)
    }
  }

  const nextChallenge = () => {
    if (currentChallenge() < Challenges.length - 1) {
      const newIndex = currentChallenge() + 1
      setCurrentChallenge(newIndex)
      setChallenge(Challenges[newIndex])
      setCss(Challenges[newIndex].wrongCSS)
      setHtml(Challenges[newIndex].HTML)
      setCompareAttempts(0)
    }
  }

  return (
    <div class='app-container'>
      <AppBar
        currentChallenge={currentChallenge}
        onPreviousChallenge={previousChallenge}
        onNextChallenge={nextChallenge}
      />
      <ControlBar />
      <div class='app-grid'>
        <Editors />
        <DesignPanel />
      </div>
    </div>
  )
}
