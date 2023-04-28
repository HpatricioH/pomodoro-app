import { type ColorContextProps } from '@/lib/context/ColorContext'
import { type FontContextProps } from '@/lib/context/FontContext'
import useColor from '@/lib/hooks/useColor'
import useFont from '@/lib/hooks/useFont'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menuArray = [
  {
    name: 'pomodoro',
    path: '/'
  },
  {
    name: 'short break',
    path: '/short-break'
  },
  {
    name: 'long break',
    path: '/long-break'
  }
]

export default function Menu () {
  const router = useRouter()
  const { color } = useColor() as ColorContextProps
  const { font } = useFont() as FontContextProps

  return (
    <nav className={`bg-[#161932] h-[4rem] w-[19rem] flex justify-between items-center rounded-[5rem] px-[1rem] ${font} md:w-[22rem]`}>
      {
        menuArray.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={
                router.pathname === link.path
                  ? `${color === ''
                    ? 'bg-[#F87070]'
                    : `bg-[${color}]`} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold md:h-[3.2rem] md:w-[7rem]`
                  : 'text-[#D7E0FF] font-bold'}>
              <p className='text-xs'>{link.name}</p>
            </Link>
          )
        })
      }
    </nav>
  )
}
