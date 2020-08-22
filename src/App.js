import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import{Percentage} from './components/Percentage';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Percentage />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
