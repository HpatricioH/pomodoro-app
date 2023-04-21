import { type ReactNode, createContext, useState } from 'react'

export interface FontContextProps {
  font: string
  setFont: (font: string) => void
}

interface Props {
  children: ReactNode
}

export const FontContext = createContext<FontContextProps | null>(null)

export const FontProvider = ({ children }: Props) => {
  const [font, setFont] = useState('font-kumbh')

  const value = {
    font,
    setFont
  }

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  )
}

export default FontContext
