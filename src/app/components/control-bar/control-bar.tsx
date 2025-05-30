import { displayColor, setDisplayColor } from '../../_store'
import Compare from '../compare/compare'
import './control-bar.scss'

export default function ControlBar() {
  return (
    <div class='control-bar'>
      <div class='control-bar__dark-mode-toggle'>
        <span class='control-bar__dark-mode-label'>Dark Mode</span>
        <div
          onClick={() => {
            setDisplayColor((oldTheme) =>
              oldTheme === 'dark' ? 'light' : 'dark'
            )
          }}
          class={`control-bar__toggle-switch control-bar__toggle-switch--${displayColor()}`}
        >
          <div
            class={`control-bar__toggle-knob control-bar__toggle-knob--${displayColor()}`}
          ></div>
        </div>
      </div>
      <Compare />
    </div>
  )
}
