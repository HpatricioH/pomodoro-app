import { type ReactNode, createContext, useState } from 'react'

export interface ColorContextProps {
  color: string
  setColor: (color: string) => void
  textColor: string
  setTextColor: (colorClassName: string) => void
}

interface Props {
  children: ReactNode
}

const ColorContext = createContext<ColorContextProps | null >(null)

export const ColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState('#F87070')
  const [textColor, setTextColor] = useState('hover:text-[#F87070]')

  const value = {
    color,
    setColor,
    textColor,
    setTextColor
  }

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorContext
