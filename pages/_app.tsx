import type { AppProps } from 'next/app'
import AuthProvider from 'providers/auth-provider/AuthProvider'

import '@/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    //тут подключаем наш useContext AuthProvider
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
