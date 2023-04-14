import Image from 'next/image'
import { useState } from 'react'

export default function SettingsForm () {
  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(15)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue(Number(e.target.value))
  }

  const handleIncrease = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue((prevValue: number) => prevValue + 1)
  }

  const handleDecrease = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue((prevValue: number) => prevValue - 1)
  }

  return (
    <form className='border-b'>
          <div className='flex justify-between w-full mb-[0.5rem]'>
            <label className='text-[#979797] opacity-[.67] font-bold' >pomodoro</label>
            <div className='relative flex'>
              <input
                type="number"
                className='h-8 rounded-md border bg-[#EFF1FA] text-left pl-2 text-[#1E213F] font-bold w-[6rem]'
                value={pomodoro}
                onChange={(e) => { handleChange(e, setPomodoro) }} />
              <Image
                src='/images/icon-arrow-up.svg'
                alt='arrow up icon'
                className='fill-[#EFF1FA] absolute top-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:fill-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleIncrease(setPomodoro) }}
              />
              <Image
                src='/images/icon-arrow-down.svg'
                alt='arrow down icon'
                className='decoration-[#EFF1FA] absolute bottom-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleDecrease(setPomodoro) }}
              />
            </div>
          </div>
          <div className='flex justify-between w-full mb-[0.5rem]'>
            <label className='text-[#979797] opacity-[.67] font-bold' >short break</label>
            <div className='relative flex'>
              <input
                type='number'
                className='h-8 rounded-md border bg-[#EFF1FA] text-left pl-2 text-[#1E213F] font-bold w-[6rem]'
                value={shortBreak}
                onChange={(e) => { handleChange(e, setShortBreak) }}
              />
              <Image
                src='/images/icon-arrow-up.svg'
                alt='arrow up icon'
                className='decoration-[#EFF1FA] absolute top-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleIncrease(setShortBreak) }}
              />
              <Image
                src='/images/icon-arrow-down.svg'
                alt='arrow down icon'
                className='decoration-[#EFF1FA] absolute bottom-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleDecrease(setShortBreak) }}
              />
            </div>
          </div>
          <div className='flex justify-between w-full mb-[1rem]'>
            <label className='text-[#979797] opacity-[.67] font-bold' >long break</label>
            <div className='relative flex'>
              <input
                type='number'
                className='h-8 rounded-md border bg-[#EFF1FA] text-left pl-2 text-[#1E213F] font-bold w-[6rem]'
                value={longBreak}
                onChange={(e) => { handleChange(e, setLongBreak) }}
              />
              <Image
                src='/images/icon-arrow-up.svg'
                alt='arrow up icon'
                className='decoration-[#EFF1FA] absolute top-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleIncrease(setLongBreak) }}
              />
              <Image
                src='/images/icon-arrow-down.svg'
                alt='arrow down icon'
                className='decoration-[#EFF1FA] absolute bottom-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                width={10}
                height={10}
                onClick={() => { handleDecrease(setLongBreak) }}
              />
            </div>
          </div>
        </form>
  )
}
