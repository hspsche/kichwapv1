import { Box, Button, Text, useColorMode } from '@chakra-ui/react'

const QuizCard = ({ description, key, onClick, title}) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            bg={colorMode === 'light' ? '' : '#252525'}
            w='300px'
            h='400px'
            border={colorMode === 'light' ? '1px solid #E6E6E6' : ''}
            display='flex'
            flexDirection='column'
            justifyContent='space-around'
            alignItems='center'
            borderRadius='10px'
            m={2}    
            p={2}        
            key={key}
        >
            <Text fontSize='lg'>{title}</Text>
            <Text textAlign='justify' mx='10px'>{description}</Text>
            <Button onClick={onClick}>Realizar Quiz</Button>
        </Box>
    )
}
export { QuizCard }