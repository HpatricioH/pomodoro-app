import { type ColorContextProps } from '@/lib/context/ColorContext'
import { type TimeContextProps } from '@/lib/context/TimeContext'
import useColor from '@/lib/hooks/useColor'
import useTime from '@/lib/hooks/useTime'
import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface TimerProps {
  time: number
}

export default function Timer ({ time }: TimerProps) {
  const { color } = useColor() as ColorContextProps
  const { pomodoro, shortBreak, longBreak } = useTime() as TimeContextProps
  const [mode, setMode] = useState<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro')
  // const [status, setStatus] = useState<'stopped' | 'running' | 'paused'>('stopped')
  const [isPaused, setIsPaused] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  const initTimer = () => {
    setTimeLeft(pomodoro * 60)
  }

  useEffect(() => {
    initTimer()
  }, [pomodoro])

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
