import React, { Component } from 'react';
import DayOverview from './components/DayOverview';
import { fetchDaily } from './utils/weatherbit';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailyData: [],
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
        dailyData: weatherbitData.data
      });
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.dailyData.map(({ temp, datetime, ts }) => (
          <DayOverview key={ts} temp={temp} date={new Date(datetime)} />
        ))}
      </div>
    );
  }
}

export default App;
