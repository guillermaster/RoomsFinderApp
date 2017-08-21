import React, { Component } from 'react';
import aircon from './icons/aircon.svg';
import appletv from './icons/appletv.svg';
import btspeakers from './icons/btspeakers.svg';
import cardkey from './icons/cardkey.svg';
import chromecast from './icons/chromecast.svg';
import fireplace from './icons/fireplace.svg';
import hdtv from './icons/hdtv.svg';
import jacuzzi from './icons/jacuzzi.svg';
import nespresso from './icons/nespresso.svg';
import './RoomBox.css';

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
        <div className="row">
          <div className="col-md-12">
            Amenities:
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img src={aircon} className="logo" alt="Air conditioner" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.aircon ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={appletv} className="logo" alt="Apple TV" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.appletv ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={btspeakers} className="logo" alt="Bluetooth speakers" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.btspeakers ? yes : no }
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img src={cardkey} className="logo" alt="Card Key" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.cardkey ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={chromecast} className="logo" alt="Chromecast" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.chromecast ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={fireplace} className="logo" alt="Fire place" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.fireplace ? yes : no }
          </div>
        </div>
        <div className="row">
          <div className="col-md-1">
            <img src={hdtv} className="logo" alt="HD TV" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.hdtv ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={jacuzzi} className="logo" alt="Jacuzzi" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.jacuzzi ? yes : no }
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-1">
            <img src={nespresso} className="logo" alt="Espresso coffee maker" />
          </div>
          <div className="col-md-1">
          { this.props.amenities.nespresso ? yes : no }
          </div>
        </div>
      </div>
    );
  }


  render() {
    let footerButtonIcon = this.state.showFull ?
          "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down";
    let minHeight = this.state.showFull ? '200px' : '150px';

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
