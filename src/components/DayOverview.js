import React from 'react';
import PropTypes from 'prop-types';
import { celsiusToFahrenheit } from '../utils/units';
import { iconUrl } from '../utils/weatherbit';

function DayOverview(props) {
  const { date, iconCode, temp, description } = props;

  return (<div className="columns DayOverview">
    <div className="column has-text-centered">
      <img src={iconUrl(iconCode)} alt={iconCode} />
    </div>
    <div className="column has-text-centered">
      <p className="day-label">
        {date.toLocaleString('en-US', { weekday: 'long' })}
      </p>
      <p className="description">
        {description}
      </p>
      <p className="attribute-value">
      {temp}
      </p>
      <p className="attribute-value">
      {celsiusToFahrenheit(temp)}
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
