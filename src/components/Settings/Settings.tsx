import Image from 'next/image'
import SettingsForm from './Form/SettingsForm'
import { useState } from 'react'

interface SettingsProps {
  setShowModal: (value: boolean) => void
}

const fontArray = [
  {
    name: 'font-kumbh',
    text: 'Aa'
  },
  {
    name: 'font-robotoSlab',
    text: 'Aa'
  },
  {
    name: 'font-spaceMono',
    text: 'Aa'
  }
]

export default function Settings ({ setShowModal }: SettingsProps) {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index: any) => {
    setActiveIndex(index)
  }

  return (
    <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto py-2 bg-white absolute">
      <div className='flex justify-between items-baseline w-full p-4 border-b'>
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
      <div className='flex flex-col p-4 w-full'>
        <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[1rem]'>time ( minutes )</h2>
        <SettingsForm />
        {/* {TODO: this can be another component} */}
        <div className='pt-[1rem] border-b'>
          <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[1rem]'>font</h2>
          <div className='flex justify-center gap-[1rem] w-full mb-[0.5rem]'>
            {fontArray.map((font, index) => {
              return (
                <div key={index} className='flex items-center'>
                  <button
                    className={`rounded-full w-[3rem] h-[3rem] hover:border ${activeIndex === index
                      ? 'bg-[#161932] text-[#FFFFFF]'
                      : 'flex justify-center items-center  bg-[#EFF1FA] font-bold'} `}
                    onClick={() => { handleClick(index) }}>
                    <p className={`font-bold text-[0.8rem] ${font.name}`}>{font.text}</p>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}
