import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';


import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import Card from '../Card';
import style from './Gallery.module.css'

class CharactersList extends Component {
  state = {
  page: 1
}

  componentDidMount() {
    setTimeout(() => {
      console.log('iv done');
      this.props.toFetchCharacters(this.state.page)
    }, 500) 
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.toFetchCharacters(this.state.page)
       console.log('no me');
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


render() {
    const charArr = this.props.charObj.results;
    return (
      <div onClick={this.showDetails}>
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
  date: state.date,
});

const mapDispatchToProps = dispath => {
  return {
    toFetchCharacters: page => dispath(operations.fetchCharacters(page))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (CharactersList)