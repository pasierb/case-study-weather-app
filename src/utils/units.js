export const M_S = 'm/s'
export const CELSIUS = '&#8451;'
export const FAHRENHEIT = '&#8457';
export const MM = 'mm';
export const KM = 'KM';
export const PERCENT = '%';
export const MB = 'mb';

const UNIT_PRECISSION = {
  [M_S]: 0,
  [CELSIUS]: 0,
  [FAHRENHEIT]: 1,
  [MM]: 0,
  [MB]: 0,
  [KM]: 1,
  [PERCENT]: 1
}

export function celsiusToFahrenheit(value) {
  return Number((value * 1.8 + 32).toFixed(1));
}

export function roundUnitValue(unit, value) {
  if (!value || isNaN(value)) return value;

  const precission = UNIT_PRECISSION[unit];

  return precission ?
    Number(value).toFixed(precission) :
    Math.round(value); 
}