import React from 'react'
import { 
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalOverlay, 
    ModalBody, 
    useColorMode,
    useDisclosure, 
    propNames
} from '@chakra-ui/react'

const ModalContainer = ({ children, buttonTitle, modalTitle, sizeMC, mlMC, widthMC, variantSelect }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const { colorMode } = useColorMode()

    return (
      <>
        <Button
          h=''
          onClick={onOpen}
        >
          {buttonTitle}
        </Button>

        <Modal 
          variant='ModalCourseSelect' 
          isCentered isOpen={isOpen} 
          onClose={onClose}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent
            w='350px'
            h='60%'
            borderRadius='10px'
            style={colorMode === 'light' ? {background: '#FFFFFF'} : {background: '#2B2B2B'}}
          >
            <ModalHeader >{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody w='100%' >
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { ModalContainer };