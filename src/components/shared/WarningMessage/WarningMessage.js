import React, { Component } from 'react';

class WarningMessage extends Component {

  render() {
    return (
      <div className="alert alert-warning" role="alert">
        {this.props.message}
      </div>
    );
  }
}

export default WarningMessage;
