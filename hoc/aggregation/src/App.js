import React from 'react';
import './App.css';
import MonthTable from './components/MonthTable';
import YearTable from './components/YearTable';
import SortTable from './components/SortTable';
import { withSort } from './hoc/WithSort';


export default class App extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_DATA_URL)
      .then(res => res.json())
      .then(list => this.setState({ list: list.list }))
  }

  render() {
    const { list } = this.state;
    const MonthTableWithSort = withSort(MonthTable)
    const YearTableWithSort = withSort(YearTable)
    const SortTableWithSort = withSort(SortTable)
    return (
      <div id="app">
        <MonthTableWithSort list={ list }/>
        <YearTableWithSort list={ list }/>
        <SortTableWithSort list={ list }/>
      </div>
    );
  }
}
