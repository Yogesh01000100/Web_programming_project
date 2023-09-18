import React, { Component } from 'react';
import Header from '../Header';
import './index.css';
import Footer from '../Footer';
import axios from 'axios';


class News extends Component {
  state = {
    data: [],
    fetchstatus: ""
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news-live9.p.rapidapi.com/news',
      headers: {
        'X-RapidAPI-Key': '0289dbb011msh20c9952c199dbb1p12e37cjsne5d113becdb4',
        'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <>
        <Header />
        <h1>news</h1>
        <Footer />
      </>
    );
  }
}

export default News;
