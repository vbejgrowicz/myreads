/* jshint esversion:6 */
import React from 'react';

class ClearQueryButton extends React.Component {

  render() {
    return (this.props.query !== '') ? (
      <button type="button" className="clear-search" aria-label="Clear" onClick={this.props.onClick}>
        <div className="glyphicon glyphicon-remove"></div>
      </button>
    ) : null;
  }
}

export default ClearQueryButton;
