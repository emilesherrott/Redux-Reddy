import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { biscuitActionCreators, accountActionCreators } from "./action-creators"

const BiscuitComponent = () => {
  const { biscuitReducer: biscuits, accountReducer: account } = useSelector((state) => state)

  const dispatch = useDispatch()
  const { addBiscuit } = bindActionCreators(biscuitActionCreators, dispatch)
  const { withdrawMoney } = bindActionCreators(accountActionCreators, dispatch)

  const handleClick = () => {
    if (account > 5) {
      addBiscuit()
      withdrawMoney(5)
    }
  }

  return (
    <>
      <h2>Biscuit Component</h2>
      <p>Number of biscuits: {biscuits}</p>
      <p>Money to buy biscuits: {account}</p>
      <button onClick={handleClick}>Buy Biscuit</button>
    </>
  )
}

export default BiscuitComponent
