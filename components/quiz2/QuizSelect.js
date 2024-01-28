import { Box, Button, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalContainer } from './ModalContainer'

const QuizSelect = ({ key, onClick, title, modalContent, modalTitle }) => {
    return (
        <Box
            w='95%'
            h='100px'
            m={2}
            rounded={10}
            boxShadow='0px 0px 6px 5px rgba(0, 0, 0, 0.10)'
            display='flex'
            flexDir='column'
            justifyContent='space-around'
            alignItems='center'
            key={key}
        >
            <Text>{ title }</Text>
            <Box
                w='100%'
                shad
                display='flex'
                justifyContent='space-around'
            >
                <ModalContainer
                    buttonTitle={ <ExternalLinkIcon /> }
                    modalTitle={ modalTitle }
                >
                    { modalContent }
                </ModalContainer>
                <Button size='sm' onClick={ onClick }>Realizar Quiz</Button>
            </Box>
            
            
        </Box>
    )
}
export { QuizSelect }