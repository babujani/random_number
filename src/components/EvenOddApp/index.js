import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  onIncrease = () => {
    this.setState(prevState => ({
      number: prevState.number + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {number} = this.state

    let type
    if (number % 2 === 0) {
      type = 'Even'
    } else {
      type = 'Odd'
    }

    return (
      <div className="page-bg">
        <div className="app-bg">
          <h1>Count {number}</h1>
          <p className="num-type">Count is {type}</p>
          <button onClick={this.onIncrease} type="button">
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
