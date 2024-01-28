import { Box } from '@chakra-ui/react'

const Test1 = () => {
    return (
        <Box>
            test1
        </Box>
    )
}
export { Test1 }





{selectedItem ? <div>{selectedItem.quiz}</div> :
                    <>
                        {db.map((item) => (
                            <QuizCard 
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                onClick={() => setSelectedItem(item)}
                            />
                        ))} 
                    </>                    
                }  

                {selectedComponent ? <div>{selectedItem.quiz}</div> :
                    <>
                        {db.map((item) => (
                            <Card 
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                onClick={() => setSelectetComponent(item)}
                            />
                        ))} 
                    </>                    
                }