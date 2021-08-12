import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import '../styles/ExpenseItem.css'
import Backdrop from './Backdrop';


function ExpenseItem(props){
  const [name, setName] = useState(props.name);
  const [isModalOpen, setModal] = useState(false)
  const clickHandler = () =>{ setName('Updated Car Again') }
  const deleteHandler = () =>{ setModal(true) }
  const closeModal = () => setModal(false)
  
  return (  
      <div className = 'expense-item'>
        <ExpenseDate date = {props.date}/>
          <h2>{name}</h2>
          <h3>Php {props.amount}</h3>
          <button onClick= {clickHandler} className = 'btn update'>Update</button>
          <button onClick= {deleteHandler} className = 'btn update'>Delete</button>
          {isModalOpen && <Backdrop onCancel = {closeModal}/>}
          
      </div>
    
  );
}

export default ExpenseItem