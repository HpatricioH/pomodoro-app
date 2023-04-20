import Image from 'next/image'
import { useState } from 'react'
import Button from '../Button/Button'

interface SettingsFormProps {
  setShowModal: (value: boolean) => void
}

export default function SettingsForm ({ setShowModal }: SettingsFormProps) {
  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(15)

  const formArray = [
    {
      label: 'pomodoro',
      value: pomodoro,
      setValue: setPomodoro,
      name: 'pomodoro',
      id: 'pomodoro'
    },
    {
      label: 'short break',
      value: shortBreak,
      setValue: setShortBreak,
      name: 'shortBreak',
      id: 'shortBreak'
    },
    {
      label: 'long break',
      value: longBreak,
      setValue: setLongBreak,
      name: 'longBreak',
      id: 'longBreak'
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { pomodoro, shortBreak, longBreak } = Object.fromEntries(
      new window.FormData(e.currentTarget).entries()
    )

    console.log(pomodoro, shortBreak, longBreak)
    setShowModal(false)
  }

  // TODO: bring the color and font components here and make it as inputs.
  return (
    <form className='border-b flex flex-col justify-center items-center' onSubmit={handleSubmit}>
      <div className='flex flex-col justify-between w-full mb-[0.5rem]'>
        {
          formArray.map((item, index) => {
            return (
              <div key={index} className='relative flex justify-between py-1'>
                <label className='text-[#979797] opacity-[.67] font-bold' >{item.label}</label>
                <div className='relative'>
                  <input
                    type="number"
                    name={item.name}
                    id={item.id}
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
      <Button/>
    </form>
  )
}
