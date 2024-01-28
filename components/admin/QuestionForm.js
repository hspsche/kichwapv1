import { useState } from 'react';
import axios from 'axios'
import { Box, Button, FormControl, Input } from '@chakra-ui/react'

const QuestionForm = () => {
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [answer, setAnswer] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const options = [
                {"option": option1, "value": "false"},
                {"option": option2, "value": "false"},
                {"option": answer, "value": "true"}
            ]

            const newQuestion = { question, options }
            await axios.post('api/question', newQuestion)
        }   catch (error) {
                console.error(error)
            }
    }

    return (
        <Box
            w='500px'
            h='300px'
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
            border='1px solid'
            rounded={10}
        >
            <FormControl 
                w='80%'
                h='80%'
                display='flex'
                flexDir='column'
                justifyContent='space-around'
                onSubmit={handleSubmit}
            >           
                <Input 
                    type="text" 
                    placeholder='question' 
                    value={question} 
                    onChange={e => setQuestion(e.target.value)} 
                />
                <Input 
                    type="text" 
                    placeholder='option 1' 
                    value={option1} 
                    onChange={e => setOption1(e.target.value)} 
                /> 
                <Input 
                    type="text" 
                    placeholder='option 2' 
                    value={option2} 
                    onChange={e => setOption2(e.target.value)} 
                />
                <Input 
                    type="text" 
                    placeholder='answer' 
                    value={answer} 
                    onChange={e => setAnswer(e.target.value)} 
                />
                <Button type="submit">Enviar</Button>
            </FormControl>
        </Box>            
    );
};

export { QuestionForm };
