import Image from 'next/image'

interface SettingsProps {
  setShowModal: (value: boolean) => void
}

export default function Settings ({ setShowModal }: SettingsProps) {
  return (
    <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto py-2 bg-white absolute">
      <div className='flex justify-between items-baseline w-full p-2 border-b'>
        <p className='font-bold'>Settings</p>
        <Image
          src='/images/icon-close.svg'
          alt='close icon'
          className='decoration-[#EFF1FA]'
          width={15}
          height={15}
          priority
          onClick={() => { setShowModal(false) }}
        />
      </div>
    </div>
  )
}
