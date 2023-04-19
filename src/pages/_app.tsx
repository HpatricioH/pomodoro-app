import { ColorProvider } from '@/lib/context/ColorContext'
import { FontProvider } from '@/lib/context/FontContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <ColorProvider>
        <Component {...pageProps} />
      </ColorProvider>
    </FontProvider>
  )
}
