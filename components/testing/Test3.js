import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { QuizCard } from '../mainContent/QuizCard';
import { Example1 } from '../examples/Example1';
import { Example2 } from '../examples/Example2';
//import { Example3 } from '../examples/Example3';

const Test3 = () => {
    const [showedComponent, setShowedComponent] = useState('');
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        fetch('/dataBase/quizList2.json')
        .then((response) => response.json())
        .then((data) => {
            console.log('Datos cargados:', data.quizList);
            setQuizList(data);
        })
        .catch((error) =>
            console.error('Error al cargar los cursos y componentes:', error)
        );
    }, []);

    const showMainComponent = () => {
        setShowedComponent('');
    };

    const QuizListComponent = () => (
        <>
        {quizList && quizList.length > 0 ? (
            quizList.map((item) => (
            <QuizCard
                key={item.id}
                title={item.title}
                description={item.description}
                onClick={() => setShowedComponent(item)}
            />
            ))
        ) : (
            <p>No hay cuestionarios disponibles.</p>
        )}
        </>
    );

    const DynamicComponent = () => {
        const componentsMap = {};

        quizList.forEach((item) => {
        componentsMap[item.value] = eval(item.value);
        });

        const SelectedComponent = componentsMap[showedComponent.value];

        return (
        <Box>
            {SelectedComponent && (
            <SelectedComponent showMainComponent={showMainComponent} />
            )}
        </Box>
        );
    };

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
                <QuizListComponent />
            ) : (
                showedComponent.value && <DynamicComponent />
            )}
        </Box>
    );
};

export { Test3 };
