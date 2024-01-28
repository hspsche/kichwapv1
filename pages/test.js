import { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { QuizMainContainer } from '../components/quiz/QuizMainContainer'
import { CourseMainContainer } from '../components/course/CourseMainContainer'
import { ForumMainContainer } from '../components/forum/ForumMainContainer'

const test = () => {
    const [selectedCard, setSelectedCard] = useState(1);

    return (
        <Layout
            setSelectedCard={setSelectedCard}
        >
            {/* <Sections setSelectedCard={setSelectedCard} /> */}
            {selectedCard === 1 && <CourseMainContainer />}
            {selectedCard === 2 && <QuizMainContainer />}
            {selectedCard === 3 && <ForumMainContainer />}
        </Layout> 
    );
}

export default test;