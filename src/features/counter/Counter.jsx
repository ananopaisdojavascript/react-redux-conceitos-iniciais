import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./CounterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)

  const addValue = parseInt(incrementAmount) || 0

  const resetAll = () => {
    setIncrementAmount(0)
    dispatch(reset())
  }

  const incrementValue = () => {
    dispatch(increment())
  }

  const decrementValue = () => {
    dispatch(decrement())
  }

  return (
    <section>
      <h2>{count}</h2>

      <div>
        <button aria-label="Increment value" onClick={incrementValue}>Aumentar</button>
        <button aria-label="Decrement value" onClick={decrementValue}>Diminuir</button>
      </div>

      <input type="text" value={incrementAmount} onChange={(event) => setIncrementAmount(event.target.value)}/>

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Somar</button>
        <button onClick={resetAll}>Zerar</button>
      </div>
    </section>
  )
}