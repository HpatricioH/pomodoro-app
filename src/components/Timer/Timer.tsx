import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface TimerProps {
  time: number
}

export default function Timer ({ time }: TimerProps) {
  return (
    <div className='relative w-[14rem] h-[14rem] bg-gradient-to-br shadow-2xl shadow-[#D7E0FF]/20 from-[#161932] from-20% via-[#1E213F] to-[#212840] p-[0.8rem] rounded-full'>
      <CircularProgressbar
        value={time}
        text={`${time}`}
        background={true}
        backgroundPadding={5}
        strokeWidth={4}
        styles={buildStyles({
          textColor: '#D7E0FF',
          pathColor: '#F87070',
          trailColor: '#161932',
          backgroundColor: '#161932'
        })}
      />
      <h2 className='absolute bottom-[3.8rem] left-[4.8rem] text-[#D7E0FF] uppercase font-normal text-[0.8rem] tracking-[0.5rem]'>pause</h2>
    </div>

  )
}
