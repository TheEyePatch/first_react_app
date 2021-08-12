import React from 'react';
import Modal from './Modal';
import '../styles/Backdrop.css'
function Backdrop(props){
  return (
    <div className = 'backdrop'>
      <Modal onCancel = {props.onCancel}/>
    </div>
  )
}

export default Backdrop;