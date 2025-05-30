import Display from '../display/display'
import Compare from '../compare/compare'
import { challenge, css, displayColor, setDisplayColor } from '../../_store'
import './design-panel.scss'

export default function DesignPanel() {
  const toggleDarkMode = () => {
    setDisplayColor((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div class={`design-panel design-panel--${displayColor()}`}>
      <div class='design-panel__header'>
        <div class='design-panel__title'>Preview</div>
        <div class='design-panel__controls'>
          <div class='design-panel__dark-mode-toggle'>
            <span class='design-panel__dark-mode-label'>Dark Mode</span>
            <div
              onClick={toggleDarkMode}
              class={`design-panel__toggle-switch design-panel__toggle-switch--${displayColor()}`}
            >
              <div
                class={`design-panel__toggle-knob design-panel__toggle-knob--${displayColor()}`}
              ></div>
            </div>
          </div>
          <Compare />
        </div>
      </div>
      <div
        class={`design-panel__preview-grid design-panel__preview-grid--${displayColor()}`}
      >
        <div class={`design-panel__preview-pane`}>
          <div class='design-panel__preview-label design-panel__preview-label--target'>
            Target
          </div>
          <Display css={challenge().correctCSS} />
        </div>
        <div class={`design-panel__preview-pane`}>
          <div class='design-panel__preview-label design-panel__preview-label--current'>
            Current
          </div>
          <Display css={css()} />
        </div>
      </div>
    </div>
  )
}
