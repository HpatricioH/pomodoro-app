import { type ColorContextProps } from '@/lib/context/ColorContext'
import { type TimeContextProps } from '@/lib/context/TimeContext'
import useColor from '@/lib/hooks/useColor'
import useTime from '@/lib/hooks/useTime'
import { useEffect, useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useRouter } from 'next/router'
import 'react-circular-progressbar/dist/styles.css'

interface PlayPauseButtonProps {
  isPaused: boolean
  setIsPaused: (isPaused: boolean) => void
}

function PlayPauseButton ({ isPaused, setIsPaused }: PlayPauseButtonProps) {
  const text = isPaused ? 'play' : 'pause'
  const left = isPaused ? '5.3rem' : '4.8rem'

  return (
    <h2 className={`absolute bottom-[3.8rem] left-[${left}] text-[#D7E0FF] uppercase font-normal text-[0.8rem] tracking-[0.5rem] cursor-pointer`} onClick={() => { setIsPaused(!isPaused) }}>{text}</h2>
  )
}

export default function Timer () {
  const { color } = useColor() as ColorContextProps
  const { pomodoro, shortBreak, longBreak } = useTime() as TimeContextProps
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro')
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(pomodoro * 60)
  const router = useRouter()

  useEffect(() => {
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

  const minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft % 60
  if (seconds < 10) seconds = `0${seconds}`

  return (
    <div className='relative w-[14rem] h-[14rem] bg-gradient-to-br shadow-2xl shadow-[#D7E0FF]/20 from-[#161932] from-20% via-[#1E213F] to-[#212840] p-[0.8rem] rounded-full'>
      <CircularProgressbar
        value={percentage}
        text={`${minutes}:${seconds}`}
        background={true}
        backgroundPadding={5}
        strokeWidth={4}
        styles={buildStyles({
          textColor: '#D7E0FF',
          pathColor: `${color === '' ? '#F87070' : color}`,
          trailColor: '#161932',
          backgroundColor: '#161932'
        })}
      />
      <PlayPauseButton isPaused={isPaused} setIsPaused={setIsPaused} />
    </div>

  )
}
