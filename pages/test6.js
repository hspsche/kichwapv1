import {  useState }  from 'react';
import { AppLayout } from '../components/quiz/AppLayout'
import { QuizSelect } from '../components/quiz/QuizSelect'
import { Kichwa1 } from '../components/testing/Kichwa1'
import { Kichwa2 } from '../components/quiz/quizzes/Kichwa2'
import { Layout } from '../components/layout/Layout'
/* import { Kichwa3 } from './quizzes/Kichwa3'
import { KichwaVerbs } from './quizzes/KichwaVerbs'
import { KichwaNouns } from './quizzes/KichwaNouns' */

import db from '../database/quizList.json'

const test6 = () => {
    
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
        <Layout>
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
        </Layout>
    )
}

export default test6;