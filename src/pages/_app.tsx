import { ColorProvider } from '@/lib/context/ColorContext'
import { FontProvider } from '@/lib/context/FontContext'
import { TimeProvider } from '@/lib/context/TimeContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <FontProvider>
      <TimeProvider>
        <ColorProvider>
          <Component {...pageProps} />
        </ColorProvider>
      </TimeProvider>
    </FontProvider>
  )
}
