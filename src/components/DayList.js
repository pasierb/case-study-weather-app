import React from 'react';
import PropTypes from 'prop-types';
import DayListItem from './DayListItem';

function DayList(props) {
  return (<div className="columns DayList">
    {props.daysData.map((data) => (
      <div className="column" key={data.ts}>
        <a onClick={props.onSelect.bind(null, data)} className="daySelect">
          <DayListItem temp={data.temp}
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
