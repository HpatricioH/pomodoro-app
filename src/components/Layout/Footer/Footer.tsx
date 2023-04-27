import Settings from '@/components/Settings/Settings'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer () {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleModal = () => {
    setShowModal(true)
  }

  return (
    <footer className='flex justify-center items-center mt-[7rem]'>
      <Image
        src="/images/icon-settings.svg"
        alt="settings icon"
        className='decoration-[#EFF1FA]'
        width={20}
        height={24}
        priority
        onClick={handleModal}
      />
      {showModal ? <Settings setShowModal={setShowModal}/> : null}
    </footer>
  )
}
