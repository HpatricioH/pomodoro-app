import Link from 'next/link'

const menuLinks = ['pomodoro', 'short break', 'long break']

export default function Menu () {
  return (
    <div className='bg-[#161932] h-[4rem] px-[0.8rem] flex justify-center items-center gap-3 rounded-[5rem]'>
      {menuLinks.map((link) => {
        return (
          <Link href='/' key={link} className='bg-[#F87070] h-[2.5rem] flex justify-center items-center rounded-[4rem] px-[0.65rem]'>
            <p className='text-xs'>{link}</p>
          </Link>
        )
      })}
    </div>
  )
}
