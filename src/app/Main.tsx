import { onMount } from 'solid-js'
import { challenge, currentXp, setCss, setCurrentXp, setHtml } from './_store'
import Editors from './editors/Editors'
import Correct from './displays/Correct'
import Wrong from './displays/Wrong'
import Compare from './Compare'
import { Swapper } from './Swapper'
import MainThemeToggle from './theme/mainToggle'
import DisplayThemeToggle from './theme/displayToggle'

export default function Main() {
  onMount(() => {
    setHtml(challenge().HTML)
    setCss(challenge().wrongCSS)
    setCurrentXp(JSON.parse(localStorage.getItem('totalXp') || '0'))
  })

  return (
    <>
      <div class='h-screen max-h-screen'>
        <div class='flex w-full bg-gray-300 dark:bg-gray-900'>
          <div class='flex flex-1 flex-col items-center py-2'>
            <div class='max-w-screen-md'>
              <Swapper />
            </div>
            <Compare />
          </div>
          <div class='flex flex-col gap-2 p-2'>
            <div class='ml-auto flex w-fit flex-col items-end gap-2'>
              <a
                class='rounded-full bg-red-300 px-4 py-2 text-center font-bold text-gray-800 hover:bg-red-400'
                href='/'
              >
                Exit
              </a>
              <MainThemeToggle />
            </div>
            <p class='ml-auto text-right text-3xl font-bold'>{currentXp()}XP</p>
          </div>
        </div>
        <div class='grid grid-cols-[minmax(30vw,_450px)_1fr] px-6 py-12'>
          <div class='flex h-full flex-col'>
            <Editors />
          </div>
          <div>
            <div class='flex h-full items-center justify-center gap-2'>
              <Correct />
              <DisplayThemeToggle />
              <Wrong />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
