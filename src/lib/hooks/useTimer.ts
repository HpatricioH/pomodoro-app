import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useTime from './useTime'
import { type TimeContextProps } from '../context/TimeContext'

export interface TimerProps {
  minutes: string | number
  seconds: string | number
  percentage: number
  isPaused: boolean
  setIsPaused: (isPaused: boolean) => void
}

// ENUM for timer modes
const POMODORO_MODE = 'pomodoro'
const SHORT_MODE = 'shortBreak'
const LONG_MODE = 'longBreak'

export function useTimer () {
  const { pomodoro, shortBreak, longBreak, counter, setCounter } = useTime() as TimeContextProps
  const [mode, setMode] = useState(POMODORO_MODE)
  const [isPaused, setIsPaused] = useState(true)
  const [timeLeft, setTimeLeft] = useState(pomodoro * 60)
  const router = useRouter()

  // set up time left for each mode based on the current route
  useEffect(() => {
    const timeMap: any = {
      '/': [POMODORO_MODE, pomodoro * 60],
      '/short-break': [SHORT_MODE, shortBreak * 60],
      '/long-break': [LONG_MODE, longBreak * 60]
    }

    const [newMode, newTime] = timeMap[router.pathname] || timeMap['/']

    setMode(newMode)
    setTimeLeft(newTime)
  }, [router.pathname, pomodoro, shortBreak, longBreak])

  // set up timer based on the time left and the mode
  useEffect(() => {
    let timer: any
    const tick = () => {
      setTimeLeft(timeLeft => timeLeft - 1)
    }
    if (!isPaused && timeLeft > 0) {
      timer = setTimeout(tick, 1000)
    } else if (timeLeft === 0) {
      // play sound
      const audio = new Audio('/sounds/done.mp3')
      audio.play()

      // switch mode
      if (mode === POMODORO_MODE && counter < 3) {
        router.push('/short-break')
      } else if (mode === SHORT_MODE && counter < 3) {
        router.push('/')
        setCounter(counter + 1)
      } else if (mode === POMODORO_MODE && counter === 3) {
        router.push('/long-break')
      } else if (mode === LONG_MODE) {
        router.push('/')
        setCounter(0)
      }
    }

    return () => { clearTimeout(timer) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, timeLeft, mode, router])

  // calculate percentage of time left
  let totalSeconds = mode === POMODORO_MODE ? pomodoro * 60 : shortBreak * 60

  if (mode === LONG_MODE) totalSeconds = longBreak * 60

  const percentage = Math.round((timeLeft / totalSeconds) * 100)

  let minutes: string = Math.floor(timeLeft / 60).toString()
  if (minutes.length === 1) minutes = `0${minutes}`

  let seconds: string = (timeLeft % 60).toString()
  if (seconds.length === 1) seconds = `0${seconds}`

  return { minutes, seconds, percentage, isPaused, setIsPaused }
}
