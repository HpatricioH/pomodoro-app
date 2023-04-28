import Image from 'next/image'
import SettingsForm from './Form/SettingsForm'
import Font from './Font/Font'
import Color from './Color/Color'

interface SettingsProps {
  setShowModal: (value: boolean) => void
}

export default function Settings ({ setShowModal }: SettingsProps) {
  return (
    <div className="top-[5.5rem] flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto py-2 bg-white absolute md:top-[12rem] md:w-[29rem] md:rounded-3xl">
      <div className='flex justify-between items-baseline w-full p-4 border-b md:p-6'>
        <p className='font-bold md:text-xl'>Settings</p>
        <Image
          src='/images/icon-close.svg'
          alt='close icon'
          className='decoration-[#EFF1FA] cursor-pointer'
          width={15}
          height={15}
          priority
          onClick={() => { setShowModal(false) }}
        />
      </div>
      <div className='flex flex-col p-4 w-full md:p-6'>
        <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[0.5rem] md:text-left md:text-[0.9rem]'>time ( minutes )</h2>
        <SettingsForm setShowModal={setShowModal}/>
        <Font/>
        <Color/>
      </div>
    </div>
  )
}
