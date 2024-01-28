import { Box, useColorMode } from '@chakra-ui/react'

const AppLayout = ({ children }) => {

    const { colorMode } = useColorMode()

    return (
        <Box
            w={{base: '100%', md: '70%', xl: '50%'}}
            h={{base: '100%', md: '80%', xl: '80%'}}
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'        
            rounded={10}
            p={2}
        >
            { children }
        </Box>
    )
}
export { AppLayout }