import { type ColorContextProps } from '@/lib/context/ColorContext'
import useColor from '../../../lib/hooks/useColor'
import { useState } from 'react'
// import { type ColorContextProps } from '@/lib/context/ColorContext'

const colorArray = [
  {
    name: '#F87070',
    className: 'bg-[#F87070]',
    textClass: 'hover:text-[#F87070]'
  },
  {
    name: '#70F3F8',
    className: 'bg-[#70F3F8]',
    textClass: 'hover:text-[#70F3F8]'
  },
  {
    name: '#D881F8',
    className: 'bg-[#D881F8]',
    textClass: 'hover:text-[#D881F8]'
  }
]

export default function Color () {
  const { color, setColor } = useColor() as ColorContextProps
  const { setTextColor } = useColor() as ColorContextProps
  const [colorIndex, setColorIndex] = useState(colorArray.findIndex((item) => item.name === color))

  const handleColorClick = (index: any) => {
    setColorIndex(index)
    setColor(colorArray[index].name)
    setTextColor(colorArray[index].textClass)
  }

  return (
    <div className='py-[1rem] flex flex-col md:flex-row md:py-[1.5rem]'>
      <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[1rem] md:text-[0.9rem] md:text-left md:self-center'>color</h2>
      <div className='flex justify-center gap-[1rem] w-full mb-[0.5rem] md:justify-end'>
        {colorArray.map((color, index) => {
          return (
            <div key={index} className='flex items-center '>
              <button
                className={`rounded-full w-[3rem] h-[3rem] ${color.className}`}
                onClick={() => { handleColorClick(index) }}
              >
                {colorIndex === index ? <p>✔️</p> : null}
              </button>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
