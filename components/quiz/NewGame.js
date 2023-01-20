import { Box, Button, Text } from '@chakra-ui/react'

const NewGame = (props) => {
    return (
        <Box
            w='500px'
            h='400px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            p={2}
        >
            <Text p={5} fontSize={30}>Juego terminado</Text>
            <Button p={5} onClick={props.onClick}>Nuevo Juego</Button>
        </Box>
    );
}

export { NewGame };