import React from 'react';
import PropTypes from 'prop-types';
import DayOverview from './DayOverview';
import ForecastDetails from './ForecastDetails';

function DayReport(props) {
  const attributes = [
    'wind_spd',
    'wind_gus_spd',
    'wind_cdir',
    'pop',
    'precip',
    'clouds',
    'pres'
  ];

  return (<div className="columns DayReport">
    <div className="column">
      <div className="box">
        <h6 className="title is-6 has-text-centered">Local weather report</h6>
        <DayOverview temp={props.dayData.temp}
          date={new Date(props.dayData.datetime)}
          description={props.dayData.weather.description}
          iconCode={props.dayData.weather.icon} />
      </div>
    </div>
    <div className="column">
      <div className="box">
        <h6 className="title is-6 has-text-centered">Details</h6>
        <ForecastDetails data={props.dayData} attributes={attributes} />
      </div>
    </div>
  </div>)
}

DayReport.propTypes = {
  dayData: PropTypes.object
};

export default DayReport;
