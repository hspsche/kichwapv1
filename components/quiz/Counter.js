import { Box, Text } from '@chakra-ui/react'

const Counter = (props) => {
    return (
        <Box
            w='500px'
            display='flex'
            justifyContent='right'
            alignItems='center'
            p={10}
        >
            <Text>{`Preguntas restantes: ${props.counter}`}</Text>
        </Box>
    );
}

export { Counter };