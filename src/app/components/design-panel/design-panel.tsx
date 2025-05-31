import Display from '../display/display'
import { challenge, css, html, displayColor } from '../../_store'
import './design-panel.scss'

export default function DesignPanel() {
  return (
    <div class={`design-panel design-panel--${displayColor()}`}>
      <div class='design-panel__preview-pane'>
        <div class='design-panel__preview-label design-panel__preview-label--target'>
          Target
        </div>
        <Display
          html={challenge().HTML}
          css={challenge().correctCSS}
          type='correct'
        />
      </div>
      <div class='design-panel__preview-pane'>
        <div class='design-panel__preview-label design-panel__preview-label--current'>
          Current
        </div>
        <Display
          html={html()}
          css={css()}
          type='wrong'
        />
      </div>
    </div>
  )
}
