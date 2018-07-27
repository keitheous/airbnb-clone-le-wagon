import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat'

class App extends Component {
  render() {
    const flat = {
      "id": 145,
      "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR",
      "lat": 48.884211,
      "lng": 2.346890
    } // https://github.com/lewagon/flats-boilerplate/blob/master/flats.json

    const flats = [flat, flat]

    return (
      <div>
        <div className = 'app'>

          <div className = 'main'>
            <div className = 'search'></div>

            <div className = 'flats'>
              {flats.map((flat) => <Flat flat = {flat} />)}
            </div>
          </div>

          <div className = 'map'>
          </div>
        </div>
      </div>
    );
  }
}

// <Flat flat = {flat}/> x 3 is transformed into line 18 and 29-31

export default App;
