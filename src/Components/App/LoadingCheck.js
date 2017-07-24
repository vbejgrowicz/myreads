/* jshint esversion:6 */
import React from 'react';

class LoadingCheck extends React.Component {

  render() {
    return this.props.isLoading ? (
      <div className="spinner"></div>
    ) : null;
  }
}

export default LoadingCheck;
