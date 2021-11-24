import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import SliderBurrons from '../../shared/SlidereButtons/SlidereButtons';
import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import Card from '../Card';
import FilterField from '../FilterField/FilterField';
import style from './CharactersList.module.css'

class CharactersList extends Component {
  state = {
    page: 1,
    filtered: false,
    query: '',
    key: '',
}

  componentDidMount() {
   this.props.toFetchCharacters(this.state.page);

}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.state.filtered ?
        this.props.toFilterCharacters(this.state.page, this.state.key, this.state.query) :
        this.props.toFetchCharacters(this.state.page);
    }
  };

  restart = () => {
    this.setState({
      page: 1,
      filtered: false,
      query: '',
      key: '',
    });
    this.props.toFetchCharacters(this.state.page);
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
    this.setState({ page: 1 });
    const key = e.target.name;
    const query = e.target[0].value;
    const page = this.state.page;
    this.props.toFilterCharacters(page, key, query);
    this.setState({ filtered: true });
    this.setState({ query });
    this.setState({ key });
    e.target[0].value = '';
  }

  render() {
    const charArr = this.props.charObj.results ||  this.props.charObj.error;
    console.log(typeof charArr);
    return (
      <div className={style.background} onClick={this.showDetails}>
        <div >
          <div className={style.filterForm}>
            <FilterField name='name' filterList={this.filterByQuery} />
            <FilterField name='species' filterList={this.filterByQuery} />
            <FilterField name='gender' filterList={this.filterByQuery} />
          </div>
          <Button onClick={this.restart} variant="contained">Clear Filters</Button>
          {this.state.filtered ?
            <span>  List filtered by {this.state.key} = {this.state.query} </span> : ''}
        </div>
        <p className={style.currentPage}>your page is #{this.state.page}</p>
        { this.props.charObj.results ?
          <ul className={style.list}>
          {charArr && charArr.length > 0 ?
            charArr.map(char => <li key={char.id}><Card obj={char} /></li>) :
            'please wait or try again'}
          </ul> :
          <p className={style.errorText}>Sorry, but {charArr} according to your request</p>}
        <SliderBurrons goPrevious={this.goPrevious} goNext={this.goNext} page={this.state.page} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  charObj: selector.getCharacters(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFetchCharacters: page => dispath(operations.fetchCharacters(page)),
    toFilterCharacters: (page, key, query) => dispath(operations.filterCharacters(page, key, query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (CharactersList)