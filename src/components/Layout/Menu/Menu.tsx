import useColor from '@/lib/hooks/useColor'
import useFont from '@/lib/hooks/useFont'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  color: string
}

interface FontProps {
  font: string
}

export default function Menu () {
  const router = useRouter()
  const { color } = useColor() as Props
  const { font } = useFont() as FontProps

  return (
    <div className={`bg-[#161932] h-[4rem] w-[19rem] flex justify-between items-center rounded-[5rem] px-[1rem] ${font}`}>
      <Link
        href={'/'}
        className={
          router.pathname === '/'
            ? `${color === '' ? 'bg-[#F87070]' : `bg-[${color}]`} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>pomodoro</p>
      </Link>

      <Link
        href={'/shortBreak/short-break'}
        className={
          router.pathname === '/shortBreak/short-break'
            ? `${color === '' ? 'bg-[#F87070]' : `bg-[${color}]`} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>short break</p>
      </Link>

      <Link
        href={'/longBreak/long-break'}
        className={
          router.pathname === '/longBreak/long-break'
            ? `${color === '' ? 'bg-[#F87070]' : `bg-[${color}]`} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>long break</p>
      </Link>
    </div>
  )
}
