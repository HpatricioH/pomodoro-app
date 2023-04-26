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

export function useTimer () {
  const { pomodoro, shortBreak, longBreak } = useTime() as TimeContextProps
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro')
  const [isPaused, setIsPaused] = useState(true)
  const [timeLeft, setTimeLeft] = useState(pomodoro * 60)
  const router = useRouter()

  useEffect(() => {
    // set up time left for each mode based on the current route
    const timeMap: any = {
      '/': ['pomodoro', pomodoro * 60],
      '/short-break': ['shortBreak', shortBreak * 60],
      '/long-break': ['longBreak', longBreak * 60]
    }

    const [newMode, newTime] = timeMap[router.pathname] || timeMap['/']

    setMode(newMode)
    setTimeLeft(newTime)
  }, [router.pathname, pomodoro, shortBreak, longBreak])

  useEffect(() => {
    let timer: any
    const tick = () => {
      setTimeLeft(timeLeft => timeLeft - 1)
    }
    if (!isPaused && timeLeft > 0) {
      timer = setTimeout(tick, 1000)
    }
    return () => { clearTimeout(timer) }
  }, [isPaused, timeLeft])

  let totalSeconds = mode === 'pomodoro' ? pomodoro * 60 : shortBreak * 60

  if (mode === 'longBreak') totalSeconds = longBreak * 60

  const percentage = Math.round((timeLeft / totalSeconds) * 100)

  let minutes = Math.floor(timeLeft / 60)
  if (minutes < 10) minutes = `0${minutes}`
  let seconds = timeLeft % 60
  if (seconds < 10) seconds = `0${seconds}`

  return { minutes, seconds, percentage, isPaused, setIsPaused }
}
