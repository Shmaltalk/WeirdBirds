import React, { Component } from 'react';
import Select from 'react-select';

const sortOptions = [{value: 'sort by...', label: 'sort by...'}, {value: 'recommended', label: 'recommended'}, {value:'wingspan', label:'wingspan'}]
const filterTypes = {looks: 'looks weird', acts: 'acts weird', favorites: "talie's favorites"}

export default class SortAndFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      sort: '',
      submitText: 'submit'
    };
  }

  changeFilter(filter) {
    const tempFilters = {...this.state.filters}
    tempFilters[filter] = !this.state.filters[filter]
    this.setState({ filters: tempFilters, submitText: 'submit(!)' })
  }

  submitSettings() {
    this.props.updateFilters(this.state.filters);
    this.props.updateSort(this.state.sort);

    this.setState({ submitText: 'submit' });
  }

  onSortSelect(option) {
    let sorter = '';
    if (option.value === 'sort by...') {
      sorter = 'recommended';
    } else {
      sorter = option.value;
    }

    this.setState({ sort: sorter, submitText: 'submit(!)' });
  }

  render() {
    const filterNames = Object.keys(this.props.filters);
    return (
      <div className="sort-and-filters">
        <div className="filters">
          {filterNames.map(filter => {
              return <button key={filter} className={'filter ' + this.state.filters[filter]} onClick={() => {this.changeFilter(filter)}}> {filterTypes[filter]} </button>
            }
          )}
        </div>
        <div className="dropdown-and-submit">
            <Select options={sortOptions} onChange={(option) => this.onSortSelect(option)} placeholder="sort by..." />
            <button key="submit" onClick={() => {this.submitSettings()}}>{this.state.submitText}</button>
        </div>
      </div>
    );
  }
}
