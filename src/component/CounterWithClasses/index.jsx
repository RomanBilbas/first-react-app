import { Component, createContext } from 'react'

class CounterWithClasses extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
    first
  }
  dec = () => {
    const {
      state: { count },
      props: { step }
    } = this
    this.setState({ count: count - step })
  }
  inc = () => {
    const {
      state: { count },
      props: { step }
    } = this
    this.setState({ count: count + step })
  }
  render () {
    const { count } = this.state
    return (
      <div>
        <span>Count: {count}</span>
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default CounterWithClasses
