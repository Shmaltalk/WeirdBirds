import React, { Component } from 'react';

const filterTypes = {looks: 'looks weird', acts: 'acts weird', favorites: "talie's favorites"}

export default class CardTag extends Component {
  render() {
    return (
      <div className={'filter ' + this.props.filters[this.props.tag]} key={this.props.nametag}>
        {filterTypes[this.props.tag]}
      </div>
    )
  }

}