import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './BuySellCard.css';
import axios from 'axios';
import { BsCurrencyDollar } from 'react-icons/bs';

const BuySellCard = ({ coinName }) => {
  const [selectedCoin, setSelectedCoin] = useState('btc'); // Default selected coin is 'btc'
  const [quantity, setQuantity] = useState(0.1); // Default quantity is 0.1
  const [currentPrice, setCurrentPrice] = useState(null); // Initialize current price as null
  const [coinBalance, setCoinBalance] = useState(0); // Initialize coin balance as 0
  const [userBalance, setUserBalance] = useState(0); // Initialize user balance as 0

  useEffect(() => {
    let ws;

    const connectWebSocket = () => {
      const websocketUrl = `wss://stream.binance.com:9443/ws/${selectedCoin}usdt@trade`;
      ws = new WebSocket(websocketUrl);
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        const price = (data.p * 82.258 / 82.258).toFixed(2);
        setCurrentPrice(parseFloat(price)); // Update current price
      };
    };

    const disconnectWebSocket = () => {
      if (ws) {
        ws.close();
      }
    };

    const initialize = () => {
      connectWebSocket();
    };

    initialize();

    // Fetch coin balance
    const fetchCoinBalance = () => {
      axios
        .post('http://localhost/web_program/coinbalance.php', { coin: selectedCoin })
        .then((response) => {
          const totalQuantity = Number(response.data.totalQuantity).toFixed(2);
          setCoinBalance(totalQuantity);
        })
        .catch((error) => {
          console.error('Error occurred while fetching coin balance:', error);
        });
    };

    fetchCoinBalance();

    // Fetch user balance
    const fetchBalance = () => {
      axios
        .get('http://localhost/web_program/userbalance.php')
        .then((response) => {
          const userBalance = Number(response.data.balance).toFixed(2);
          setUserBalance(userBalance);
        })
        .catch((error) => {
          console.error('Error occurred while fetching user balance:', error);
        });
    };

    fetchBalance();

    return () => {
      disconnectWebSocket();
    };
  }, [selectedCoin]);

  const handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleBuy = () => {
    if (currentPrice === null) {
      console.log('Current price is not available');
      return;
    }

    const coin = selectedCoin;
    const price = currentPrice;
    const buyTransaction = {
      coin,
      quantity,
      price,
    };

    console.log(buyTransaction);

    // Send buy transaction to server
    axios
      .post('http://localhost/web_program/buy.php', buyTransaction)
      .then((response) => {
        console.log('Buy transaction successful:', response.data);
        alert('Success!');
        setTimeout(() => {
          fetchBalance(); // Update balance with a small delay
        }, 500); // Adjust the delay time as needed
      })
      .catch((error) => {
        console.error('Error occurred during buy transaction:', error);
      });
  };

  const handleSell = () => {
    if (currentPrice === null) {
      console.log('Current price is not available');
      return;
    }

    const coin = selectedCoin;
    const price = currentPrice;
    const sellTransaction = {
      coin,
      quantity,
      price,
    };

    console.log(sellTransaction);

    // Send sell transaction to server
    axios
      .post('http://localhost/web_program/buy.php', sellTransaction)
      .then((response) => {
        console.log('Sell transaction successful:', response.data);
        alert('Sell transaction successful!');
        setTimeout(() => {
          fetchBalance(); // Update balance with a small delay
        }, 500); // Adjust the delay time as needed
      })
      .catch((error) => {
        console.error('Error occurred during sell transaction:', error);
      });
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseFloat(event.target.value));
  };

  return (
    <div className="buysell-card">
      <div className="dob">
        <div className="k">USD BALANCE: ${userBalance}</div>
        <select className="coin-select" value={selectedCoin} onChange={handleCoinChange}>
          <option value="btc">Bitcoin</option>
          <option value="eth">Ethereum</option>
          <option value="matic">Matic</option>
        </select>
      </div>

      <h2>{selectedCoin.toUpperCase() === coinName.toUpperCase() ? coinName.toUpperCase() : selectedCoin.toUpperCase()}</h2>

      <div className="olm">
        <div className="m">
          <BsCurrencyDollar />
        </div>
        <div id="tds">{currentPrice !== null ? currentPrice.toFixed(2) : 'Loading...'}</div>
      </div>
      <p>{selectedCoin.toUpperCase()} in wallet: {coinBalance}</p>

      <div className="quantity-container">
        <label htmlFor="quantity" className="quantity-label">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          step="0.01"
          min="0.01"
          value={quantity}
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>

      <div className="button-container">
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
        <button className="sell-button" onClick={handleSell}>
          Sell
        </button>
      </div>
    </div>
  );
};

BuySellCard.propTypes = {
  coinName: PropTypes.string.isRequired,
};

export default BuySellCard;
