import { useEffect, useState } from 'react'
import { Box, Button, Text } from '@chakra-ui/react'

const QuizV2 = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        setSelectedOption(null);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
        }, 1000);

        console.log(option)
        console.log(currentQuestion)
        console.log(selectedOption)

      };
    
      useEffect(() => {
        if (selectedOption === props.questions[currentQuestion].answer) {
            document.getElementById('answer').style.backgroundColor = "green";
        } else if (selectedOption !== props.questions[currentQuestion].answer) {
            document.getElementById(selectedOption).style.backgroundColor = "red";
        }
      }, [selectedOption]);

    return (
        <Box
            w='500px'
            h='400px'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            alignItems='center'
            border='1px solid'
            rounded={10}
            p={2}
        >
            <Text w='100%'>{props.questions[currentQuestion].question}</Text>
            <Button
                w='100%' 
                id='option1' 
                onClick={() => handleClick('option1')}
            >
                {props.questions[currentQuestion].option1}
            </Button>
            <Button
                w='100%' 
                id='option2' 
                onClick={() => handleClick('option2')}
            >
                {props.questions[currentQuestion].option2}
            </Button>
            <Button
                w='100%' 
                id='answer' 
                onClick={() => handleClick('answer')}
            >
                {props.questions[currentQuestion].answer}
            </Button>
        </Box>
    );
}

export { QuizV2 };