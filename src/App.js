import React from "react";
import "./App.css";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import {StateProvider} from "./context/StateProvider";
import {reducer, initialState} from "./context/AppReducer";

function App() {
  return (
    <div className="container">
      <Header />
      <StateProvider initialState={initialState} reducer={reducer}>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </StateProvider>
    </div>
  );
}

export default App;
