//expense to income percentage
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Percentage = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  
  const ratio = ((expense/income)*100).toFixed(1);

  const displayRatio = ratio > 0 ? ratio : '0';


  return (
    <>
    <h4>Expense to Income Percentage</h4>
    <h1> {displayRatio} %</h1>
    </>
  )
}
