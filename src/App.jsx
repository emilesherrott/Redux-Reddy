import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { accountActionCreators } from "./action-creators";

import BiscuitComponent from "./BiscuitComponent";

const App = () => {
  const [amount, setAmount] = useState()

  const dispatch = useDispatch()

  const account = useSelector(state => state.accountReducer)
  const { depositMoney, withdrawMoney} = bindActionCreators(accountActionCreators, dispatch)

const handleChange = (e) => {
  setAmount(Number(e.target.value))
}

  return (
    <div className="App">
      <h1>Account: {account}</h1>
      <button onClick={() => depositMoney(amount)}>Deposit</button>
      <button onClick={() => withdrawMoney(amount)}>Withdraw</button>
      <div>
        <span>Amount: </span><input type="number" onChange={handleChange} />
      </div>
      <BiscuitComponent />
    </div>
  );
}

export default App;
