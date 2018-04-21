import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../utils/units';

function weatherbitIconSrc(code) {
  return ['https://www.weatherbit.io/static/img/icons/', code, '.png'].join('');
}

function DayOverview(props) {

  return (<div className="DayOverview">
    <div className="has-text-centered">
      {props.date.toLocaleString('en-US', { weekday: 'long' })}
    </div>
    <div className="has-text-centered">
      <img src={weatherbitIconSrc(props.iconCode)} />
    </div>
    <div className="has-text-centered">
      {props.temp}
    </div>
    <div className="has-text-centered">
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
