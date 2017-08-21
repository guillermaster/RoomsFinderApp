import React, { Component } from 'react';

class RoomBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFull: false
    };
    //this.handleTextChange = this.handleTextChange.bind(this);
  }

  /*handleTextChange(event){
    let inputValue = event.target.value;
    this.setState({value: inputValue});
    this.props.onChange(inputValue);
  }*/

  render() {
    let description = this.state.showFull ?
                        this.props.description :
                        this.props.description.substring(0,145) + '...';

    return (
      <div className="col-sm-6 col-md-3 col-xl-2">
        <div className="panel panel-primary" style={{minHeight: '200px'}}>
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.props.name}
            </h3>
          </div>
          <div className="panel-body">
            {description}
          </div>
        </div>
      </div>
    );
  }
}

export default RoomBox;
