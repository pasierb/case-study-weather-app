import { celsiusToFahrenheit } from './units';

describe('#celsiusToFahrenheit', () => {
  it('should calculate with one decimal place precision', () => {
    expect(celsiusToFahrenheit(22)).toEqual(71.6);
  })
})