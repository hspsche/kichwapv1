import { 
    Button,
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    MenuDivider,
    useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg'

const MenuContainer = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Menu>
            <MenuButton
                /* variant='headerButton' */
                h='100%'
                w='50px'
                transition='all 0.2s'
                _hover={{bg: colorMode === 'light' ? '#E6E6E6' : '#333333' }}
                _expanded={{bg: colorMode === 'light'  ?  '#E6E6E6' :  '#333333'}}
            >
                <HamburgerIcon fontSize='2xl'/>
            </MenuButton>
            <MenuList
                bg={colorMode === 'light' ? '#FFFFFF' : '#2B2B2B'}
                position='absolute' 
                right='-50px' 
                anchor='right'
            >
                <Button 
                    bg=''
                    w='100%'
                    h='100%'
                    p={2}
                    rounded='0'
                    justifyContent='start'
                    fontWeight='none'
                    _hover= {{background: colorMode === 'light'  ?  '#E6E6E6' :  '#4D4D4D'}}
                    leftIcon={<CgProfile />}
                    
                >   
                    Profile
                </Button>
                <MenuDivider />
                <Button
                    bg=''
                    w='100%'
                    h='100%'
                    p={2}
                    rounded='0'
                    justifyContent='start'
                    fontWeight='none'
                    leftIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    _hover= {{background: colorMode === 'light'  ?  '#E6E6E6' :  '#4D4D4D'}}
                    onClick={toggleColorMode}                     
                >
                    {colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
                </Button>
            </MenuList>
        </Menu>
    )
}
export { MenuContainer }