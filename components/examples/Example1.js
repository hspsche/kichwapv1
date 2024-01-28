import { Box, Button, Text } from '@chakra-ui/react'

const Example1 = (props) => {
    return (
        <Box
            bg='green.400'
            w='500px'
            h='500px'
            borderRadius='10px'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
        >
            <Text fontSize='30px' color='black' mb='50px'>Ejempplo 1</Text>
            <Button 
                bg='black' 
                onClick={() => props.showMainComponent()}
            >
                Volver a Componente A
            </Button>
        </Box>
    )
}
export { Example1 }