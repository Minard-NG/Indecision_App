import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
return(
    <Modal
    isOpen={ !!props.selectedOption }
    onRequestClose= {props.handleModal}
    contentLabel ="Selected Option"
    >
        <h3>Seleted Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick= {props.handleModal}>Okay</button>
    </Modal>
);
}

export default OptionModal