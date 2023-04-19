import Image from 'next/image'
import { useState } from 'react'

export default function SettingsForm () {
  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(15)

  const formArray = [
    {
      label: 'pomodoro',
      value: pomodoro,
      setValue: setPomodoro
    },
    {
      label: 'short break',
      value: shortBreak,
      setValue: setShortBreak
    },
    {
      label: 'long break',
      value: longBreak,
      setValue: setLongBreak
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue(Number(e.target.value))
  }

  const handleIncrease = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue((prevValue: number) => prevValue + 1)
  }

  const handleDecrease = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue((prevValue: number) => prevValue - 1)
  }

  // TODO: bring the color and font components here and make it as inputs.
  return (
    <form className='border-b'>
      <div className='flex flex-col justify-between w-full mb-[0.5rem]'>
        {
          formArray.map((item, index) => {
            return (
              <div key={index} className='relative flex justify-between py-1'>
                <label className='text-[#979797] opacity-[.67] font-bold' >{item.label}</label>
                <div className='relative'>
                  <input
                    type="number"
                    className='h-8 rounded-md border bg-[#EFF1FA] pl-2 text-[#1E213F] font-bold w-[6rem]'
                    value={item.value}
                    onChange={(e) => { handleChange(e, item.setValue) }} />
                  <Image
                    src='/images/icon-arrow-up.svg'
                    alt='arrow up icon'
                    className='decoration-[#EFF1FA] absolute top-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                    width={10}
                    height={10}
                    onClick={() => { handleIncrease(item.setValue) }}
                  />
                  <Image
                    src='/images/icon-arrow-down.svg'
                    alt='arrow down icon'
                    className='decoration-[#EFF1FA] absolute bottom-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                    width={10}
                    height={10}
                    onClick={() => { handleDecrease(item.setValue) }}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </form>
  )
}
