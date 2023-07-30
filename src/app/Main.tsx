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
      <div class='fixed z-50 flex w-full justify-end p-2 md:p-4 lg:p-6'>
        <ThemeToggle />
      </div>
      <div class='grid h-[80vh] grid-cols-[minmax(30vw,_450px)_1fr] py-12'>
        <div class='flex flex-1 flex-col'>
          <Editors />
        </div>
        <div class='flex flex-col gap-2'>
          <div class='w-full text-center'>
            <h1 class='mb-2 mt-6 text-4xl text-blue-500'>{challenge().name}</h1>
            <p class='mx-auto mb-6 max-w-screen-md text-xl leading-7'>
              {challenge().description}
            </p>
          </div>
          <div class='flex flex-1 gap-2'>
            <Correct />
            <Wrong />
          </div>
          <Compare />
          <Swapper />
        </div>
      </div>
    </>
  )
}
