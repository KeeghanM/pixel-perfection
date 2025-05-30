import { onMount, createSignal } from 'solid-js'
import {
  challenge,
  currentXp,
  setCss,
  setCurrentXp,
  setHtml,
  setChallenge,
  setCompareAttempts,
} from './_store'
import { Challenges } from './Challenges'
import AppBar from './components/app-bar/app-bar'
import NavigationControls from './components/navigation-controls/navigation-controls'
import CodePanel from './components/code-panel/code-panel'
import DesignPanel from './components/design-panel/design-panel'

export default function Main() {
  const [currentTab, setCurrentTab] = createSignal<'html' | 'css'>('html')
  const [currentChallenge, setCurrentChallenge] = createSignal(0)

  onMount(() => {
    setHtml(challenge().HTML)
    setCss(challenge().wrongCSS)
    setCurrentXp(JSON.parse(localStorage.getItem('totalXp') || '0'))
  })

  const switchTab = (tab: 'html' | 'css') => {
    setCurrentTab(tab)
  }

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

  const exitChallenge = () => {
    if (confirm('Exit challenge? Your progress will be saved.')) {
      window.location.href = '/'
    }
  }

  return (
    <div
      style="
      --bg-primary: #0a0a0a;
      --bg-secondary: #111111;
      --bg-tertiary: #1a1a1a;
      --border-primary: #2a2a2a;
      --border-secondary: #333333;
      --text-primary: #ffffff;
      --text-secondary: #a0a0a0;
      --text-muted: #666666;
      --accent-primary: #00d4ff;
      --accent-secondary: #7c3aed;
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
      --glass-bg: rgba(255, 255, 255, 0.05);
      --glass-border: rgba(255, 255, 255, 0.1);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      height: 100vh;
      overflow: hidden;
      font-weight: 400;
      letter-spacing: -0.01em;
    "
    >
      <AppBar />

      <NavigationControls
        currentChallenge={currentChallenge}
        onPreviousChallenge={previousChallenge}
        onNextChallenge={nextChallenge}
        onExitChallenge={exitChallenge}
      />

      {/* Main Container */}
      <div
        style='
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: calc(100vh - 64px);
        background: var(--bg-secondary);
      '
      >
        <CodePanel
          currentTab={currentTab}
          onSwitchTab={switchTab}
        />

        <DesignPanel />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .cm-editor {
          height: 100% !important;
          max-height: none !important;
        }
        .cm-scroller {
          font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Consolas', monospace !important;
          font-size: 0.8125rem !important;
          line-height: 1.6 !important;
          letter-spacing: 0.01em !important;
        }
      `}</style>
    </div>
  )
}
