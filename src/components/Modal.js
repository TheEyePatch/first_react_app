import React from 'react';

function Modal(props){
  const cancelModal = () => props.onCancel();
  return(
    <div className = 'modal'>
      <h2>Are you Sure?</h2>
      <button>Confirm</button>
      <button onClick = {cancelModal}>Cancel</button>
    </div>
  )
}

export default Modal;