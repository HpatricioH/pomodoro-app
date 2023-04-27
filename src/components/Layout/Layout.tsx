import { type ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import useFont from '@/lib/hooks/useFont'
import { type FontContextProps } from '@/lib/context/FontContext'

interface Props {
  children?: ReactNode
}

export default function Layout ({ children, ...props }: Props) {
  const { font } = useFont() as FontContextProps

  return (
    <>
      <Header />
        <main className={`py-12 flex flex-col justify-center items-center ${font}`}>{children}</main>
      <Footer />
    </>
  )
}
