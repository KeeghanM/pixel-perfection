import Display from '../display/display'
import { challenge, css, displayColor } from '../../_store'
import './design-panel.scss'

export default function DesignPanel() {
  return (
    <div class={`design-panel design-panel--${displayColor()}`}>
      <div class='design-panel__preview-pane'>
        <div class='design-panel__preview-label design-panel__preview-label--target'>
          Target
        </div>
        <Display
          css={challenge().correctCSS}
          type='correct'
        />
      </div>
      <div class='design-panel__preview-pane'>
        <div class='design-panel__preview-label design-panel__preview-label--current'>
          Current
        </div>
        <Display
          css={css()}
          type='wrong'
        />
      </div>
    </div>
  )
}
