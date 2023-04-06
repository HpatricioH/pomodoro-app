import Image from 'next/image'
import Menu from '../Menu/Menu'

export default function Header () {
  return (
    <>
      <header className='flex flex-col justify-center items-center p-5'>
        <Image
          src="/images/logo.svg"
          alt="Pomodoro Logo"
          className='decoration-[#EFF1FA] pt-[1.5rem] pb-[2.5rem]'
          width={150}
          height={24}
          priority
        />
        <Menu />
      </header>
    </>
  )
}
