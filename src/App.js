import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';
import './App.css';
import GifList from './GifList';

import {

} from 'react-router-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    axios.get('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        this.setState({
          gifs: response.data
        });
    })

    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div className="App">
        <header>
          <div className="App-header mt-4">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </div>
        </header>

        <div className="container col">
            <div className="row jarak">
                <GifList data={this.state.gifs} />
            </div>
          </div>
        </div>
  );
  }
}

export default App;
