import React, { Component } from 'react';
import DayReport from './components/DayReport';
import DayList from './components/DayList';
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
        {selected && <DayReport dayData={selected} />}
        <div className="box">
          <DayList daysData={this.state.dailyData} onSelect={select} />
        </div>
      </div>
    );
  }
}

export default App;
