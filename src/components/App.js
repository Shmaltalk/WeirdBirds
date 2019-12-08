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
      filters: {acts: false, looks: false, favorites: false},
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
          <h3>Inspired by <a href="https://stonemaiergames.com/games/wingspan/">Wingspan</a></h3>
          <SortAndFilter filters={this.state.filters} updateFilters={this.updateFilters} updateSort={this.updateSort} />
          <Cardlist birds={birds} filters={this.state.filters} sortFunction={this.state.sortFunction}/>
          <div>Created in 48 hours by Talie Massachi</div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </header>
      </div>
    ); 
  }
}

export default App;
