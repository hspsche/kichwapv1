import { Box , Button, useColorMode } from '@chakra-ui/react'
import { SelectSection } from './SelectSection';

const Sections = ({ setSelectedCard }) => {

    return (
        <Box
            h='100%'
            overflowX='hidden'
            whiteSpace='nowrap'
        >
            <SelectSection
                title='Curso'
                onClick={() => setSelectedCard(1)}
            />
            <SelectSection
                title='Quizzes'
                onClick={() => setSelectedCard(2)}
            />
            <SelectSection
                title='Foro'
                onClick={() => setSelectedCard(3)}
            />
        </Box> 
    )
}
export { Sections }