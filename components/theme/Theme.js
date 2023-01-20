// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
        body: {
            color: mode('green', 'yellow')(props),
            bg: mode('gray.100', 'gray.600')(props),
        }
    })
}

// 3. extend the theme
const theme = extendTheme({ 
    config,
    styles, 
})

export default theme