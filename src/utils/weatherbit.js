import { toPairs } from 'ramda';

const DAILY_API_URL = 'http://api.weatherbit.io/v2.0/forecast/daily';

export function fetchDaily(params) {
  const query = {
    key: process.env.WEATHERBIT_API_KEY,
    ...params
  }

  return fetch([
    DAILY_API_URL,
    toPairs(query).map(pair => pair.join('=')).join('&')
  ].join('?'));
}