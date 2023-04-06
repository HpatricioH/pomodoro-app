import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Menu () {
  const router = useRouter()

  return (
    <div className='bg-[#161932] h-[4rem] px-[1rem] w-[18rem] flex justify-center items-center gap-[1.40rem] rounded-[5rem]'>
      <Link href={'/'} className={router.pathname === '/' ? 'bg-[#F87070] h-[2.5rem] flex justify-center items-center rounded-[4rem] px-[0.75rem] text-[#161932] font-bold' : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>pomodoro</p>
      </Link>

      <Link href={'/shortBreak/short-break'} className={router.pathname === '/short break' ? 'bg-[#F87070] h-[2.5rem] flex justify-center items-center rounded-[4rem] px-[0.75rem]' : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>short break</p>
      </Link>

      <Link href={'/long break'} className={router.pathname === '/long break' ? 'bg-[#F87070] h-[2.5rem] flex justify-center items-center rounded-[4rem] px-[0.75rem]' : 'text-[#D7E0FF] font-bold'}>
        <p className='text-xs'>long break</p>
      </Link>
    </div>
  )
}
