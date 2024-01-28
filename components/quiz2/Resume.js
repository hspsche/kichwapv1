import { Box, Button, Text } from '@chakra-ui/react'
import { ShowAnswers } from './ModalContainer';

const Resume = ({ children, correct, onClick, total }) => {
    return (
        <Box
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
            >
                <Button
                    variant='optionButton'
                    size='lg'
                    onClick={onClick}
                >
                    Nuevo Juego
                </Button>
                <ShowAnswers
                    buttonTitle='Ver Respuestas'
                    modalTitle='Respuestas Correctas'
                >
                    {children}
                </ShowAnswers>
            </Box>            
        </Box>
    );
}

export { Resume };