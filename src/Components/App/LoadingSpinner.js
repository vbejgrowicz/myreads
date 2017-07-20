/* jshint esversion:6 */
import React from 'react';

class LoadingSpinner extends React.Component {

  render() {
    return this.props.isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    ):(<div className="not-loading"> </div>);
  }
}

export default LoadingSpinner;
