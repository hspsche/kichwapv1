// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ButtonStyles as Button}  from './ButtonStyles.ts'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
        body: {
            color: mode('#272d2d', '#f793b4')(props),
            bg: mode('#d7dedc', '#272d2d')(props),
        }
    }),   
}

// 3. extend the theme
const theme = extendTheme({ 
    config,
    styles,
    components: {
        Button,
    }
})

export default theme