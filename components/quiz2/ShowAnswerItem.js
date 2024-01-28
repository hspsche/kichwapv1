import { Box, Text, useColorMode } from '@chakra-ui/react'

const ShowAnswerItem = ({ key, option, question }) => {

    const { colorMode } = useColorMode()

    return (
        <Box
            p={2}
            mb={3}
            rounded={10}
            boxShadow={colorMode === 'light' ? '0px 0px 5px 4px #0000001a' : '0px 0px 5px 4px #fafafa1a'}
            key={key}
        >
            <Text>{question}</Text> 
            <Text>
                Respuesta correcta:
                <span style={{color: 'green', fontStyle: 'italic'}}>
                    {` ${option}`}
                </span>
            </Text>
        </Box>
    )
}
export { ShowAnswerItem }