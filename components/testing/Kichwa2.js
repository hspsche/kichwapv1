import { useState } from 'react'
import { QuizContent } from '../quiz/QuizContent'
import { Resume } from '../quiz/Resume'
import { OptionButton } from '../quiz/OptionButton'
import { ShowAnswerItem } from '../quiz/ShowAnswerItem'
import { QuizLayout } from '../quiz/AppLayout'
import db from '../../dataBase/questions.json'

const Kichwa2 = ({onClick}) => {

    //States
    const [actualQuestion, setActualQuestion] = useState(0)
    const [puntuation, setPuntuation] = useState(0)

    //Functions
    const handleClick = (value, e) => { 
        //añandir puntuación y estilos
        if (value) setPuntuation(puntuation + 1)
        e.target.style.background = value ? '#4FAB3F' : '#E76167'
        e.target.style.color = value ? 'white' : 'white'

        //siguiente pregunta
        setTimeout(() => {      
            setActualQuestion(actualQuestion + 1)
            e.target.style.background = ''
            e.target.style.color = ''      
        }, 500)   
    }

    return (
        <>
            {actualQuestion === db.length ?
                <QuizLayout>                    
                    <Resume
                        correct={puntuation}
                        total={db.length}
                        onClick={() => {setActualQuestion(0), setPuntuation(0)}}
                    >
                        {db.map((item) => {
                            return (                    
                                <ShowAnswerItem
                                    key={item}
                                    option={item.options[2].option}
                                    question={item.question}
                                />
                            )
                            })}
                    </Resume>
                </QuizLayout> :
                <QuizLayout>
                    <QuizContent 
                        actualCounter={actualQuestion + 1}
                        question={db[actualQuestion].question}
                        totalCounter={db.length}
                        onClick={onClick}
                    >
                        {db[actualQuestion].options.map((option) => {                            
                            return (                  
                                <OptionButton                     
                                    key={option.option}  
                                    option={option.option}
                                    onClick={(e) => handleClick(option.value, e)}
                                />
                            )
                        })}                  
                    </QuizContent>
                </QuizLayout>                              
                            
            }                    
        </>
    )    
}

export { Kichwa2 }