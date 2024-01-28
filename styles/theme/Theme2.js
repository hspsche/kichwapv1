// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { ButtonStyles as Button}  from './components/ButtonStyles.ts'
import { modalTheme } from './components/ModalTheme.ts'

// 2. Add your color mode config
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
        body: {
            color: mode('#141414', '#FFFFFF')(props),
            bg: mode('#FFFFFF', '#141414')(props),
        }
    }),   
}

const breakpoints = {
    sm: '320px',
    md: '570px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
}

// 3. extend the theme
const theme = extendTheme({ 
    config,
    styles,
    breakpoints,
    components: {
        Button,
        Modal: modalTheme,
    }
})

export default theme