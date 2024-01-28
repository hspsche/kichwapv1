import { Box, Button, Text } from '@chakra-ui/react'

const Example2 = (props) => {
    return (
        <Box
            bg='blue.400'
            w='500px'
            h='500px'
            display='flex'
            borderRadius='10px'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
        >
            <Text fontSize='30px' color='black' mb='50px'>Example 2</Text>
            <Button 
                bg='black' 
                onClick={() => props.showMainComponent()}
            >
                Volver a Componente A
            </Button>
        </Box>
    )
}
export { Example2 }