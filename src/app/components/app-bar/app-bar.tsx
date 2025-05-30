import { challenge, currentXp } from '../../_store'
import './app-bar.scss'

export default function AppBar() {
  return (
    <div class='app-bar'>
      <div class='app-bar__left-section'>
        <div class='app-bar__logo'>PixelPerfection</div>
        <nav class='app-bar__nav'>
          <div class='app-bar__nav-item'>
            <span>Challenges</span>
          </div>
          <div class='app-bar__nav-dot'></div>
          <div class='app-bar__nav-item'>
            <div class='app-bar__challenge-badge'>
              {challenge().id === 0
                ? 'Tutorial'
                : `Challenge ${challenge().id}`}
            </div>
          </div>
          <div class='app-bar__nav-dot'></div>
          <div class='app-bar__nav-item'>
            <span>{challenge().name}</span>
          </div>
        </nav>
      </div>
      <div class='app-bar__right-section'>
        <div class='app-bar__xp-container'>
          <svg
            class='app-bar__xp-icon'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
          >
            <polygon points='12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2' />
          </svg>
          <span class='app-bar__xp-value'>{currentXp()}</span>
          <span class='app-bar__xp-label'>XP</span>
        </div>
        <div class='app-bar__user-avatar'>
          <div class='app-bar__user-avatar-circle'>JD</div>
        </div>
      </div>
    </div>
  )
}
