import React, { Component } from 'react';

export default class Card extends Component {
    render() {
      return (
        <div className="bird-card">
          <h2 key={this.props.birdName}>{this.props.birdName}, {this.props.scientificName}, {this.props.wingspan}</h2>
        </div>
      )
    }
}