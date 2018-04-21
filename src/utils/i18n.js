const translations = {
  'wind_spd': 'Wind speed',
  'wind_gus_spd': 'Wind gust speed',
  'wind_cdir': 'Wind direction',
  'temp': 'Temperature',
  'pop': 'Probability of Precipitation',
  'clouds': 'Cloud coverage',
  'precip': 'Precipitation',
  'pres': 'Pressure'
};

export function translate(key) {
  return translations[key];
}
