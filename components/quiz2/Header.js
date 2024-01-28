import { Box, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

const Header = ({ children, onClick }) => {
    return (
        <Box
            w='100%'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Button 
                variant='optionButton' 
                w='50px' 
                ml={2} 
                onClick={onClick}
            >
                <ArrowBackIcon fontSize='30px'/>
            </Button>
            {children}
        </Box>
    )
}
export { Header }