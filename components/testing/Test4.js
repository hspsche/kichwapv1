import { Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Example1 } from '../examples/Example1';
import { Example2 } from '../examples/Example2';
import { QuizCard } from '../mainContent/QuizCard';

const Test3 = () => {
  const [showedComponent, setShowedComponent] = useState('');
  const [courses, setCourses] = useState([]);
  const [componentsMap, setComponentsMap] = useState({});

  useEffect(() => {
    // Cargar datos desde el archivo quizList.json
    fetch('./quizList.json')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.quizList);
        setComponentsMap(data);
      })
      .catch((error) => console.error('Error al cargar los cuestionarios y componentes:', error));
  }, []);

  const showMainComponent = () => {
    setShowedComponent('');
  };

  const DinamicComponent = ({ component, showMainComponent }) => {
    const Component = componentsMap[component];
    return Component ? <Component showMainComponent={showMainComponent} /> : null;
  };

  return (
    <Box>
      {showedComponent === '' ? (
        <>
          <Box>Main container</Box>
          {courses.map((item) => (
            <QuizCard
              key={item.id}
              title={item.title}
              description={item.description}
              onClick={() => setShowedComponent(item)}
            />
          ))}
        </>
      ) : (
        <DinamicComponent component={showedComponent.component} showMainComponent={showMainComponent} />
      )}
    </Box>
  );
};

export { Test3 };
