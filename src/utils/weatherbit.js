import { toPairs } from 'ramda';

const DAILY_API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

export function fetchDaily(params) {
  const query = {
    key: process.env.REACT_APP_WEATHERBIT_API_KEY,
    ...params
  }

  return fetch([
    DAILY_API_URL,
    toPairs(query).map(pair => pair.join('=')).join('&')
  ].join('?'));
}

export function iconUrl(code) {
  return ['https://www.weatherbit.io/static/img/icons/', code, '.png'].join('');
}
