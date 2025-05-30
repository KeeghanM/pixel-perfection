import { onMount, createSignal, Show } from 'solid-js'
import {
  challenge,
  currentXp,
  setCss,
  setCurrentXp,
  setHtml,
  css,
  html,
  displayColor,
  setDisplayColor,
  setChallenge,
  setCompareAttempts,
} from './_store'
import { Challenges } from './Challenges'
import Editor from './editors/Editor'
import { html as HTMLLang } from '@codemirror/lang-html'
import { css as CSSLang } from '@codemirror/lang-css'
import Correct from './displays/Correct'
import Wrong from './displays/Wrong'
import Compare from './Compare'

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

  const toggleDarkMode = () => {
    setDisplayColor((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
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
      {/* App Bar */}
      <div
        style='
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--glass-border);
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 100;
        height: 64px;
      '
      >
        <div
          style='
          display: flex;
          align-items: center;
          gap: 3rem;
        '
        >
          <div
            style='
            font-size: 1.125rem;
            font-weight: 600;
            letter-spacing: -0.02em;
            color: var(--text-primary);
            position: relative;
          '
          >
            PixelPerfection
            <div
              style="
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 1px;
              background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
              opacity: 0.8;
            "
            ></div>
          </div>
          <nav
            style='
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-size: 0.875rem;
            color: var(--text-secondary);
          '
          >
            <div
              style='
              display: flex;
              align-items: center;
              gap: 0.5rem;
            '
            >
              <span>Challenges</span>
            </div>
            <div
              style='
              width: 4px;
              height: 4px;
              background: var(--text-muted);
              border-radius: 50%;
              opacity: 0.5;
            '
            ></div>
            <div
              style='
              display: flex;
              align-items: center;
              gap: 0.5rem;
            '
            >
              <div
                style='
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                padding: 0.25rem 0.75rem;
                border-radius: 6px;
                font-size: 0.75rem;
                font-weight: 500;
                letter-spacing: 0.025em;
                text-transform: uppercase;
              '
              >
                {challenge().id === 0
                  ? 'Tutorial'
                  : `Challenge ${challenge().id}`}
              </div>
            </div>
            <div
              style='
              width: 4px;
              height: 4px;
              background: var(--text-muted);
              border-radius: 50%;
              opacity: 0.5;
            '
            ></div>
            <div
              style='
              display: flex;
              align-items: center;
              gap: 0.5rem;
            '
            >
              <span>{challenge().name}</span>
            </div>
          </nav>
        </div>
        <div
          style='
          display: flex;
          align-items: center;
          gap: 1.5rem;
        '
        >
          <div
            style='
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.2s ease;
          '
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
            >
              <polygon points='12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2' />
            </svg>
            <span
              style='
              font-weight: 600;
              color: var(--accent-primary);
              font-size: 0.875rem;
            '
            >
              {currentXp()}
            </span>
            <span style='color: var(--text-muted); font-size: 0.75rem;'>
              XP
            </span>
          </div>
          <div
            style='
            position: relative;
            cursor: pointer;
          '
          >
            <div
              style='
              width: 36px;
              height: 36px;
              border-radius: 8px;
              background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              font-size: 0.875rem;
              transition: all 0.2s ease;
              border: 1px solid var(--glass-border);
            '
            >
              JD
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div
        style='
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        z-index: 200;
        left: 1.5rem;
      '
      >
        <button
          onClick={previousChallenge}
          disabled={currentChallenge() === 0}
          style={`
            width: 44px;
            height: 44px;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            color: var(--text-primary);
            border-radius: 8px;
            cursor: ${currentChallenge() === 0 ? 'not-allowed' : 'pointer'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            transition: all 0.2s ease;
            opacity: ${currentChallenge() === 0 ? '0.5' : '1'};
          `}
        >
          ←
        </button>
      </div>
      <div
        style='
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        z-index: 200;
        right: 1.5rem;
      '
      >
        <button
          onClick={nextChallenge}
          disabled={currentChallenge() === Challenges.length - 1}
          style={`
            width: 44px;
            height: 44px;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            color: var(--text-primary);
            border-radius: 8px;
            cursor: ${currentChallenge() === Challenges.length - 1 ? 'not-allowed' : 'pointer'};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            transition: all 0.2s ease;
            opacity: ${currentChallenge() === Challenges.length - 1 ? '0.5' : '1'};
          `}
        >
          →
        </button>
      </div>
      <button
        onClick={exitChallenge}
        style='
          position: fixed;
          top: 1.5rem;
          right: 1.5rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8125rem;
          transition: all 0.2s ease;
          z-index: 200;
        '
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement
          target.style.background = 'var(--danger)'
          target.style.borderColor = 'var(--danger)'
          target.style.color = 'white'
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement
          target.style.background = 'var(--glass-bg)'
          target.style.borderColor = 'var(--glass-border)'
          target.style.color = 'var(--text-secondary)'
        }}
      >
        Exit
      </button>

      {/* Main Container */}
      <div
        style='
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: calc(100vh - 64px);
        background: var(--bg-secondary);
      '
      >
        {/* Code Panel */}
        <div
          style='
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--border-primary);
        '
        >
          <div
            style='
            background: var(--bg-secondary);
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-primary);
            min-height: 56px;
          '
          >
            <div
              style='
              font-size: 0.875rem;
              font-weight: 500;
              color: var(--text-primary);
              letter-spacing: -0.01em;
            '
            >
              Editor
            </div>
            <div
              style='
              display: flex;
              gap: 2px;
              background: var(--bg-tertiary);
              padding: 2px;
              border-radius: 6px;
            '
            >
              <button
                onClick={() => switchTab('html')}
                style={`
                  padding: 0.375rem 0.875rem;
                  background: ${currentTab() === 'html' ? 'var(--text-primary)' : 'transparent'};
                  border: none;
                  color: ${currentTab() === 'html' ? 'var(--bg-primary)' : 'var(--text-secondary)'};
                  font-size: 0.8125rem;
                  font-weight: 500;
                  border-radius: 4px;
                  cursor: pointer;
                  transition: all 0.15s ease;
                  letter-spacing: 0.01em;
                `}
              >
                HTML
              </button>
              <button
                onClick={() => switchTab('css')}
                style={`
                  padding: 0.375rem 0.875rem;
                  background: ${currentTab() === 'css' ? 'var(--text-primary)' : 'transparent'};
                  border: none;
                  color: ${currentTab() === 'css' ? 'var(--bg-primary)' : 'var(--text-secondary)'};
                  font-size: 0.8125rem;
                  font-weight: 500;
                  border-radius: 4px;
                  cursor: pointer;
                  transition: all 0.15s ease;
                  letter-spacing: 0.01em;
                `}
              >
                CSS
              </button>
            </div>
          </div>
          <div style='flex: 1; position: relative;'>
            <Show when={currentTab() === 'html'}>
              <Editor
                type='HTML'
                text={html}
                setText={setHtml}
                Lang={HTMLLang}
              />
            </Show>
            <Show when={currentTab() === 'css'}>
              <Editor
                type='CSS'
                text={css}
                setText={setCss}
                Lang={CSSLang}
              />
            </Show>
          </div>
        </div>

        {/* Design Panel */}
        <div
          style={`
          background: var(--bg-secondary);
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          ${displayColor() === 'dark' ? 'filter: brightness(0.8);' : ''}
        `}
        >
          <div
            style='
            background: var(--bg-secondary);
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--border-primary);
            min-height: 56px;
          '
          >
            <div
              style='
              font-size: 0.875rem;
              font-weight: 500;
              color: var(--text-primary);
              letter-spacing: -0.01em;
            '
            >
              Preview
            </div>
            <div
              style='
              display: flex;
              align-items: center;
              gap: 1.5rem;
            '
            >
              <div
                style='
                display: flex;
                align-items: center;
                gap: 0.75rem;
              '
              >
                <span
                  style='
                  font-size: 0.8125rem;
                  color: var(--text-secondary);
                  font-weight: 500;
                '
                >
                  Dark Mode
                </span>
                <div
                  onClick={toggleDarkMode}
                  style={`
                    position: relative;
                    width: 44px;
                    height: 24px;
                    background: ${displayColor() === 'dark' ? 'var(--accent-primary)' : 'var(--bg-tertiary)'};
                    border: 1px solid ${displayColor() === 'dark' ? 'var(--accent-primary)' : 'var(--border-secondary)'};
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.25s ease;
                  `}
                >
                  <div
                    style={`
                    position: absolute;
                    top: 1px;
                    left: 1px;
                    width: 20px;
                    height: 20px;
                    background: var(--text-primary);
                    border-radius: 50%;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                    transform: ${displayColor() === 'dark' ? 'translateX(20px)' : 'translateX(0)'};
                  `}
                  ></div>
                </div>
              </div>
              <Compare />
            </div>
          </div>
          <div
            style='
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1px;
            background: var(--border-primary);
            margin: 1px;
          '
          >
            <div
              style={`
              background: ${displayColor() === 'dark' ? 'var(--bg-tertiary)' : '#ffffff'};
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 300px;
              transition: all 0.3s ease;
            `}
            >
              <div
                style='
                position: absolute;
                top: 1rem;
                left: 1rem;
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                padding: 0.25rem 0.75rem;
                border-radius: 4px;
                z-index: 10;
                background: var(--success);
                color: white;
              '
              >
                Target
              </div>
              <Correct />
            </div>
            <div
              style={`
              background: ${displayColor() === 'dark' ? 'var(--bg-tertiary)' : '#ffffff'};
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 300px;
              transition: all 0.3s ease;
            `}
            >
              <div
                style='
                position: absolute;
                top: 1rem;
                left: 1rem;
                font-size: 0.75rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                padding: 0.25rem 0.75rem;
                border-radius: 4px;
                z-index: 10;
                background: var(--danger);
                color: white;
              '
              >
                Current
              </div>
              <Wrong />
            </div>
          </div>
        </div>
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
