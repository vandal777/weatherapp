import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transfromWeather';
import './style.css';
import PropTypes from 'prop-types';

const api_key = "d3e8761cf34bf032e2cd13962f85066d";
const url = 'https://api.openweathermap.org/data/2.5/weather'

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }

    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&APPID=${api_key}`;
        fetch(api_weather).then( data => {
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }
    
    render = () => {
        const { city, data } = this.state;
        return(
            <div className='weatherLocationCont'>
                <Location city={ city }/>
                {data ? <WeatherData data={ data } /> : 'Cargando....'}
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string,
}
export default WeatherLocation;