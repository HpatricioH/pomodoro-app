import useColor from '../../../lib/hooks/useColor'
import { useState } from 'react'
// import { type ColorContextProps } from '@/lib/context/ColorContext'

const colorArray = [
  {
    name: '#F87070',
    className: 'bg-[#F87070]'
  },
  {
    name: '#70F3F8',
    className: 'bg-[#70F3F8]'
  },
  {
    name: '#D881F8',
    className: 'bg-[#D881F8]'
  }
]

export default function Color () {
  const [colorIndex, setColorIndex] = useState(null)
  const { setColor } = useColor() as any

  const handleColorClick = (index: any) => {
    setColorIndex(index)
    setColor(colorArray[index].name)
  }

  return (
    <div className='py-[1rem]'>
      <h2 className='font-semibold text-center uppercase text-[0.8rem] tracking-[0.2rem] pb-[1rem]'>color</h2>
      <div className='flex justify-center gap-[1rem] w-full mb-[0.5rem]'>
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
