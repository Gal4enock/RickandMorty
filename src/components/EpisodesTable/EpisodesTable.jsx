import React, { Component } from 'react';
import { connect } from 'react-redux';
import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import TableRow from '../../shared/TableRow/TableRow';
import SliderBurrons from '../../shared/SlidereButtons/SlidereButtons';
import FilterField from '../FilterField/FilterField';
import style from './EpisodesTable.module.css'

class EpisodesTable extends Component {
  state = {
    page: 1,
  }

  componentDidMount() {
    this.props.toFetchEpisodes(this.state.page)

}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.toFetchEpisodes(this.state.page)
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
    this.props.toFilterEpisodes(key, query)
  }

  render() {
    const episArr = this.props.episObj
    return (
      <div className={style.background}>
        <FilterField name='name' filterList={this.filterByQuery} />
        <p className={style.currentPage}>your page is #{this.state.page}</p>
        <table className={style.table}>
          <thead>
            <tr key='9678'>
              <th key='name' className={style.row}>Name</th>
              <th key='date' className={style.row}>Air date</th>
              <th key='episode' className={style.row}>Episode</th>
            </tr>
          </thead>
          <tbody>
            {episArr && episArr.length > 0 ?
              episArr.map(epis => <TableRow key={epis.name} obj={epis} />) :
              <tr><td>please wait or try again</td></tr>}
          </tbody>
        </table>
        <SliderBurrons goPrevious={this.goPrevious} goNext={this.goNext} page={this.state.page} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episObj: selector.getEpisodes(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFetchEpisodes: page => dispath(operations.fetchEpisodes(page)),
    toFilterEpisodes: (key, query) => dispath(operations.filterEpisodes(key, query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (EpisodesTable)