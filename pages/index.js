import { useState } from 'react'
import Head from 'next/head'
import { Button } from '@chakra-ui/react'
import { Layout } from '../components/layout/Layout'
import { Quiz } from '../components/quiz/Quiz'
import { Counter } from '../components/quiz/Counter'
import { NewGame } from '../components/quiz/NewGame'
import questions from '../dataBase/questions'

export default function Home() {
  
  //Data
  const db = questions

  //States
  const [index, setIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null);

  //Functions
  const handleClick = (optionIndex) => { 
    setSelectedOption(optionIndex)
    setTimeout(() => {
      setIndex(index + 1)
      setSelectedOption(null)
    }, 1000)
  }

  /* const shuffleOptions = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  } */

  const newGame = () => {
    setIndex(0)
  }

  return (
    <>
      <Head>
        <title>KichwaP</title>
        <link rel="icon" href="/assets/img/favicon2.ico" />
      </Head>
      <main>
        <Layout> 
          <Counter 
            counter={db.length - index -1}
          />
          {index === db.length - 1  ? <NewGame onClick={newGame}/> :                    
            <Quiz question={db[index].question}>
              {db[index].options.map((option, optionIndex) => {
                const isSelected = selectedOption === optionIndex
                return (
                  <Button 
                    w='100%' 
                    h='50px' 
                    fontSize={20} 
                    key={optionIndex} 
                    onClick={() => handleClick(optionIndex)}
                    style={{
                      background: isSelected ? (option.value ? 'green' : 'red') : ''
                    }}                
                  >
                    {option.option}
                  </Button>
                )
              })}
            </Quiz>            
          }                    
        </Layout>
      </main>
    </>
  )    
}
