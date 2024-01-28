import { Box, useColorMode } from '@chakra-ui/react'

const QuizLayout = ({ children }) => {

    const { colorMode } = useColorMode()

    return (
        <Box        
            w='350px'
            h='80%'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'
            boxShadow={colorMode === 'light' ? '0px 0px 5px 4px #0000001a' : '0px 0px 5px 4px #fafafa1a'}
            rounded={10}
            p={2}
        >
            { children }
        </Box>
    )
}
export { QuizLayout }