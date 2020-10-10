import React from "react";
import { getBalance } from "../context/AppReducer";
import { useStateValue } from "../context/StateProvider";

const Balance = () => {
    const [{transactions}, dispatch] = useStateValue();
    const totalBalance = getBalance(transactions);
  return (
    <div className="balance">
      <h4>Your Balance</h4>
      <h1>Rs.{totalBalance}</h1>
    </div>
  );
};

export default Balance;
