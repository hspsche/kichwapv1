import { Box, Text } from '@chakra-ui/react'
import { BsTools } from "react-icons/bs";

const ConstructionSection = () => {
    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
            <BsTools size='40px'/>
            <Text fontSize='25px' ml='10px'>Sección en Desarrollo</Text>
        </Box>
    )
}
export { ConstructionSection }