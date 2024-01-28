import { Box, Button, Text, useColorMode } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ModalContainer } from './ModalContainer'

const QuizSelect = ({ key, onClick, title, modalContent, modalTitle }) => {

    const { colorMode } = useColorMode();

    return (
        <Box
            bg={colorMode === 'light' ? '#e6e6e6' : '#fafafa1a'}
            w='95%'
            p={2}
            rounded={10}
            display='flex'
            justifyContent='space-around'
            alignItems='center'
            key={key}
        >
            <Box
                w='100%'
                h='100%'
                display='flex'
                alignItems='center'
            >
                <Text ml={4}>{ title }</Text>
                <ModalContainer
                    variantSelect='ModalCourseSelect'
                    buttonTitle={ <ExternalLinkIcon /> }
                    modalTitle={ modalTitle }
                >
                    { modalContent }
                </ModalContainer>
            </Box>                
            <Button size='sm' onClick={ onClick }>Realizar Quiz</Button>
        </Box>
    )
}
export { QuizSelect }