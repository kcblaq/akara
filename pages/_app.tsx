import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Particles from "react-tsparticles";
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
   
  return <>
  <Nav />
  <Component {...pageProps} />
  </>
}

export default MyApp
