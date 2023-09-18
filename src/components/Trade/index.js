import { Link, withRouter } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import Header from '../Header';
import Footer from '../Footer';
import Twid from '../Twid';
import BuySellCard from '../BuySellCard';
import './index.css'

const Trade = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay for the Twid component to load
    
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Header/>
      <div className='arrs'>
        <div>
          {isLoading ? (
            <div className="loading-animation">
              <div className='crdl'>
                    <div className='k'>Loading...</div>
              </div>
            </div>
          ) : (
            <Twid/>
          )}
        </div>
        <div>
          <BuySellCard coinName='BITCOIN'/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Trade
