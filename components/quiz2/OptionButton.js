import { Button, useColorMode } from '@chakra-ui/react'

const OptionButton = ({ key, onClick, option }) => {

    const { colorMode } = useColorMode()

    return (
        <Button
            variant='optionButton'
            size='lg'          
            key={key} 
            onClick={onClick}
        >
            {option}
        </Button>
    );
}

export { OptionButton }