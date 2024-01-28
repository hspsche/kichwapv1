import { Box, Button, Text } from '@chakra-ui/react'
import { ModalContainer } from './ModalContainer';

const Resume = ({ children, correct, onClick, total }) => {
    return (
        <Box
            w='100%'
            h='100%'
            display='flex'
            flexDirection='column'
            justifyContent='space-around'
            alignItems='center' 
        >
            <Text fontSize={30}>Juego terminado</Text>            
            <Text fontSize={20}>{`Obtuviste ${correct} correctas de ${total} preguntas`}</Text>
            <Box
                w='95%'
                h='25%'
                display='flex'
                flexDirection='column'
                justifyContent='space-around'
                alignItems='center'
            >
                <Button
                    w='60%'
                    h=''
                    size='lg'
                    fontWeight='none'
                    onClick={onClick}
                >
                    Nuevo Juego
                </Button>
                <ModalContainer
                    buttonTitle='Ver Respuestas'
                    modalTitle='Respuestas Correctas'
                >
                    {children}
                </ModalContainer>
            </Box>            
        </Box>
    );
}

export { Resume };