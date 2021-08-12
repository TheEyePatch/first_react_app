import React from 'react'
import ExpenseItem from './ExpenseItem';

function ExpenseItemContainer(){
  return (
    <div>
      <ExpenseItem name = {'Car'} date = {new Date(2021, 3, 4)} amount = {(2100).toFixed(2)}/>
      <ExpenseItem name = {'Meralco Bill'} date = {new Date(2021, 5, 4)} amount = {(1000).toFixed(2)}/>
      <ExpenseItem name = {'Water Bill'} date = {new Date(2020, 5, 10)} amount = {(300).toFixed(2)}/>
    </div>
  );
}

export default ExpenseItemContainer;