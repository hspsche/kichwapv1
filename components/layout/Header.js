import { Box, Button, Image, propNames, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = (props) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            w='100%'
            h='7%'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom='1px solid'
        >
            <Image
                alt=''
                h='70%'
                src={props.imgSrc}
                ml={20}            
            />
            <Button onClick={toggleColorMode} mr={20} >
                 {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </Box>
    );
}

export { Header };