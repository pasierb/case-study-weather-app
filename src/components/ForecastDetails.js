import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../utils/i18n';
import { ATTRIBUTES_UNIT } from '../utils/weatherbit';
import { roundUnitValue } from '../utils/units';

function ForecastDetails(props) {
  return (<table className="table is-narrow is-fullwidth ForecastDetails">
    <tbody>
      {props.attributes.map(attr => (<tr key={attr}>
        <td>
          <span className="attribute-name">
            {translate(attr)}
            {ATTRIBUTES_UNIT[attr] && (<span className="attribute-unit">
              ({ATTRIBUTES_UNIT[attr]})
            </span>)}
          </span>
        </td>
        <td className="has-text-right attribute-value">
          {roundUnitValue(ATTRIBUTES_UNIT[attr], props.data[attr])}
        </td>
      </tr>))}
    </tbody>
  </table>)
}

ForecastDetails.propTypes = {
  data: PropTypes.object.isRequired,
  attributes: PropTypes.arrayOf(String).isRequired
}

export default ForecastDetails;
