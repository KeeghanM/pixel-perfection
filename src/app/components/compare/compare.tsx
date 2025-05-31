import * as htmlToImage from 'html-to-image'
import { createSignal } from 'solid-js'
import {
  challenge,
  compareAttmepts,
  css,
  currentXp,
  html,
  setCompareAttempts,
  setCurrentXp,
} from '../../_store'
import './compare.scss'

export default function Compare() {
  const [wrongImage, setWrongImage] = createSignal<string | undefined>(
    undefined
  )
  const [correctImage, setCorrectImage] = createSignal<string | undefined>(
    undefined
  )
  const [opacity, setOpacity] = createSignal(0.5)
  const [matchPercentage, setMatchPercentage] = createSignal(0)
  const [modalShown, setModalShown] = createSignal(false)
  const [loadingPercentage, setLoadingPercentage] = createSignal(0)
  const [sizeString, setSizeString] = createSignal('')
  const [xpGainString, setXpGainString] = createSignal('')

  const calculateColor = (weightedPercentage: number): string => {
    let r, g
    if (weightedPercentage >= 80) {
      r = 50 - (weightedPercentage - 80) * 2.5
      g = 255
    } else if (weightedPercentage >= 60) {
      r = 180 - (weightedPercentage - 60) * 6.5
      g = 205 + (weightedPercentage - 60) * 2.5
    } else {
      r = 255
      g = weightedPercentage * 3.42
    }
    return `rgb(${Math.round(r)}, ${Math.round(g)}, 0)`
  }

  const imageToPixelData = (
    dataURL: string
  ): Promise<
    | { data: Uint8ClampedArray; size: { width: number; height: number } }
    | undefined
  > => {
    return new Promise((resolve, reject) => {
      let image = new Image()
      image.src = dataURL
      image.onload = () => {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        var ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(image, 0, 0)
          resolve({
            data: ctx.getImageData(0, 0, canvas.width, canvas.height).data,
            size: { width: canvas.width, height: canvas.height },
          })
        } else {
          reject(new Error('Unable to get 2D context from canvas'))
        }
      }
      image.onerror = (err) => reject(err)
    })
  }

  const runTest = async () => {
    setCompareAttempts((old) => old + 1)
    setModalShown(true)
    setLoadingPercentage(0)
    setWrongImage(undefined)
    setCorrectImage(undefined)
    setMatchPercentage(0)
    setOpacity(0.5)
    setXpGainString('')

    const wrongIframe = document.getElementById(
      'wrongIframe'
    ) as HTMLIFrameElement
    const wrongScreen = wrongIframe?.contentDocument?.body as HTMLBodyElement
    const correctIframe = document.getElementById(
      'correctIframe'
    ) as HTMLIFrameElement
    const correctScreen = correctIframe?.contentDocument
      ?.body as HTMLBodyElement

    const wrongUrl = await htmlToImage.toPng(wrongScreen)
    const wrongData = await imageToPixelData(wrongUrl)
    const wrongPixelData = wrongData?.data
    setSizeString(
      `width: ${wrongData?.size.width}px; height: ${wrongData?.size.height}px;`
    )

    const correctUrl = await htmlToImage.toPng(correctScreen)
    const correctData = await imageToPixelData(correctUrl)
    const correctPixelData = correctData?.data

    setWrongImage(wrongUrl)
    setCorrectImage(correctUrl)

    if (wrongPixelData && correctPixelData) {
      let match = 0
      let skipped = 0
      for (let i = 0; i < wrongPixelData.length; i += 4) {
        const wrongRed = wrongPixelData[i]
        const wrongGreen = wrongPixelData[i + 1]
        const wrongBlue = wrongPixelData[i + 2]
        const wrongAlpha = wrongPixelData[i + 3]
        const correctRed = correctPixelData[i]
        const correctGreen = correctPixelData[i + 1]
        const correctBlue = correctPixelData[i + 2]
        const correctAlpha = correctPixelData[i + 3]

        if (
          (wrongRed == 254 &&
            wrongGreen == 254 &&
            wrongBlue == 254 &&
            correctRed == 254 &&
            correctGreen == 254 &&
            correctBlue == 254) ||
          (wrongRed == 30 &&
            wrongGreen == 30 &&
            wrongBlue == 30 &&
            correctRed == 30 &&
            correctGreen == 30 &&
            correctBlue == 30)
        ) {
          skipped++
          continue
        }

        const rDiff = Math.abs(wrongRed - correctRed)
        const gDiff = Math.abs(wrongGreen - correctGreen)
        const bDiff = Math.abs(wrongBlue - correctBlue)
        const aDiff = Math.abs(wrongAlpha - correctAlpha)

        if ((rDiff + gDiff + bDiff + aDiff) / 4 == 0) {
          match++
        }
      }
      const rawPercentage = match / ((wrongPixelData.length - skipped * 4) / 4)
      setMatchPercentage(rawPercentage * 100)

      var id = setInterval(() => {
        if (loadingPercentage() >= 100) {
          if (rawPercentage === 1) setXp()
          clearInterval(id)
        }
        setLoadingPercentage((old) => old + 1)
      }, 10)
    }
  }

  const setXp = () => {
    const completedChallenges = JSON.parse(
      localStorage.getItem('completedChallenges') || '[]'
    )
    if (completedChallenges.includes(challenge().id)) {
      setXpGainString(
        `Challenge already completed!<br />No XP gained.<br />Current total: ${currentXp()}XP`
      )
      return
    }

    completedChallenges.push(challenge().id)
    localStorage.setItem(
      'completedChallenges',
      JSON.stringify(completedChallenges)
    )

    const xpGain =
      challenge().id == 0 ? 1000 : 1000 - (compareAttmepts() - 1) * 50
    const clampedXp = Math.max(50, Math.min(1000, xpGain))
    setCurrentXp((old) => old + clampedXp)

    const totalXp = JSON.parse(localStorage.getItem('totalXp') || '0')
    localStorage.setItem('totalXp', JSON.stringify(totalXp + clampedXp))

    setXpGainString(
      `${challenge().id > 0 ? `1000XP<br>- 50 * ${compareAttmepts() - 1} comparisons<br>` : ''}= +${clampedXp}XP<br />New total: ${currentXp()}XP`
    )
  }

  const closeModal = () => {
    setModalShown(false)
  }

  const isButtonEnabled = () => {
    return css() != challenge().wrongCSS || html() != challenge().HTML
  }

  return (
    <>
      <div
        onclick={closeModal}
        class={`compare__overlay ${modalShown() ? '' : 'compare__overlay--hidden'}`}
      ></div>

      <div
        class={`compare__modal ${modalShown() ? '' : 'compare__modal--hidden'}`}
      >
        {loadingPercentage() < 100 ? (
          <div class='compare__loading'>
            <div
              class='compare__loading-bar'
              style={`width: ${loadingPercentage()}%;`}
            ></div>
            <span class='compare__loading-text'>Calculating...</span>
          </div>
        ) : (
          <div class='compare__results'>
            <h3 class='compare__title'>
              Match Percentage:{' '}
              <span
                class='compare__percentage'
                style={`color: ${calculateColor(matchPercentage())}`}
              >
                {Math.round(matchPercentage() * 100) / 100}%
              </span>
            </h3>
            <div class='compare__opacity-controls'>
              <p>Correct</p>
              <input
                class='compare__opacity-slider'
                type='range'
                min='0'
                max='1'
                step='0.01'
                value={opacity()}
                oninput={(e) => setOpacity(parseFloat(e.target.value))}
              />
              <p>Wrong</p>
            </div>
            <div
              class='compare__image-container'
              style={sizeString()}
            >
              <div class='compare__image-layer'>
                <img
                  src={correctImage()}
                  alt='Correct Image'
                />
              </div>
              <div
                class='compare__image-layer compare__image-layer--overlay'
                style={`opacity: ${opacity()};`}
              >
                <img
                  src={wrongImage()}
                  alt='Wrong Image'
                />
              </div>
            </div>
            {xpGainString() !== '' ? (
              <p
                class='compare__xp-display'
                innerHTML={xpGainString()}
              />
            ) : null}
            <button
              onclick={closeModal}
              class='compare__close-button'
            >
              Close
            </button>
          </div>
        )}
      </div>

      <button
        disabled={!isButtonEnabled()}
        class={`compare__run-button ${isButtonEnabled() ? 'compare__run-button--enabled' : 'compare__run-button--disabled'}`}
        onClick={runTest}
      >
        Run Comparison
      </button>
    </>
  )
}
