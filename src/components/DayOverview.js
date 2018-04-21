import React from 'react';
import PropTypes from 'prop-types';

function DayOverview(props) {
  return (<div>
    {props.date.toLocaleString('en-US', { weekday: 'long' })}
    {props.temp}
  </div>);
}

DayOverview.propTypes = {
  temp: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
}

export default DayOverview;
