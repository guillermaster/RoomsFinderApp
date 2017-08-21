import React, { Component } from 'react';

const yes = "Yes";
const no = "No";

class RoomBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      showFull: false
    };
    this.handleFooterClick = this.handleFooterClick.bind(this);
  }

  handleFooterClick(){
    this.setState({showFull: !this.state.showFull});
  }

  renderDescription(){
    let description = this.state.showFull ?
          this.props.description : this.props.description.substring(0,130) + '...';

    return (
      <div className="row">
        <div className="col-md-12">
          {description}
        </div>
      </div>
    );
  }

  renderUpgradedFacilities(){
    let upgradedFacilities = this.props.upgradedFacilities ?
      "It has Upgraded facilities!" : " ";

    return (
      <div className="row" style={{textAlign: 'right', fontSize: '70%'}}>
        <div className="col-md-12">
          <strong>{upgradedFacilities}</strong>
        </div>
      </div>
    );
  }

  renderExtras(){
    if(!this.state.showFull) return '';

    return (
      <div style={{fontSize: '75%'}}>
        <div className="row">
          <div className="col-md-4">
            # Bathrooms:
          </div>
          <div className="col-md-1">
            {this.props.bathrooms}
          </div>
        </div>
      </div>
    );
  }


  render() {
    let footerButtonIcon = this.state.showFull ?
          "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down";
    let minHeight = this.state.showFull ? '200px' : '120px';

    return (
      <div className="col-sm-6 col-md-3 col-xl-2">
        <div className="panel panel-primary">
          <div className="panel-heading">
              {this.props.name}
          </div>
          <div className="panel-body"
            style={{fontSize: '88%', minHeight: minHeight, textAlign: 'left'}}>
            {this.renderUpgradedFacilities()}
            {this.renderDescription()}
            <br />
            {this.renderExtras()}
          </div>
          <div className="panel-footer"
            style={{cursor: 'pointer'}}
            onClick={this.handleFooterClick}>
            <span className={footerButtonIcon} />
          </div>
        </div>
      </div>
    );
  }
}

export default RoomBox;
