import { useEffect, useState } from 'react'
import { QuizContent } from '../quiz/QuizContent'
import { Resume } from '../quiz/Resume'
import { OptionButton } from '../quiz/OptionButton'
import { ShowAnswerItem } from '../quiz/ShowAnswerItem'
import { QuizLayout } from '../quiz/AppLayout'
import db from '../../dataBase/questions.json'

const Kichwa1 = ({onClick}) => {

    //States
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [questionList, setQuestionList] = useState([])
    const [options, setOptions] = useState([])
    const [puntuation, setPuntuation] = useState(0)

    //Functions
    const handleNextQuestion = (value, e) => {
        //crea un questionList copia de db
        const newQuestionList = [...questionList]
        const index = questionList.findIndex(question => question === currentQuestion)
        //elimina la pregunta actual de questionList
        newQuestionList.splice(index, 1)
        console.log(questionList.length)
    
        if (value)
        //añadir puntuación y estilos
        setPuntuation(puntuation + 1)
        e.target.style.background = value ? '#4FAB3F' : '#E76167'
        e.target.style.color = value ? 'white' : 'white'
    
        //siguiente pregunta
        setTimeout (() => {
            setQuestionList(newQuestionList)
            //reset de estilos
            e.target.style.background = ''
            e.target.style.color = '' 
        }, 500)  
    }

    useEffect(() => {
        setQuestionList([...db])
    }, [])
    
      //desordena las preguntas
    useEffect(() => {
        if (questionList.length > 0) {
          setCurrentQuestion(questionList[Math.floor(Math.random() * questionList.length)])
        }
    }, [questionList])
    
      //desordena las opciones
    useEffect(() => {
        if (currentQuestion) {
        setOptions([...currentQuestion.options].sort(() => Math.random() - 0.5))
        }
    }, [currentQuestion])
    

    return (
        <>
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
                            actualCounter={-(questionList.length - db.length - 1) }
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
        </>
    )

}



const shuffle = (array) => {
    // implementation of fisher-yates shuffle algorithm
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

export { Kichwa1 }
