import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useColorMode,
    useDisclosure
} from '@chakra-ui/react'

import { FaCircle } from "react-icons/fa";

const WelcomeMessenge = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()

    React.useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <Box>
            
            {/* <Button onClick={onOpen}>Open Modal</Button> */}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    style={colorMode === 'light' ? {background: '#FFFFFF'} : {background: '#2B2B2B'}}
                >
                    <ModalHeader>¡Alli Shamushka!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text mb='7px'>
                            ¿Bienvenid@s a kichwap v.0.1.0
                        </Text>
                        <Text mb='7px'>
                            El Proyecto KichwApp aspira a convertirse en una plataforma dedicada a la divulgación, aprendizaje y servir como repositorio de herramientas para el estudio de la lengua Kichwa ecuatoriana.
                        </Text>
                        <Text mb='7px'>
                            Este proyecto, iniciado de manera personal, ha evolucionado de forma autodidacta. No obstante, se busca expandir su alcance y hacerlo colaborativo, con la meta de que esté disponible de manera gratuita para todos.
                        </Text>
                        <Text mb='7px'> 
                            Las herramientas empleadas en el desarrollo de esta aplicación web son las siguientes: 
                        </Text>
                        <Text mb='7px'>
                            La aplicación está programada en JavaScript utilizando el framework de <a href='https://react.dev/'><em color='red'>React v.18.2.0</em></a>, específicamente con <a href='https://nextjs.org/'><em color='red'>NextJs v.13.1.2.</em></a> 
                        </Text>
                        <Text mb='7px'>
                            Para el diseño de componentes de la interfaz de usuario, se ha seleccionado la herramienta  <a href='https://chakra-ui.com//'><em color='red'>Chakra UI v.2.4.9</em></a>.
                        </Text>
                        <Text mb='7px'>
                            Adicionalmente, para optimizar la corrección de errores y avanzar en la sistematización del proyecto, KichwApp incorpora el uso de <a href='https://openai.com/chatgpt'><em color='red'>ChatGPT v.3.5</em></a>.
                        </Text>
                        <Text mb='7px'>
                            La plataforma se concibe como una red social donde los participantes tendrán acceso a herramientas para aprender la lengua Kichwa. La gamificación de la plataforma facilitará el seguimiento del progreso del aprendizaje, así como la cuantificación del desarrollo de habilidades específicas.
                        </Text>
                        <Text mb='7px'>
                            Algunas de las herramientas que se pretende incorporar son:
                        </Text>
                        <Box
                            display='flex'
                            alignItems='center'
                        >
                            <FaCircle size='10px'/>
                            <Text mb='7px' ml='20px'>
                                Juegos tipo trivia en diferentes niveles.
                            </Text>
                        </Box>

                        <Box
                            display='flex'
                            alignItems='center'
                        >
                            <FaCircle size='12px'/>
                            <Text mb='7px' ml='20px'>
                                Herramienta de reconocimiento de voz para el progreso fonético.
                            </Text>
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                        >
                            <FaCircle size='14px'/>
                            <Text mb='7px' ml='20px'>
                                Diccionario Kichwa-Español, Español-Kichwa, Kichwa-Inglés, Inglés-kichwa.
                            </Text>
                        </Box>
                        
                        
                        <Text mb='20px'>
                            
                        </Text>
                        <Text as='b' mb='7px'>
                            <em>¡Importante!</em>
                            
                        </Text>
                        <Text mb='7px'>
                            Esta versión es un ejemplo de lo que podría llegar a ser. Contiene errores y la mayoría de las herramientas propuestas aún no han sido implementadas. Es en este punto donde te invitamos a participar en el desarrollo de esta plataforma. Se requieren habilidades en diversas áreas, como diseño, desarrollo, educación, gestión comunitaria, arte, entre otras.
                        </Text>
                        <Text mb='14px'>
                            Si crees que tus habilidades y conocimientos pueden contribuir a este proyecto, no dudes en ponerte en contacto con nosotros a través de:  
                        </Text>
                        <Box
                            w='100%'
                            display='flex'
                            flexDir='column'
                            alignItems='center'
                        >
                            <Link href='https://twitter.com/solochistian'  _hover={{textDecor: 'none'}}>
                                <Box
                                    display='flex'

                                >
                                    <Image
                                        bg='white'
                                        src='./assets/img/xicon.svg' 
                                        alt='' 
                                        boxSize='25px'
                                        mb='14px'
                                        borderRadius='3px'
                                        mr='2px'
                                    />
                                    <Text as='i'>@solochistian</Text>
                                </Box>
                            </Link>
                            <Text mb='14px'>
                                <a href='mailto:solo.cherna@gmail.com?'><em>solo.cherna@gmail.com</em></a>.
                            </Text>
                        </Box>
                        
                        <Text mb='7px'>
                            ¡Esperamos contar con tu participación!
                        </Text>
                        

                        
                        
                        
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
}
export { WelcomeMessenge }