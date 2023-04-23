import { type ColorContextProps } from '@/lib/context/ColorContext'
import { type TimeContextProps } from '@/lib/context/TimeContext'
import useColor from '@/lib/hooks/useColor'
import useTime from '@/lib/hooks/useTime'
import { useEffect, useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { useRouter } from 'next/router'
import 'react-circular-progressbar/dist/styles.css'

export default function Timer () {
  const { color } = useColor() as ColorContextProps
  const { pomodoro, shortBreak, longBreak } = useTime() as TimeContextProps
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro')
  // const [status, setStatus] = useState<'stopped' | 'running' | 'paused'>('stopped')
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const router = useRouter()

  const secondsLeftRef = useRef(timeLeft)

  const tick = () => {
    secondsLeftRef.current = secondsLeftRef.current - 1
    setTimeLeft(secondsLeftRef.current)
  }

  useEffect(() => {
    const initTimer = () => {
      if (router.pathname === '/') {
        setMode('pomodoro')
        setTimeLeft(pomodoro * 60)
      } else if (router.pathname === '/short-break') {
        setMode('shortBreak')
        setTimeLeft(shortBreak * 60)
      } else if (router.pathname === '/long-break') {
        setMode('longBreak')
        setTimeLeft(longBreak * 60)
      }
    }

    const timer = setInterval(() => {
      // if (secondsLeftRef.current > 0 && !isPaused) {
      //   tick()
      // } else if (secondsLeftRef.current === 0) {
      //   clearInterval(timer)
      //   if (mode === 'pomodoro') {
      //     router.push('/short-break')
      //   } else if (mode === 'shortBreak') {
      //     router.push('/')
      //   } else if (mode === 'longBreak') {
      //     router.push('/')
      //   }
      // }
      tick()
    }, 1000)

    initTimer()
  }, [pomodoro, shortBreak, longBreak, router.pathname])

  let totalSeconds = mode === 'pomodoro' ? pomodoro * 60 : shortBreak * 60

  if (mode === 'longBreak') totalSeconds = longBreak * 60

  const percentage = Math.round((timeLeft / totalSeconds) * 100)

  const minutes = Math.floor(timeLeft / 60)
  let seconds = timeLeft - minutes * 60
  if (seconds < 10) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    seconds = '0' + seconds
  }

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
      {
        !isPaused
          ? <h2 className='absolute bottom-[3.8rem] left-[4.8rem] text-[#D7E0FF] uppercase font-normal text-[0.8rem] tracking-[0.5rem]'>pause</h2>
          : <h2 className='absolute bottom-[3.8rem] left-[5.3rem] text-[#D7E0FF] uppercase font-normal text-[0.8rem] tracking-[0.5rem]'>play</h2>
      }
    </div>

  )
}
