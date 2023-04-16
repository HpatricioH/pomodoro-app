import { useState } from 'react'

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

export default function Font () {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index: any) => {
    setActiveIndex(index)
  }

  return (
    <div className='py-[1rem] border-b'>
      <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[1rem]'>font</h2>
      <div className='flex justify-center gap-[1rem] w-full mb-[0.5rem]'>
        {fontArray.map((font, index) => {
          return (
            <div key={index} className='flex items-center '>
              <button
                className={`rounded-full w-[3rem] h-[3rem] ${activeIndex === index
                  ? 'bg-[#161932] text-[#FFFFFF]'
                  : 'flex justify-center items-center  bg-[#EFF1FA] font-bold hover:border-4'} `}
                onClick={() => { handleClick(index) }}>
                <p className={`font-bold text-[0.8rem] ${font.name}`}>{font.text}</p>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
