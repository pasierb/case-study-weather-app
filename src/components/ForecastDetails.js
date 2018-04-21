import React from 'react';
import PropTypes from 'prop-types';
import { translate } from '../utils/i18n';

function ForecastDetails(props) {
  return (<table className="table is-narrow is-fullwidth ForecastDetails">
    <tbody>
      {props.attributes.map(attr => (<tr key={attr}>
        <td>
          <span className="is-uppercase attribute-name">{translate(attr)}</span>
        </td>
        <td className="has-text-right attribute-value">{props.data[attr]}</td>
      </tr>))}
    </tbody>
  </table>)
}

ForecastDetails.propTypes = {
  data: PropTypes.object.isRequired,
  attributes: PropTypes.arrayOf(String).isRequired
}

export default ForecastDetails;
