import useColor from '@/lib/hooks/useColor'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  color: string
}

export default function Menu () {
  const router = useRouter()
  const { color } = useColor() as Props

  return (
    <div className='bg-[#161932] h-[4rem] w-[18rem] flex justify-center items-center gap-[1.3rem] rounded-[5rem]'>
      <Link
        href={'/'}
        className={
          router.pathname === '/'
            ? `${color === '' ? 'bg-[#F87070]' : color} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>pomodoro</p>
      </Link>

      <Link
        href={'/shortBreak/short-break'}
        className={
          router.pathname === '/shortBreak/short-break'
            ? `${color === '' ? 'bg-[#F87070]' : color} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>short break</p>
      </Link>

      <Link
        href={'/longBreak/long-break'}
        className={
          router.pathname === '/longBreak/long-break'
            ? `${color === '' ? 'bg-[#F87070]' : color} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
            : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>long break</p>
      </Link>
    </div>
  )
}
