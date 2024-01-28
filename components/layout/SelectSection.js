import { Button, useColorMode } from '@chakra-ui/react'

const SelectSection = (props) => {

    const { colorMode } = useColorMode();

    return (
        <Button
            variant='headerButton'            
            onClick={props.onClick}
        >
            { props.title }
        </Button>
    )
}
export { SelectSection }