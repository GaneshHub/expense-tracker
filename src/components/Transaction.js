import React from "react";
import { useStateValue } from "../context/StateProvider";

const Transaction = ({transaction}) => {
    const [{}, dispatch] = useStateValue();

  const sign = transaction.amount < 0 ? "-" : "+";

  const removeTransaction = () =>{
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: {
            id: transaction.id
        }
    });
  }

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}RS.{Math.abs(transaction.amount)}
        </span>
        <button onClick={removeTransaction} className="delete-btn">x</button>
      </li>
    </div>
  );
};

export default Transaction;
