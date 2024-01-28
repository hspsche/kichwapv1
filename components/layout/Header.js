import { Box, Button, Image, Text, useColorMode, Link } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Sections } from './Sections'
import { MenuContainer } from './menu/MenuContainer';

const Header = ({ imgSrc, setSelectedCard }) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            bg={colorMode === 'light' ? '' : '#404040'}
            w='100%'
            h={{base: '8%', md: '6%', xl: '6%'}}
            position='fixed'
            top='0'
            border={colorMode === 'light' ? '1px solid #E6E6E6' : ''}
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                w={{base: '100%', md: '70%', xl: '50%'}}
                h='100%'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                {/* <Image
                    alt=''
                    h='30px'
                    ml={{base: '4', md: '0', xl: '0'}}
                    src={ imgSrc }
                /> */}

                <Link href='/' _hover={{textDecor: 'none'}}>
                    <Text as='b' >
                        KichwaApp
                    </Text> 
                </Link>
                
                <Sections 
                    setSelectedCard={setSelectedCard}
                />
                <MenuContainer />                
            </Box>
        </Box>
    );
}

export { Header };