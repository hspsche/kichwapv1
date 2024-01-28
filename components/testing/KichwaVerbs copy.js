import { useState } from 'react'
import { QuizContent } from '../QuizContent'
import { Resume } from '../Resume'
import { OptionButton } from '../OptionButton'
import { ShowAnswerItem } from '../ShowAnswerItem'
import { QuizLayout } from '../AppLayout'
import db from '../../../dataBase/questions.json'

const KichwaVerbs = ({onClick}) => {

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

export { KichwaVerbs }

{questionList.length === 0 ? (
    <QuizLayout>
        <Resume
            correct={puntuation}
            total={db.length}
            onClick={() => {setQuestionList([...db]), setPuntuation(0)}}
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
    </QuizLayout> 
) : 
    currentQuestion && (
        <QuizLayout>
            <QuizContent 
                actualCounter={-(questionList.length - db.length - 1)}
                question={currentQuestion.question}
                totalCounter={db.length}
                onClick={onClick}
            >
                {options.map((option) => (
                    <OptionButton                     
                        key={option.option}  
                        option={option.option}
                        onClick={(e) => handleNextQuestion(option.value,e)}
                    />
                ))}
            </QuizContent>
        </QuizLayout>       
    )
}