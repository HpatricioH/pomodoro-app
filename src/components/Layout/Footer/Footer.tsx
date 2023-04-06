import Image from 'next/image'

export default function Footer () {
  return (
    <footer className='flex justify-center items-center'>
      <Image
        src="/images/icon-settings.svg"
        alt="settings icon"
        className='decoration-[#EFF1FA]'
        width={20}
        height={24}
        priority
      />
    </footer>
  )
}
