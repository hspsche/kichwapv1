import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme/Theme'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
    
}
