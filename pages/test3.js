import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Layout } from '../components/layout/Layout'
import { useSwipeable } from 'react-swipeable'
import words from '../dataBase/words.json'


const test3 = () => {

    const [renderCorrect, setRenderCorrect] = useState(false);
    const [renderIncorrect, setRenderIncorrect] = useState(false);

    const [question, setQuestion] = useState(
        words
    )

    const [answer, setAnswer] = useState("")
    
    const handleSwipeLeft = () => {
        if(question.answer === question.options[0]){
            setRenderCorrect(true);
        }else{
            setRenderIncorrect(true);
        }
    }
    
    const handleSwipeRight = () => {
        if(question.answer === question.options[1]){
            setRenderCorrect(true);
        }else{
            setRenderIncorrect(true);
        }
    }

    const bind = useSwipeable({
        onSwipedLeft: () => handleSwipeLeft(),
        onSwipedRight: () => handleSwipeRight(),
    })

    const handleKeyDown = e => {
        if (e.keyCode === 37) {
            handleSwipeLeft();
        }
        if (e.keyCode === 39) {
            handleSwipeRight();
        }
    };

    return (
        <Layout>

                <Box w='300px' h='300px' border='1px solid' {...bind} onKeyDown={handleKeyDown}  tabIndex="0">
                    <p>{question.text}</p>
                    <p>{question.options[0]}</p>
                    <p>{question.options[1]}</p>
                </Box>


            {renderCorrect && <p >Correct</p>}
            {renderIncorrect && <p >Incorrect</p>}
        </Layout> 
        
    );
}

export default test3;