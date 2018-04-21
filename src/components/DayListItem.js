import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../utils/units';
import { iconUrl } from '../utils/weatherbit';

function DayOverview(props) {
  const { date, iconCode, temp } = props;

  return (<div className="DayListItem">
    <div className="has-text-centered day-label">
      {date.toLocaleString('en-US', { weekday: 'long' })}
    </div>
    <div className="has-text-centered">
      <img src={iconUrl(iconCode)} alt="weather-icon" />
    </div>
    <div className="has-text-centered attribute-value">
      {temp}
    </div>
    <div className="has-text-centered attribute-value">
      {celsiusToFahrenheit(temp)}
    </div>
  </div>);
}

DayOverview.propTypes = {
  temp: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  iconCode: PropTypes.string
}

export default DayOverview;
