import { Box, Button, Text } from '@chakra-ui/react'

const Quiz = ({ children, question }) => {

    return (
        <Box
            w='500px'
            h='400px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'
            border='1px solid'
            rounded={10}
            p={2}
        >
            <Text as='b' fontSize={30} textAlign='center' mt={5}>{question}</Text>
            <Box
                w='100%'
                h='50%'
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >                
                {children}
            </Box>    
        </Box>
            
    );
}

export { Quiz }