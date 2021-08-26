import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';


import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import Card from '../Card';
import FilterField from '../FilterField/FilterField';
import style from './Gallery.module.css'

class CharactersList extends Component {
  state = {
    page: 1,
    arrList: []
}

  componentDidMount() {
    setTimeout(() => {
      console.log('iv done');
      this.props.toFetchCharacters(this.state.page)
    
    }, 500)
    
    setTimeout(() => {
    
      this.setState({
        arrList: this.props.charObj.results
      }) 
    }, 1000) 
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.toFetchCharacters(this.state.page)
       this.setState({
        arrList: this.props.charObj.results
      })
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

  filterByQuery = () => {

  }


render() {
  const charArr = this.state.arrList
  console.log('cccccc', charArr);
    return (
      <div onClick={this.showDetails}>
        <div>
          {/* <FilterField name='name' filterList={this.filterByQuery} /> */}
          {/* <FilterField name='species' filterList={this.filterByQuery} /> */}
          {/* <FilterField name='gender' filterList = {this.filterByQuery} /> */}
          {/* <form action="submit">
            <input type="text" name="name" />
            <Button type="submit">filter by name</Button>
          </form>
          <form action="submit">
            <input type="text" name="species" />
            <button type="submit">filter by species</button>
          </form>
          <form action="submit">
            <input type="text" name="gender" />
            <button type="submit">filter by gender</button>
          </form> */}
        </div>
        <p className={style.currentPage}>your page is #{this.state.page }</p>
        <ul className={style.list}>{charArr ? charArr.map(char => <li key={char.id}><Card obj={char} /></li>) : 'ooops'}</ul>
          <div className={style.buttons}>
        <ButtonGroup disableElevation variant="contained" color="primary" >
          <Button onClick={this.goPrevious}>&laquo;</Button>
          <p className={style.pageNumber}>{ this.state.page}</p>
            <Button onClick={this.goNext}> &raquo; </Button>
        </ButtonGroup>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  charObj: selector.getCharacters(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFetchCharacters: page => dispath(operations.fetchCharacters(page)),
    toFilterCharacters: (key, query) => dispath(operations.filterCharacters(key, query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (CharactersList)