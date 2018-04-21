import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../utils/units';

function weatherbitIconSrc(code) {
  return ['https://www.weatherbit.io/static/img/icons/', code, '.png'].join('');
}

function DayOverview(props) {

  return (<div className="DayListItem">
    <div className="has-text-centered day-label">
      {props.date.toLocaleString('en-US', { weekday: 'long' })}
    </div>
    <div className="has-text-centered">
      <img src={weatherbitIconSrc(props.iconCode)} alt="weather-icon" />
    </div>
    <div className="has-text-centered attribute-value">
      {props.temp}
    </div>
    <div className="has-text-centered attribute-value">
      {celsiusToFahrenheit(props.temp)}
    </div>
  </div>);
}

DayOverview.propTypes = {
  temp: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  iconCode: PropTypes.string
}

export default DayOverview;
