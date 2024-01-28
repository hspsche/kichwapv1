import { Box, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const Header = ({ children, onClick }) => {
    return (
        <Box
            w='100%'
            mt={2}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Button 
                w='50px' 
                size={{base: 'md', md: 'sm', xl: 'sm'}}
                ml={2} 
                onClick={onClick}
            >
                <ArrowBackIcon fontSize='20px'/>
            </Button>
            {children}
        </Box>
    )
}
export { Header }