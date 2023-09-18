import Footer from '../Footer'
import Header from '../Header'
import PriceCardHome from '../PriceCardHome'
import './index.css'
import { NavLink } from 'react-router-dom'
import { MdSecurity } from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'
import {FaRegEye} from 'react-icons/fa'

const Home = () => (

  <>
    <div className='colsp'>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Get into the web 3.0 space now!</h1>
          <p className="home-description">
            A cryptocurrency, crypto-currency,
            or crypto is a digital currency designed to work as a medium of exchange through a computer network
            that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.
          </p>
          <div className='pot'>
            <NavLink
              exact to="/trade"
              className="nav-links shop-now-button"
            >
              Trade Now!
            </NavLink>
          </div>

        </div>
        <img
          src="https://res.cloudinary.com/dp0ed3fv9/image/upload/v1631458769/Btc_o98q68.jpg"
          alt="coins to be noticed"
          className="home-desktop-img"
        />
      </div>
          <div className='crds'>
            <div className='lopi'>Your trusted crypto exchange</div>
            <div className='home-description vb'>
              Here at Binance, we are committed to user
              protection
            </div>
            <div className='feture_card'>
              <div className='vb fet_crd'>
                <MdSecurity />
              </div>
              <div className='roll vs'>
                <div>
                  Your transaction data is secured via end-to-end encryption,
                   
                </div>
              </div>
              
            </div>
            <div className='feture_card'>
              <div className='vb fet_crd'>
                <AiOutlineSafety />
              </div>
              <div className='roll vs'>
                <div>
                  Your transaction data is secured via end-to-end encryption, 
                </div>
              </div>
              
            </div>
            <div className='feture_card'>
              <div className='vb fet_crd'>
                <FaRegEye />
              </div>
              <div className='roll vs'>
                <div>
                  Your transaction data is secured via end-to-end encryption,
                </div>
              </div>
              
            </div>
        <div className='lopi'>Popular Crypto</div>
        <div className='pol'>
          <PriceCardHome />
          <PriceCardHome />
          <PriceCardHome />
          <PriceCardHome />
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default Home
