import React from 'react';
import PropTypes from 'prop-types';
import DayOverview from './DayOverview';

function DayList(props) {
  return (<div className="columns">
    {props.daysData.map((data) => (
      <div className="column" key={data.ts}>
        <a onClick={props.onSelect.bind(null, data)} className="daySelect">
          <DayOverview temp={data.temp}
            date={new Date(data.datetime)}
            iconCode={data.weather.icon} />
        </a>
      </div>
    ))}
  </div>)
}

DayList.propTypes = {
  daysData: PropTypes.arrayOf(PropTypes.shape({
    temp: PropTypes.number
  })).isRequired,
  onSelect: PropTypes.func.isRequired
}

export default DayList;
