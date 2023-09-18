import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { CiBitcoin } from 'react-icons/ci'
import './index.css'
import { BiCart } from 'react-icons/bi'

class PriceCardHome extends Component {

  render() {
    return (
      <>
        <div className='cards'>
          <div className='siz'><CiBitcoin /></div>
          <div className='aligns'>
            <div>
              <div className='heade'>
                BTC
              </div>
              <div className='heade_1'>
                Bitcoin
              </div>
            </div>

            <div className='jk'>
              <button className='glow'>Most Watched</button>
            </div>
          </div>
          <div className='lk'>
            Bitcoin is the world's largest cryptocurrency by market capitalization.

          </div>
          <div className='siz1'>

            <button className="buy_but">
              <div className='aligns_button'>
                <div className='cart'><BiCart /></div>
                <div>Quick Buy</div>
              </div>

            </button>
          </div>
        </div>
      </>
    )
  }
}

export default PriceCardHome
