import {  useState }  from 'react';
import { AppLayout } from './AppLayout'
import { QuizSelect } from './QuizSelect'
import { Kichwa1 } from './quizzes/Kichwa'
import { Kichwa2 } from './quizzes/Kichwa2'
/* import { Kichwa3 } from './quizzes/Kichwa3'
import { KichwaVerbs } from './quizzes/KichwaVerbs'
import { KichwaNouns } from './quizzes/KichwaNouns' */
import { Quiz } from '../testing/quiz'

import db from '../../database/quizList.json'

const QuizMainContainer = () => {
    
    //states
    const [currentComponent, setCurrentComponent] = useState(null);

    //functions
    const handleGoBack = () => {
        setCurrentComponent(null);
    }

    //función para asignar el componente Kichwa Quiz
    const handleClick = (component) => {
        switch(component){
            case 'Kichwa1':
                setCurrentComponent(<Kichwa1 onClick={handleGoBack}/>);
                break;
            case 'Quiz':
                setCurrentComponent(<Quiz handleClick={handleGoBack}/>);
                break;
            case 'Kichwa2':
                setCurrentComponent(<Kichwa2 onClick={handleGoBack}/>);
                break;
            /* case 'Kichwa3':
                setCurrentComponent(<Kichwa3 onClick={handleGoBack}/>);
                break;
            case 'KichwaVerbs':
                setCurrentComponent(<KichwaVerbs onClick={handleGoBack}/>);
                break;
            case 'KichwaNouns':
                setCurrentComponent(<KichwaNouns onClick={handleGoBack}/>);
                break; */
        }
    }

    return (
        <>
            {currentComponent ? (
                <>
                    {currentComponent}                             
                </>
            ) : (
                <AppLayout>
                    {
                        db.map((item) => (
                            <QuizSelect 
                                key={item.id} 
                                onClick={() => handleClick(item.component)}
                                title={item.title}
                                modalTitle={item.title}
                                modalContent={item.description}
                            />
                        ))
                    }                    
                </AppLayout>
            )}
        </>
    )
}

export { QuizMainContainer };