import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react'
import { Layout } from '@/components/layout/Layout'
import { OptionButton } from '@/components/quiz/OptionButton'
import { QuizContent } from '@/components/quiz/QuizContent';
import { AppLayout } from '@/components/quiz/AppLayout';
import { Resume } from '@/components/quiz/Resume'

import db from '@/dataBase/questions.json';
import { ShowAnswerItem } from '@/components/quiz/ShowAnswerItem';

const Quiz = () => {

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
      <Layout>
          
            {questionList.length === 0 ?
            (
              <AppLayout>
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
              </AppLayout>
            ) : (
              <>
                {currentQuestion && (
                  <AppLayout>
                    <QuizContent
                      actualCounter={-(questionList.length - db.length - 1)}
                      question={currentQuestion.question}
                      totalCounter={db.length}
                    >
                      
                      {options.map((option) => (
                        <OptionButton 
                          key={option.option} 
                          option={option.option}
                          onClick={(e) => handleNextQuestion(option.value, e)}
                        />
                      ))}
                    </QuizContent>                      
                  </AppLayout>
                )}
              </>
            )}
          
      </Layout> 
      
  );
}

export default Quiz;