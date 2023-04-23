import Image from 'next/image'
import Button from '../Button/Button'
import useTime from '@/lib/hooks/useTime'
import { type TimeContextProps } from '@/lib/context/TimeContext'
import { useState } from 'react'

interface SettingsFormProps {
  setShowModal: (value: boolean) => void
}

export default function SettingsForm ({ setShowModal }: SettingsFormProps) {
  const { pomodoro, setPomodoro, shortBreak, setShortBreak, longBreak, setLongBreak } = useTime() as TimeContextProps
  const [pomodoroValue, setPomodoroValue] = useState(pomodoro)
  const [shortBreakValue, setShortBreakValue] = useState(shortBreak)
  const [longBreakValue, setLongBreakValue] = useState(longBreak)

  const formArray = [
    {
      label: 'pomodoro',
      value: pomodoroValue,
      setValue: setPomodoroValue,
      name: 'pomodoro',
      id: 'pomodoro'
    },
    {
      label: 'short break',
      value: shortBreakValue,
      setValue: setShortBreakValue,
      name: 'shortBreak',
      id: 'shortBreak'
    },
    {
      label: 'long break',
      value: longBreakValue,
      setValue: setLongBreakValue,
      name: 'longBreak',
      id: 'longBreak'
    }
  ]

  // TODO: make this handles into a utils function and use it in this component
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

    setPomodoro(Number(pomodoro))
    setShortBreak(Number(shortBreak))
    setLongBreak(Number(longBreak))

    setShowModal(false)
  }

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
                    onChange={(e) => { handleChange(e, item.setValue as any) }} />
                  <Image
                    src='/images/icon-arrow-up.svg'
                    alt='arrow up icon'
                    className='decoration-[#EFF1FA] absolute top-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                    width={10}
                    height={10}
                    onClick={() => { handleIncrease(item.setValue as any) }}
                  />
                  <Image
                    src='/images/icon-arrow-down.svg'
                    alt='arrow down icon'
                    className='decoration-[#EFF1FA] absolute bottom-[0.5rem] place-self-center right-[0.5rem] cursor-pointer hover:decoration-[#1E213F]'
                    width={10}
                    height={10}
                    onClick={() => { handleDecrease(item.setValue as any) }}
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
