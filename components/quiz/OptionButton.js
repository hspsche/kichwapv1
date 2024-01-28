import { Button } from '@chakra-ui/react'

const OptionButton = ({ key, onClick, option }) => {

    return (
        <Button
            w={{base: '100%', md: '80%', xl: '60%'}} 
            h={{base: '29%', md: '29%', xl: '30%'}}   
            size='lg'         
            key={key} 
            onClick={onClick}
        >
            {option}
        </Button>
    );
}

export { OptionButton }