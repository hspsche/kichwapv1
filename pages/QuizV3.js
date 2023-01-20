import questions from '../dataBase/questions.json'
import { useState } from 'react'

function QuizV3({ currentIndex }) {
  const [state, setState] = useState({
    question: questions[currentIndex].question,
    option1: questions[currentIndex].option1,
    option2: questions[currentIndex].option2,
    answer: questions[currentIndex].answer
  });

  const handleClick = async (index, selectedOption) => {
    setTimeout(() => {
        setState({
        question: questions[index].question,
        option1: questions[index].option1,
        option2: questions[index].option2,
        answer: questions[index].answer 
      });
    }, 1000)
  }

  return (
    <div>
      <h2>{state.question}</h2>
      <button onClick={() => handleClick(currentIndex + 1, 'option1')}>{state.option1}</button>
      <button onClick={() => handleClick(currentIndex + 1, 'option2')}>{state.option2}</button>
      <button onClick={() => handleClick(currentIndex + 1, 'answer')}>{state.answer}</button>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      currentIndex: context.params.index
    }
  }
}

export default QuizV3
