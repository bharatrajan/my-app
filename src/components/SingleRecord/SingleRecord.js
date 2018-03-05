import React, { Component } from 'react';
import './SingleRecord.css';
import PropTypes from 'prop-types';

class SingleRecord extends Component {
  render() {
    const { record } = this.props;
    let { percentage } = this.props.record;
    percentage = percentage/10 + "%";
    return (
      <tr className="SingleRecord">
        <td>{record.rank}</td>
        <td>{record.label}</td>
        <td>{record.asn}</td>
        <td className="percentage-container">
          <div className="progress">
            <div className="progress-bar" style={{width: percentage}}>
              <span className="sr-only">70% Complete</span>
            </div>
          </div>        
        </td>
      </tr>
    );
  }
}

SingleRecord.propTypes = {
    record: PropTypes.object.isRequired
};
  
export default SingleRecord;