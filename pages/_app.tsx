import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/globals.css'

import 'swiper/swiper-bundle.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
