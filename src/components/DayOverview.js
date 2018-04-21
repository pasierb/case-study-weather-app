import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../utils/units';

function weatherbitIconSrc(code) {
  return ['https://www.weatherbit.io/static/img/icons/', code, '.png'].join('');
}

function DayOverview(props) {

  return (<div className="columns DayOverview">
    <div className="column has-text-centered">
      <img src={weatherbitIconSrc(props.iconCode)} alt="weather-icon" />
    </div>
    <div className="column has-text-centered">
      <p className="day-label">
        {props.date.toLocaleString('en-US', { weekday: 'long' })}
      </p>
      <p className="description">
        {props.description}
      </p>
      <p className="attribute-value">
      {props.temp}
      </p>
      <p className="attribute-value">
      {celsiusToFahrenheit(props.temp)}
      </p>
    </div>
  </div>);
}

DayOverview.propTypes = {
  temp: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  iconCode: PropTypes.string
}

export default DayOverview;
