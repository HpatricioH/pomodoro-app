import { type ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import useFont from '@/lib/hooks/useFont'

interface Props {
  children?: ReactNode
  font: string
}

export default function Layout ({ children, ...props }: Props) {
  const { font } = useFont() as Props

  return (
    <>
      <Header />
        <main className={`p-4 flex flex-col justify-center items-center ${font}`}>{children}</main>
      <Footer />
    </>
  )
}
