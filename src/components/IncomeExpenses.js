import React from "react";
import { useStateValue } from "../context/StateProvider";

const IncomeExpenses = () => {
  const [{ transactions }, dispatch] = useStateValue();
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += parseFloat(item)), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += parseFloat(item)), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">RS.{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">RS.{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
