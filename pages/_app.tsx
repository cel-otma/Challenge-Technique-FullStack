import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { Level } from 'level'
import { useEffect } from 'react'
import { MyProvider } from './Provider/Provider'

// Create a database

// Add an entry with key 'a' and value 1
// Create a database



export default function App({ Component, pageProps }: AppProps) {
  
  return <MyProvider>
   <Component {...pageProps} />
  </MyProvider>
}
