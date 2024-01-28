import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { QuizCard } from './QuizCard'
import { Kichwa1 } from '../quiz/quizzes/Kichwa1'
import { Kichwa2 } from '../quiz/quizzes/Kichwa2'
import { Kichwa3 } from '../quiz/quizzes/Kichwa3'
import { KichwaVerbs } from '../quiz/quizzes/KichwaVerbs'
import { KichwaNouns } from '../quiz/quizzes/KichwaNouns'

import db from '../../dataBase/quizList.json'

const QuizList = () => {

    const [showedComponent, setShowedComponent] = useState('');
    
    const showComponent = (component) => {
        setShowedComponent(component);
    }

    const showMComp = () => {
        setShowedComponent('')
    }

    return (        
        <Box
            w='100%'
            h='100%'
            display='flex'
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
            scrollBehavior='inside'
        >    
            {showedComponent === '' ? (
                <>
                    {db.map((item) => (                
                        <QuizCard 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            onClick={() => showComponent(item.component)}
                        />    
                    ))}
                </>
            ) : (
                <>
                    {showedComponent === 'Kichwa1' ? (
                        <Kichwa1 showMainComponent={showMComp} /> 
                    ): null}
                    {showedComponent === 'Kichwa2' ? (
                        <Kichwa2 showMainComponent={showMComp} /> 
                    ): null}
                    {showedComponent === 'Kichwa3' ? (
                        <Kichwa3 showMainComponent={showMComp} /> 
                    ): null}
                    {showedComponent === 'KichwaVerbs' ? (
                        <KichwaVerbs showMainComponent={showMComp} /> 
                    ): null}
                    {showedComponent === 'KichwaNouns' ? (
                        <KichwaNouns showMainComponent={showMComp} /> 
                    ): null}
                </>
            )
        }
        </Box>     
    )
}

export { QuizList }