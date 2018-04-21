import { toPairs } from 'ramda';
import {
  CELSIUS,
  M_S,
  PERCENT,
  MM,
  KM,
  MB
} from './units';

const DAILY_API_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';

export const ATTRIBUTES_UNIT = {
  'wind_gus_spd': M_S,
  'wind_spd': M_S,
  'temp': CELSIUS,
  'pop': PERCENT,
  'precip': MM,
  'clouds': PERCENT,
  'vis': KM,
  'pres': MB
};

export function fetchDaily(params) {
  const query = {
    key: process.env.REACT_APP_WEATHERBIT_API_KEY,
    lang: 'en',
    ...params,
    units: 'M'
  }

  return fetch([
    DAILY_API_URL,
    toPairs(query).map(pair => pair.join('=')).join('&')
  ].join('?'));
}

export function iconUrl(code) {
  return ['https://www.weatherbit.io/static/img/icons/', code, '.png'].join('');
}
