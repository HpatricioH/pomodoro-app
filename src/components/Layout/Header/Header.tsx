import Image from 'next/image'
import Menu from '../Menu/Menu'

export default function Header () {
  return (
    <>
      <div className='flex flex-col justify-center items-center p-5'>
        <Image
          src="/images/logo.svg"
          alt="Pomodoro Logo"
          className='decoration-[#EFF1FA] pb-[1rem]'
          width={150}
          height={24}
          priority
        />
        <Menu />
      </div>
    </>
  )
}
