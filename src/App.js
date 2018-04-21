import React, { Component } from 'react';
import DayOverview from './components/DayOverview';
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
    const attributes = [
      'wind_spd',
      'wind_gus_spd',
      'wind_cdir'
    ]
    const select = this.setSelected.bind(this);

    return (
      <div className="App">
        {selected && <div className="columns">
          <div className="column">
            <div className="box">
            {selected && <DayOverview temp={selected.temp}
              date={new Date(selected.datetime)}
              iconCode={selected.weather.icon} />}
            </div>
          </div>
          <div className="column">
            <div className="box">
              <table className="table is-narrow is-fullwidth">
                <tbody>
                  {attributes.map(attr => (<tr key={attr}>
                    <td>{attr}</td>
                    <td className="has-text-right">{selected[attr]}</td>
                  </tr>))}
                </tbody>
              </table>
            </div>
          </div>
        </div>}
        <div className="box">
          <DayList daysData={this.state.dailyData} onSelect={select} />
        </div>
      </div>
    );
  }
}

export default App;
