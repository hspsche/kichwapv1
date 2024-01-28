import { Box, Text, useColorMode } from '@chakra-ui/react'

const ShowAnswerItem = ({ key, option, question }) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            w='100%'
            mb={2}
            borderBottom='1px solid #E6E6E6'
            key={key}
        >
            <Text mb={2}>{question}</Text> 
            <Box
                w='100%'
                display='flex'
                justifyContent='center'
            >
                <Text mb='8px' color={colorMode === 'light' ? 'green' : '#52B054'}>
                    {` ${option}`}
                </Text>
            </Box>
            
        </Box>
    )
}
export { ShowAnswerItem }