import React from "react";
import Transaction from "./Transaction";
import { useStateValue } from "../context/StateProvider";

const TransactionList = () => {
  const [{ transactions }, dispatch] = useStateValue();

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
