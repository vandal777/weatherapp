import React, { Component } from 'react';
import './App.css';
import LocationList from './components/WeatherLocation/LocationList';

const cities = [
  'Vilanova i la Geltrú',
  'Sitges',
  'Cubelles',
  'Santiago',
  'Ciudad de México',
  'Madrid',
];

class App extends Component {
  render() {
    return (
      <div className="App">
       <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
