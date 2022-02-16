// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imgUrl: HEAD_IMG_URL,
    headCount: 0,
    tailCount: 0,
  }

  onCoinToss = () => {
    const generateNumber = Math.floor(Math.random() * 2)
    if (generateNumber === 0) {
      this.setState(prevState => ({
        imgUrl: HEAD_IMG_URL,
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        imgUrl: TAIL_IMG_URL,
        tailCount: prevState.tailCount + 1,
      }))
    }
  }

  render() {
    const {imgUrl, headCount, tailCount} = this.state

    return (
      <div className="bg-container">
        <div className="toss-card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imgUrl} className="toss-image" alt="toss result" />
          <button type="button" className="btn" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="toss-result">
            <p className="result">Total:{headCount + tailCount}</p>
            <p className="result">Heads:{headCount}</p>
            <p className="result">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
