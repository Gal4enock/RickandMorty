import React, { Component } from 'react';
import { connect } from 'react-redux';


import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import EpisodeRow from '../EpisodeRow/EpisodeRow';

class EpisodesTable extends Component {
  state = {
    page: 1,
    arrList: []
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('iv done');
      this.props.toFetchEpisodes(this.state.page)
    
    }, 500)
    
    setTimeout(() => {
      this.setState({
        arrList: this.props.episObj.results
      })
      console.log("mounted",this.state.arrList);
    }, 600) 
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.toFetchEpisodes(this.state.page)
      setTimeout(() => {
        
        this.setState({
          arrList: this.props.episObj.results
        })
    }, 50)
    }
  }

  render() {
    const episArr = this.state.arrList
    console.log("episodesList", episArr);
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Air date</th>
          <th>Episode</th>
        </tr>
        {episArr && episArr.length > 0 ? episArr.map(epis => <EpisodeRow obj = {epis}/>) : 'please wait or try again'}
      </table>
    )
  }
}

const mapStateToProps = state => ({
  episObj: selector.getEpisodes(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFetchEpisodes: page => dispath(operations.fetchEpisodes(page)),
    // toFilterEpisodes: (key, query) => dispath(operations.filterEpisodes(key, query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (EpisodesTable)