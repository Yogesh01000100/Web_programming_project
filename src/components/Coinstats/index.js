import React from 'react';
import './index.css';
import { BsStar } from "react-icons/bs";

const Coinstats = ({ image, name, price, marketCap, volume,  ath, circulatingSupply }) => {
  return (
    <div className="crypto-info">
      <div className='op crypto-data'>
        <div className='kl'><BsStar/></div>
        <div className='kb'><img src={image}/></div>
        <p className="crypto-value">{name}</p>
      </div>
      <div className="op crypto-data">
        <p className="crypto-label">Price: <span className="crypto-value">${price}</span></p>
      </div>
      <div className="op crypto-data">
        <p className="crypto-label">All-Time High: <span className="crypto-value">${ath}</span></p>
      </div>
      <div className="op crypto-data">
        <p className="crypto-label">Market Cap: <span className="crypto-value">${marketCap}</span></p>
      </div>
      <div className="crypto-data">
        <p className="crypto-label">Volume: <span className="crypto-value">${volume}</span></p>
      </div>
      <div className="crypto-data">
        <p className="crypto-label">Circulating Supply: <span className="crypto-value">{circulatingSupply}bn</span></p>
      </div>
    </div>
  );
};

export default Coinstats;
