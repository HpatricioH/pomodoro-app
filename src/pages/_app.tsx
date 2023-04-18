import { ColorProvider } from '@/lib/context/ColorContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  )
}
