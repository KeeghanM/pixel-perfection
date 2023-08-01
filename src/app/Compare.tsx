import * as htmlToImage from 'html-to-image'
import { createSignal } from 'solid-js'
import Confetti from './Confetti'

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

  const calculateColor = (weightedPercentage: number): string => {
    let r, g
    if (weightedPercentage >= 80) {
      // When weightedPercentage >= 80, color goes from (50, 255) to (0, 255)
      r = 50 - (weightedPercentage - 80) * 2.5
      g = 255
    } else if (weightedPercentage >= 60) {
      // When 60 <= weightedPercentage < 80, color goes from (180, 205) to (50, 255)
      r = 180 - (weightedPercentage - 60) * 6.5
      g = 205 + (weightedPercentage - 60) * 2.5
    } else {
      // When weightedPercentage < 60, color goes from (255, 0) to (180, 205)
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
            size: {
              width: canvas.width,
              height: canvas.height,
            },
          })
        } else {
          reject(new Error('Unable to get 2D context from canvas'))
        }
      }
      image.onerror = (err) => reject(err)
    })
  }

  const runTest = async () => {
    setModalShown(true)
    setLoadingPercentage(0)
    setWrongImage(undefined)
    setCorrectImage(undefined)
    setMatchPercentage(0)
    setOpacity(0.5)

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

        // Ignore the default background when calculating match percentage
        // we have set the bg to be 101,101,101 for dark mode and 254,254,254 for light mode
        // which is close to white and dark gray respectively but not exactly the same
        if (
          (wrongRed == 254 &&
            wrongGreen == 254 &&
            wrongBlue == 254 &&
            correctRed == 255 &&
            correctGreen == 255 &&
            correctBlue == 255) ||
          (wrongRed == 101 &&
            wrongGreen == 101 &&
            wrongBlue == 101 &&
            correctRed == 101 &&
            correctGreen == 101 &&
            correctBlue == 101)
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
          clearInterval(id)
        }
        setLoadingPercentage((old) => old + 1)
      }, 10)
    }
  }

  return (
    <>
      <div
        onclick={() => {
          setModalShown(false)
        }}
        class={
          'fixed inset-0 bg-[rgba(0,0,0,0.8)]' +
          (modalShown() ? ' z-10' : ' hidden')
        }
      ></div>
      <div
        class={
          'fixed left-0 right-0 top-24 z-20 mx-auto min-w-[300px] max-w-fit rounded-lg border border-gray-400 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800' +
          (modalShown() ? '' : ' hidden')
        }
      >
        {loadingPercentage() < 100 ? (
          <>
            <div class='relative h-10 w-full'>
              <div
                class='h-10 rounded-full bg-blue-500'
                style={`width: ${loadingPercentage()}%;`}
              ></div>
              <span class='absolute left-0 right-0 top-2 mx-auto w-fit'>
                Calculating...
              </span>
              {loadingPercentage() >= 100 ? <Confetti /> : <></>}
            </div>
          </>
        ) : (
          <div class='mx-auto mt-4 flex w-fit flex-col justify-center'>
            <h3 class='mb-6 w-full text-center text-3xl font-bold'>
              Match Percentage:{' '}
              <span style={`color: ${calculateColor(matchPercentage())}`}>
                {Math.round(matchPercentage() * 100) / 100}%
              </span>
            </h3>
            <div class='mb-2 flex w-full items-center justify-between gap-2'>
              <p>Correct</p>
              <input
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
              class='relative'
              style={sizeString()}
            >
              <div class='absolute inset-0 left-0 right-0 mx-auto w-fit'>
                <img
                  src={correctImage()}
                  alt='Correct Image'
                />
              </div>
              <div
                class='absolute inset-0 left-0 right-0 mx-auto w-fit'
                style={`opacity: ${opacity()};`}
              >
                <img
                  src={wrongImage()}
                  alt='Wrong Image'
                />
              </div>
            </div>
            <button
              onclick={() => {
                setModalShown(false)
              }}
              class='mt-2 w-fit cursor-pointer rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700'
            >
              Close
            </button>
          </div>
        )}
      </div>
      <button
        class='mx-auto mt-2 h-fit w-fit cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
        onClick={runTest}
      >
        Run Comparison
      </button>
    </>
  )
}
