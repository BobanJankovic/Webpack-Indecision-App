import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '6px solid #3b5998',
    color                 : '#8D5151'
  }
};

export const OptionModal = (props) => (
  
    <div>
      
      <Modal
        isOpen={!!props.stejt}
        onRequestClose={props.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Today you are going to do:</h2>
        <button onClick={props.closeModal}>close</button>
        <div>{props.stejt}</div>
        
      </Modal>
    </div>
  
);


















/*
<button onClick={props.handlePick}>Open Modal</button>
onAfterOpen={this.afterOpenModal}
onRequestClose={this.closeModal}
style={customStyles}
<form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
*/