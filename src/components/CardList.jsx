import React, { Component } from 'react';
import Card from './Card.jsx'

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBirds: []
    };
  }

  componentDidUpdate(prevProps) {
    let update = false;
    let filter;
    for (filter in prevProps.filters) {
      if (this.props.filters[filter] !== prevProps.filters[filter]) {
        update = true;
      }
    }
    if (this.props.sortFunction !== prevProps.sortFunction) {
      update = true;
    }
    console.log(update)
    if (update) {
      this.andFilter(this.sortBirds());
    }
    console.log(this.state)
  }

  componentDidMount() {
    this.andFilter(this.sortBirds());
  }
  
  andFilter(sortedBirds) {

    this.setState({filteredBirds: sortedBirds.filter(bird => {
        let includeBird = true;
        if (this.props.filters.looks && !bird.tags.includes('looks')) {
          includeBird = false;
        } else if (this.props.filters.acts && !bird.tags.includes('acts')) {
          includeBird = false;
        } else if (this.props.filters.favorites && !bird.tags.includes('favorites')) {
          includeBird = false;
        }
        return includeBird;
      })
    });
  }

  sortBirds() {
    if (this.props.sortFunction === 'wingspan') {
      return [...this.props.birds].sort((a, b) => a.wingspan - b.wingspan);
    }
    return [...this.props.birds];
  }

  render() {
    return (
      <div className="cardsList">
        { this.state.filteredBirds.map(bird => <Card key={bird.birdName} {...bird} filters={this.props.filters} />) }
      </div>
    )
  }
}