import { connect } from 'react-redux'
import { decrement, increment, setStep } from '../../store/slices/counterSlices'

function CounterRedux (props) {
  const { step, count, incrementCount, decrementCount, setNewStep } = props
  const incCount = () => incrementCount()

  const decCount = () => decrementCount()

  const stepChangeHandler = ({ target: { value } }) => {
    setNewStep(Number(value))
  }

  return (
    <>
      Count: {count}
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
      <input type='number' value={step} onChange={stepChangeHandler} />
    </>
  )
}

const mapStateToProps = state => {
  return state.counter
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch(increment()),
    decrementCount: () => dispatch(decrement()),
    setNewStep: value => dispatch(setStep(value))
  }
}

const withAccsessToStore = connect(mapStateToProps, mapDispatchToProps)

export default withAccsessToStore(CounterRedux)
