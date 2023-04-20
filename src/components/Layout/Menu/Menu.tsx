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

const menuArray = [
  {
    name: 'pomodoro',
    path: '/'
  },
  {
    name: 'short break',
    path: '/shortBreak/short-break'
  },
  {
    name: 'long break',
    path: '/longBreak/long-break'
  }
]

export default function Menu () {
  const router = useRouter()
  const { color } = useColor() as Props
  const { font } = useFont() as FontProps

  // TODO: make the nav a <ul> and the links <li> elements.
  return (
    <nav className={`bg-[#161932] h-[4rem] w-[19rem] flex justify-between items-center rounded-[5rem] px-[1rem] ${font}`}>
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
                    : `bg-[${color}]`} h-[3rem] flex justify-center items-center rounded-[4rem] w-[6rem] text-[#161932] font-bold`
                  : 'text-[#D7E0FF] font-bold'}>
              <p className='text-xs'>{link.name}</p>
            </Link>
          )
        })
      }
    </nav>
  )
}
