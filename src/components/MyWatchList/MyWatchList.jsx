import { Component } from "react";
import { connect } from 'react-redux';
import { Button } from "@material-ui/core";
import selector from '../../redux/selectors';
import operations from '../../redux/operations';
import FilterField from '../FilterField/FilterField';
import MyWatchListRow from './MyWatchRow';
import style from './MyWatchList.module.css';

class MyWatchList extends Component {

  state = {
    episodes: [],
    checkbox: false,
    arrList: '',
    rerender: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.arrList !== this.state.arrList) {
      this.setState({
          arrList: this.props.watchObj
        })
    }
   }

   handleChange = (event) => {
     const localArr = JSON.parse(localStorage.getItem('watchList'));
     const newArr = localArr.map(el => {
       if (el.name === event.target.name) {
         el.watched = !el.watched;
        }
        return el;
      })
      localStorage.setItem('watchList', JSON.stringify(newArr));
     this.setState({
       [event.target.type]: event.target.value
     })
  };

  handleSubmit = () => {
    const localWatchList = JSON.parse(localStorage.getItem('watchList'));
    if (localWatchList) {
      const watchArr = { ...this.props.watchObj[0], watched: false };
      console.log('watched', watchArr);
      localWatchList.push(watchArr)
      localStorage.setItem('watchList', JSON.stringify(localWatchList));
    } else {
      const watchArr = [{...this.props.watchObj[0], watched: false}];
      console.log(watchArr);
      localStorage.setItem('watchList', JSON.stringify(watchArr));
      }
    this.setState((prevState) => {
      return { rerender: !prevState.rerender }
    });
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
    console.log('renderList', savedList);
    return (
      <div>
        <FilterField name='episode' filterList={this.filterByQuery} />
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.row}>Name</th>
              <th className={style.row}>Air date</th>
              <th className={style.row}>Episode</th>
              <th className={style.row}>Want to watch later?</th>
            </tr>
          </thead>
          {
            watchArr ?
              <tbody>
                <tr>
                  <td className={style.row}>{watchArr.name}</td>
                  <td className={style.row}>{watchArr.air_date}</td>
                  <td className={style.row}>{watchArr.episode}</td>
                  <td className={style.row}><Button onClick={this.handleSubmit} variant="contained">Add to Watch List</Button></td>
                </tr>
              </tbody>
              :
              <tbody>
                <tr>
                  <td className={style.row}>You have nothing to choose</td>
                  <td className={style.row}>You have nothing to choose</td>
                  <td className={style.row}>You have nothing to choose</td>
                  <td className={style.row}><Button variant="contained">Add to Watch List</Button></td>
                </tr>
              </tbody>
          }
        </table>
        <table className={style.table}>
          <thead>
            <tr>
              <th className={style.row}>Name</th>
              <th className={style.row}>Air date</th>
              <th className={style.row}>Episode</th>
              <th className={style.row}>Watched / delete from list</th>
            </tr>
          </thead>
          {
            savedList && savedList.length > 0 ?
              <tbody>
                {savedList.map(el => {
                  console.log('inMap', el.watched);
                  return <MyWatchListRow key={el.id} obj={el} handleSubmit={this.handleSubmit} watched={el.watched} handleChange={this.handleChange} deleteFromList={this.handleDelete} />
                })}
              </tbody>
              :
              <tbody>
                <tr>
                  <td className={style.row}>You have nothing to watch</td>
                  <td className={style.row}>You have nothing to watch</td>
                  <td className={style.row}>You have nothing to watch</td>
                  <td className={style.row}><input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /></td>
                </tr>
              </tbody>
          }
        </table>
      </div>
    );
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
