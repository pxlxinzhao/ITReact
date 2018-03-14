import React, { Component } from 'react';
import Layout from './container/layout';
import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.baseURL = 'https://cryptic-spire-27300.herokuapp.com/';

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App;
