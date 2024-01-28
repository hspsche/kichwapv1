import { Box, Text } from '@chakra-ui/react'
import { Header } from './Header'

const QuizContent = ({ actualCounter, children, onClick, question, totalCounter }) => {
    return (
        <>
            <Header onClick={onClick}>
                <Text mr={3}>{`Pregunta ${actualCounter} de ${totalCounter}`}</Text>
            </Header>
            
            <Text as='b' fontSize={30} textAlign='center' mt={5}>{question}</Text>
            <Box
                w='95%'
                h='35%'
                mb={4}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >                            
                {children}
            </Box>    
        </>            
    );
}

export { QuizContent }