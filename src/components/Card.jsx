import React, { Component } from 'react';
import eagle from '../images/eagle.svg';
import BirdImages from '../BirdImages';

import CardTag from './CardTag';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagOrder: this.props.tags
    }
  }

  componentDidUpdate(prevProps){
    let update = false;
    let filter;
    for (filter in prevProps.filters) {
      if (this.props.filters[filter] !== prevProps.filters[filter]) {
        update = true;
      }
    }
    if (update) {
      this.orderTags();
    }
  }

  orderTags() {
    this.setState({tagOrder: [...this.state.tagOrder].sort((a ,b) => this.props.filters[b] - this.props.filters[a]
    )});
  }

  render() {
    return (
      <div className="bird-card slide fade">
        <div className="card-contents">
          <div className="card-img">
            <img src={BirdImages[this.props.img]} alt={this.props.img} />
          </div>
          <div className="bird-info">
            <div className="names-and-span">
              <div className="bird-naming">
                <p className="common-name">{this.props.birdName}</p>
                <p className="scientific-name">{this.props.scientificName}</p>
              </div>
              <div className="wingspan">
                <p className='wingspan-val'>{this.props.wingspan}cm</p>
                <img src={eagle} alt='wingspan icon' />
              </div>
            </div>
            <p>{this.props.description}</p>
            <div className="bird-card-tags">
              {this.state.tagOrder.map(tag => <CardTag tag={tag} filters={this.props.filters} nametag={this.props.birdName + tag} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}