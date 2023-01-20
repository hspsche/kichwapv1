
import { Layout } from '../components/layout/Layout'
import { QuizV2 } from '../components/quiz/QuizV2'

import questions from '../dataBase/questions.json'

const quizv2 = () => {
    return (
        <Layout>
            <QuizV2 questions={questions}/>
        </Layout>         
    );
}

export default quizv2;