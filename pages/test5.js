import { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { QuizMainContainer } from '../components/quiz/QuizMainContainer'
/* import { Quiz } from '../components/testing/quiz' */
import { CourseMainContainer } from '../components/course/CourseMainContainer'
import { ForumMainContainer } from '../components/forum/ForumMainContainer'

const test5 = () => {
    const [selectedCard, setSelectedCard] = useState(1);

    return (
        <Layout
            setSelectedCard={setSelectedCard}
        >
            {/* <Sections setSelectedCard={setSelectedCard} /> */}
            {selectedCard === 1 && <CourseMainContainer />}
            {selectedCard === 2 && <QuizMainContainer />}
            {/* {selectedCard === 2 && <Quiz />} */}
            {selectedCard === 3 && <ForumMainContainer />}
        </Layout> 
    );
}

export default test5;