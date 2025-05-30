import Correct from '../displays/correct-display/correct-display'
import Wrong from '../displays/wrong-display/wrong-display'
import Compare from '../compare/compare'
import { displayColor, setDisplayColor } from '../../_store'
import './design-panel.scss'

export default function DesignPanel() {
  const toggleDarkMode = () => {
    setDisplayColor((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div
      class={`design-panel ${displayColor() === 'dark' ? 'design-panel--dark-mode' : ''}`}
    >
      <div class='design-panel__header'>
        <div class='design-panel__title'>Preview</div>
        <div class='design-panel__controls'>
          <div class='design-panel__dark-mode-toggle'>
            <span class='design-panel__dark-mode-label'>Dark Mode</span>
            <div
              onClick={toggleDarkMode}
              class={`design-panel__toggle-switch ${displayColor() === 'dark' ? 'design-panel__toggle-switch--dark' : 'design-panel__toggle-switch--light'}`}
            >
              <div
                class={`design-panel__toggle-knob ${displayColor() === 'dark' ? 'design-panel__toggle-knob--dark' : 'design-panel__toggle-knob--light'}`}
              ></div>
            </div>
          </div>
          <Compare />
        </div>
      </div>
      <div class='design-panel__preview-grid'>
        <div
          class={`design-panel__preview-pane ${displayColor() === 'dark' ? 'design-panel__preview-pane--dark' : 'design-panel__preview-pane--light'}`}
        >
          <div class='design-panel__preview-label design-panel__preview-label--target'>
            Target
          </div>
          <Correct />
        </div>
        <div
          class={`design-panel__preview-pane ${displayColor() === 'dark' ? 'design-panel__preview-pane--dark' : 'design-panel__preview-pane--light'}`}
        >
          <div class='design-panel__preview-label design-panel__preview-label--current'>
            Current
          </div>
          <Wrong />
        </div>
      </div>
    </div>
  )
}
