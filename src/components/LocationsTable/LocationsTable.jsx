import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import TableRow from '../../shared/TableRow/TableRow';
import SliderBurrons from '../../shared/SlidereButtons/SlidereButtons';
import FilterField from '../FilterField/FilterField';
import style from './LocationsTable.module.css'

class LocationsTable extends Component {
  state = {
    page: 1,
  }

  componentDidMount() {
    this.props.toFetchLocations(this.state.page)
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.toFetchLocations(this.state.page)
    }
  }

  goNext = () => {
    this.setState({ page: this.state.page + 1 })
    document.documentElement.scrollTop = 0;
  }

  goPrevious = () => {
   document.documentElement.scrollTop = 0;
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 })
    } else return
  }

  filterByQuery = (e) => {
    e.preventDefault();
    const key = e.target.name;
    const query = e.target[0].value
    this.props.toFilterLocations(key, query)
    setTimeout(() => {
      this.setState({arrList: this.props.locObj ? this.props.locObj : 'sorry, try again'})
      e.target[0].value = ''
    },50)
  }

  restart = () => {
   this.props.toFetchLocations(this.state.page)
  }

  render() {
    const locArr = this.props.locObj.results || this.props.locObj.error
    return (
      <div className={style.background}>
        <div className={style.filterForm}>
          <FilterField name='name' filterList={this.filterByQuery} />
          <FilterField name='type' filterList={this.filterByQuery} />
          <FilterField name='dimension' filterList={this.filterByQuery} />
        </div>
        <Button onClick={this.restart} variant="contained">Clear Filters</Button>
        <p className={style.currentPage}>your page is #{this.state.page}</p>
        {this.props.locObj.error ?
           <p className={style.errorText}>Sorry, but {locArr} according to your request</p> :
          <table className={style.table}>
          <thead>
            <tr key='9678'>
              <th key='name' className={style.row}>Name</th>
              <th key='type' className={style.row}>Type</th>
              <th key='dimension' className={style.row}>Dimension</th>
            </tr>
          </thead>
          <tbody>
            {locArr && locArr.length > 0 ? locArr.map(locate => <TableRow key={locate.name} obj={locate} />) : <tr><td>please wait or try again</td></tr>}
          </tbody>
        </table>}
        <SliderBurrons goPrevious={this.goPrevious} goNext={this.goNext} page={this.state.page} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locObj: selector.getLocations(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFetchLocations: page => dispath(operations.fetchLocations(page)),
    toFilterLocations: (key, query) => dispath(operations.filterLocations(key, query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (LocationsTable)