import { useState } from 'react'

function Counter () {
  const [count, setCount] = useState(0)

  const dec = () => {
    setCount(count - 1)
  }
  const inc = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </>
  )
}

export default Counter
