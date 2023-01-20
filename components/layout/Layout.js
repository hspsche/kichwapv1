import { Box } from '@chakra-ui/react'
import { Header } from './Header'

const Layout = ({children}) => {
    return (
        <Box
            w='100%'
            h='100vh'
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
        >
            <Header 
                imgSrc='/assets/img/logo2.png'
            />
            <Box
                w='100%'
                h='93%'
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
            >
                {children}
            </Box>
        </Box>
    );
}

export { Layout };