import { 
    Button, 
    Modal, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalOverlay, 
    ModalBody, 
    useColorMode,
    useDisclosure 
} from '@chakra-ui/react'

const ModalContainer = ({ children, buttonTitle, modalTitle }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode } = useColorMode()

    return (
      <>
        <Button variant='optionButton' size='sm' onClick={onOpen}>{buttonTitle}</Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          <ModalContent
            w='350px'            
            boxShadow='0px 0px 18px 6px rgba(0,0,0,0.10)'
            style={colorMode === 'light' ? {backgroundColor: '#d7dedc'} : {backgroundColor: '#272d2d'}}
          >
            <ModalHeader >{modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {children}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { ModalContainer };