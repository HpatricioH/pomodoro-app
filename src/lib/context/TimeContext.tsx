import { type ReactNode, createContext, useState } from 'react'

export interface TimeContextProps {
  pomodoro: number
  setPomodoro: (pomodoro: number) => void
  shortBreak: number
  setShortBreak: (shortBreak: number) => void
  longBreak: number
  setLongBreak: (longBreak: number) => void
}

interface Props {
  children: ReactNode
}

export const TimeContext = createContext<TimeContextProps | null>(null)

export const TimeProvider = ({ children }: Props) => {
  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setShortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(15)

  const value = {
    pomodoro,
    setPomodoro,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak
  }

  return (
    <TimeContext.Provider value={value}>
      {children}
    </TimeContext.Provider>
  )
}

export default TimeContext
