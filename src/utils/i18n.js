const translations = {
  'wind_spd': 'wind speed',
  'wind_gus_spd': 'wind gusts',
  'wind_cdir': 'wind direction',
  'temp': 'temperature'
};

export function translate(key) {
  return translations[key];
}
