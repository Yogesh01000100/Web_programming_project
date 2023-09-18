import React, { Component } from 'react';
import Header from '../Header';
import './index.css';
import Coinstats from '../Coinstats';
import Footer from '../Footer';


const fetchstatusapi = {
  success: 'SUCCESS',
  failure: 'FAILURE'
}

class Cryptocurrencies extends Component {
  state = {
    data: [],
    fetchstatus:""
  };


  getFeeds = async () => {
    this.setState({
      fetchstatus: fetchstatusapi.initial,
    });
    const apiUrl =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      this.setState({ data });
      this.setState({
        fetchstatus: fetchstatusapi.success,
      });
    } catch (error) {
      console.error(error);
      console.log("Error loading!");
      this.setState({
        fetchstatus: fetchstatusapi.failure,
      });
    }
  };

  componentDidMount() {
    this.getFeeds();    
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <Header />
        <div className="col des">
          <h1>Cryptocurrencies</h1>
          <div>
            {data.map((crypto) => (
              <Coinstats
                
                image={crypto.image}
                name={crypto.name}
                price={(crypto.current_price).toFixed(2)}
                ath={crypto.ath}
                marketCap={crypto.market_cap}
                volume={crypto.total_volume}
                circulatingSupply={(crypto.circulating_supply / 1000000000).toFixed(2)}
              />
            ))}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}


export default Cryptocurrencies;
