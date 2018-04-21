import React from 'react';
import PropTypes from 'prop-types';
import {
  CELSIUS,
  FAHRENHEIT,
  celsiusToFahrenheit,
  roundUnitValue
} from '../utils/units';
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
        {roundUnitValue(CELSIUS, temp)}
        <span className="attribute-unit" dangerouslySetInnerHTML={{__html: CELSIUS }} />
      </p>
      <p className="attribute-value">
        {roundUnitValue(FAHRENHEIT, celsiusToFahrenheit(temp))}
        <span className="attribute-unit" dangerouslySetInnerHTML={{__html: FAHRENHEIT }} />
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
