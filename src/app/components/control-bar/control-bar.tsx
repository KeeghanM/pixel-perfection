import { displayColor, setDisplayColor } from '../../_store'
import Compare from '../compare/compare'
import './control-bar.scss'

export default function ControlBar() {
  const handleChange = () =>
    setDisplayColor((oldTheme) => (oldTheme === 'dark' ? 'light' : 'dark'))
  return (
    <div class='control-bar'>
      <div class='control-bar__dark-mode-toggle'>
        <span class='control-bar__dark-mode-label'>Dark Mode</span>
        <div
          role='button'
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleChange()
            }
          }}
          onClick={handleChange}
          class={`control-bar__toggle-switch control-bar__toggle-switch--${displayColor()}`}
        >
          <div
            class={`control-bar__toggle-knob control-bar__toggle-knob--${displayColor()}`}
          />
        </div>
      </div>
      <Compare />
    </div>
  )
}
