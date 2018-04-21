import React, { Component } from 'react';
import DayOverview from './components/DayOverview';
import { fetchDaily } from './utils/weatherbit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyData: [],
      selected: undefined
    };
  }

  componentDidMount() {
    fetchDaily({
      city: 'Wolverhampton',
      country: 'GB',
      days: 7
    }).then(res =>
      res.json()
    ).then(weatherbitData => {;
      this.setState({
        dailyData: weatherbitData.data,
        selected: weatherbitData.data[0]
      });
    })
  }

  render() {
    const selected = this.state.selected;

    return (
      <div className="App">
        <div className="columns">
          <div className="column">
            {selected && <DayOverview temp={selected.temp} date={new Date(selected.datetime)} iconCode={selected.weather.icon} />}
          </div>
          <div className="column">
          </div>
        </div>
        <div className="columns">
          {this.state.dailyData.map(({ temp, datetime, ts, weather }) => (
            <div className="column" key={ts}>
              <DayOverview temp={temp} date={new Date(datetime)} iconCode={weather.icon} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
