import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme2 from '../styles/theme/Theme2'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme2}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
    
}
