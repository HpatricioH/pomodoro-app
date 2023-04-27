import { type ColorContextProps } from '@/lib/context/ColorContext'
import useColor from '@/lib/hooks/useColor'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { PlayPauseButton } from './PlayPauseButton/PlayPauseButton'
import { type TimerProps, useTimer } from '@/lib/hooks/useTimer'

export default function Timer () {
  const { color } = useColor() as ColorContextProps
  const { minutes, percentage, seconds, isPaused, setIsPaused } = useTimer() as TimerProps

  return (
    <div className='relative w-[14rem] h-[14rem] bg-gradient-to-br shadow-2xl shadow-[#D7E0FF]/20 from-[#161932] from-20% via-[#1E213F] to-[#212840] p-[0.8rem] rounded-full md:w-[18rem] md:h-[18rem]'>
      <CircularProgressbar
        value={percentage }
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
