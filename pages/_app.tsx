import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';
const font = Poppins({
  weight: ['400', '700', '500'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={font.className}>
    <Component {...pageProps} />
  </main>
  
)}
