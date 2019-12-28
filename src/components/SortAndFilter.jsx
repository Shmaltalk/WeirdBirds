import React, { Component } from 'react';
import Select from 'react-select';

const sortOptions = [{value: 'sort by...', label: 'sort by...'}, {value: 'recommended', label: 'recommended'}, {value:'wingspan', label:'wingspan'}]
const filterTypes = {acts: 'acts weird', looks: 'looks weird', favorites: "talie's favorites"}

export default class SortAndFilter extends Component {
  constructor(props) {
    super(props);
  }

  onSortSelect(option) {
    let sorter = '';
    if (option.value === 'sort by...') {
      sorter = 'recommended';
    } else {
      sorter = option.value;
    }

    this.props.updateSort(sorter);
  }

  render() {
    const filterNames = Object.keys(this.props.filters);
    return (
      <div className="sort-and-filters">
        <div className="filters">
          {filterNames.map(filter => {
              return <button key={filter} className={'filter ' + this.props.filters[filter]} onClick={() => {this.props.updateFilter(filter)}}> {filterTypes[filter]} </button>
            }
          )}
        </div>
        <div className="dropdown-and-submit">
            <Select options={sortOptions} onChange={(option) => this.onSortSelect(option)} placeholder="sort by..." />
        </div>
      </div>
    );
  }
}
