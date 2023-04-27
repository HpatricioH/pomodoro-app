import Image from 'next/image'
import Menu from '../Menu/Menu'

export default function Header () {
  return (
    <>
      <header className='flex flex-col justify-center items-center p-[1rem]'>
        <Image
          src="/images/logo.svg"
          alt="Pomodoro Logo"
          className='decoration-[#EFF1FA] pt-[2rem] pb-[3rem]'
          width={150}
          height={24}
          priority
        />
        <Menu />
      </header>
    </>
  )
}
