import { type ReactNode } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

interface Props {
  children?: ReactNode
}

export default function Layout ({ children, ...props }: Props) {
  return (
    <>
      <Header />
        <main className="p-4 flex flex-col justify-center items-center">{children}</main>
      <Footer />
    </>
  )
}
