import { Component } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid'
import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import FilterField from '../FilterField/FilterField';
import MyWatchListRow from './MyWatchRow';
import style from './MyWatchList.module.css';

class MyWatchList extends Component {

  state = {
    episodes: [],
    rememberMe: false,
    arrList: ''
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.arrList !== this.state.arrList) {
      this.setState({
          arrList: this.props.watchObj
        })
    }
   }

   handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [input.name]: value });
   
  };

  handleSubmit = () => {
    const localWatchList = JSON.parse(localStorage.getItem('watchList'));
    console.log("localWatchList from storage", localWatchList);
    if (localWatchList) {
      const watchArr = this.state.arrList[0];
      const newArr = localWatchList.push(watchArr)
      this.setState({
        episodes: newArr
      })
    } else {
      const watchArr = this.props.watchObj[0];
      console.log("watchArr if no local", watchArr);
       this.setState({
        episodes: watchArr
       })
      console.log("episodes written", this.state.episodes);
    }
      
    const { episodes } = this.state;
    console.log("episodes from state", episodes);
    localStorage.setItem('watchList', JSON.stringify(episodes));
    // localStorage.setItem('user', rememberMe ? episode : '');
  };
  
  filterByQuery = (e) => {
    e.preventDefault();
    const query = e.target[0].value
    this.props.toFindeToWatch(query)
  }
  
  handleDelete(e) {
    console.log('event', e);
  }
  
  render() {
    const watchArr = this.props.watchObj[0];
    const savedList = JSON.parse(localStorage.getItem('watchList'));

    return (
      <div>
        <FilterField name='episode' filterList={this.filterByQuery} />
         <table className={style.table}>
          <thead key={uuidv4()}>
            <tr>
            <th key={uuidv4()} className={style.row}>Name</th>
            <th key={uuidv4()} className={style.row}>Air date</th>
            <th key={uuidv4()} className={style.row}>Episode</th>
            <th key={uuidv4()} className={style.row}>Want to watch later?</th>
            </tr>
          </thead>
          {
            watchArr ?
            <tbody key={uuidv4()}>
              <tr>
              <td key={uuidv4()} className={style.row}>{ watchArr.name}</td>
              <td key={uuidv4()} className={style.row}>{ watchArr.air_date}</td>
              <td key={uuidv4()} className={style.row}>{watchArr.episode}</td>
              <td key={uuidv4()} className={style.row}><Button onClick={this.handleSubmit} variant="contained">Add to Watch List</Button></td>
              </tr>
          </tbody> 
              :
              <tbody key={uuidv4()}>
                <tr>
              <td key={uuidv4()} className={style.row}>You have nothing to choose</td>
              <td key={uuidv4()} className={style.row}>You have nothing to choose</td>
              <td key={uuidv4()} className={style.row}>You have nothing to choose</td>
              <td key={uuidv4()} className={style.row}><Button variant="contained">Add to Watch List</Button></td>
              </tr>
          </tbody>
        }
        </table>
        <table className={style.table}>
          <thead key={uuidv4()}>
            <tr>
            <th key={uuidv4()} className={style.row}>Name</th>
            <th key={uuidv4()} className={style.row}>Air date</th>
            <th key={uuidv4()} className={style.row}>Episode</th>
            <th key={uuidv4()} className={style.row}>Watched / delete from list</th>
            </tr>
          </thead>
          {
            savedList && savedList.length > 0 ?
              savedList.map(el => <MyWatchListRow obj={el} handleSubmit={this.handleSubmit} cheked={this.state.rememberMe} deleteFromList={this.handleDelete }/> )
              :
              <tbody key={uuidv4()}>
                <tr>
              <td key={uuidv4()} className={style.row}>You have nothing to watch</td>
              <td key={uuidv4()} className={style.row}>You have nothing to watch</td>
              <td key={uuidv4()} className={style.row}>You have nothing to watch</td>
              <td key={uuidv4()} className={style.row}><input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/></td>
              </tr>
          </tbody>
        }
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  watchObj: selector.getWatchList(state),
});

const mapDispatchToProps = dispath => {
  return {
    toFindeToWatch: (query) => dispath(operations.fetchAddToWatchList( query))
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (MyWatchList)
