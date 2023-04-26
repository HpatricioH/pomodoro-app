import { type ColorContextProps } from '@/lib/context/ColorContext'
import useColor from '@/lib/hooks/useColor'

interface PlayPauseButtonProps {
  isPaused: boolean
  setIsPaused: (isPaused: boolean) => void
}

export function PlayPauseButton ({ isPaused, setIsPaused }: PlayPauseButtonProps) {
  const { textColor } = useColor() as ColorContextProps
  const text = isPaused ? 'play' : 'pause'
  const left = isPaused ? 'left-[5.3rem]' : 'left-[4.8rem]'

  return (
    <h2 className={`absolute bottom-[3.8rem] ${left} text-[#D7E0FF] uppercase font-normal text-[0.8rem] tracking-[0.5rem] cursor-pointer ${textColor}`}
      onClick={() => { setIsPaused(!isPaused) }}>{text}</h2>
  )
}
