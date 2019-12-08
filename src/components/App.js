import React, { Component } from 'react';

import Cardlist from './CardList';
import SortAndFilter from './SortAndFilter';
import birds from '../birds';

import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: birds,
      filters: {looks: false, acts: false, favorites: false},
      sortFunction: ''
    }
    this.updateFilters = this.updateFilters.bind(this);
    this.updateSort = this.updateSort.bind(this);
  }

  updateFilters(newFilters) {
    this.setState({ filters: newFilters });
  }

  updateSort(newSort) {
    this.setState({ sortFunction: newSort });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Weird Birds</h1>
          <SortAndFilter filters={this.state.filters} updateFilters={this.updateFilters} updateSort={this.updateSort} />
          <Cardlist birds={birds} filters={this.state.filters} sortFunction={this.state.sortFunction}/>
        </header>
      </div>
    ); 
  }
}

export default App;
