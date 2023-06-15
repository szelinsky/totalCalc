import React from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const ResultsModal = ({isOpen, onClose, children, copy}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size='sm'>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Copy to Clipboard</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {children}
      </ModalBody>
      <ModalFooter>
        <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

export default ResultsModal