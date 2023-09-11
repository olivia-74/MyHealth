import {Modal,ModalOverlay,ModalContent,useDisclosure,} from '@chakra-ui/react'
import { Botao, ConteudoModal } from './styledCompartilhar';


import React from 'react';

function Compartilhar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('2x1')
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
    const OverlayOne = () => (<ModalOverlay  bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>)
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
    // function Compartilhado() {
    //     alert("Compartilhado com" {value});
    //   }
    
    return (
      <>

        <Botao onClick={() => {
          setOverlay(<OverlayOne/>) 
          onOpen()
        }}
        > Compartilhar seção </Botao>
        
        <Modal isOpen={isOpen} onClose={onClose} size={size}>
          {overlay}
          <ModalContent>
          <ConteudoModal>
            <h2>Compartilhar seção</h2>
            
                <input variant='flushed' value={value} onChange={handleChange} size='md' placeholder='Adicione o e-mail da pessoa ou empresa com quem você quer compartilha essa sessão'/>
                <p> Compartilhando com: {value} </p>
                {/* <button onClick={Compartilhado}>Pronto</button> */}
                <button onClick={onClose}>Pronto</button>
            </ConteudoModal>
          </ModalContent>
        </Modal>
        
      </>
    )
  }

  export default Compartilhar;