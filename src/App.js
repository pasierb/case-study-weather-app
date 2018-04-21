import React, { Component } from 'react';
import DayReport from './components/DayReport';
import DayList from './components/DayList';
import { fetchDaily } from './utils/weatherbit';

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Wolverhampton',
      country: 'GB',
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

  setSelected(data) {
    this.setState({
      selected: data
    });
  }

  render() {
    const selected = this.state.selected;
    const select = this.setSelected.bind(this);

    return (
      <div className="App">
        <div className="intro">
          <h1 className="title is-1">{this.state.city}</h1>
          <h1 className="subtitle">{this.state.country}</h1>
        </div>
        <div className="forecast">
          {selected && <DayReport dayData={selected} />}
          <div className="box">
            <DayList daysData={this.state.dailyData} onSelect={select} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
