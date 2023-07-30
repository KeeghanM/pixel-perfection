import { onMount } from 'solid-js'
import { challenge, setCss, setHtml } from './_store'
import Editors from './editors/Editors'
import Correct from './displays/Correct'
import Wrong from './displays/Wrong'
import Compare from './Compare'
import { Swapper } from './Swapper'
import ThemeToggle from './ThemeToggle'

export default function Main() {
  onMount(() => {
    setHtml(challenge().HTML)
    setCss(challenge().wrongCSS)
  })

  return (
    <>
      <div class='fixed right-0 top-0 flex p-2 md:p-4 lg:p-6'>
        <ThemeToggle />
      </div>
      <div class='h-screen max-h-screen'>
        <div class='w-full bg-gray-300 py-4 text-center dark:bg-gray-900'>
          <Swapper />
          <Compare />
        </div>
        <div class='grid grid-cols-[minmax(30vw,_450px)_1fr] px-6 py-12'>
          <div class='flex h-full flex-col'>
            <Editors />
          </div>
          <div class='flex h-full items-center justify-center gap-2'>
            <Correct />
            <Wrong />
          </div>
        </div>
      </div>
    </>
  )
}
