import React from 'react';
import { Button } from '@material-ui/core';
import TableRow from '../TableRow/TableRow';
import SliderBurrons from '../SlidereButtons/SlidereButtons';
import FilterField from '../FilterField/FilterField';
import style from './Tables.module.css';

export default function Table({filterByQuery, restart, data, goPrevious, goNext, page}) {
  const dataArr = data.results;
  return (
    <div className={style.background}>
        <div className={style.filterForm}>
          <FilterField name='name' filterList={filterByQuery} />
        </div>
        <Button onClick={restart} variant="contained">Clear Filters</Button>
        <p className={style.currentPage}>your page is #{page}</p>
        {data.error ?
           <p className={style.errorText}>Sorry, but {data.error} according to your request</p> :
          <table className={style.table}>
          <thead>
            <tr>
              <th className={style.row}>Name</th>
              <th className={style.row}>{dataArr && dataArr[0].dimension ? "Type" : "Air date"}</th>
              <th className={style.row}>{dataArr && dataArr[0].dimension ? "Dimension" : "Episode"}</th>
            </tr>
          </thead>
          <tbody>
            {dataArr && dataArr.length > 0 ? dataArr.map(item => <TableRow key={item.name} obj={item} />) : <tr><td>please wait or try again</td></tr>}
          </tbody>
        </table>}
        <SliderBurrons goPrevious={goPrevious} goNext={goNext} page={page} />
      </div>
  )
} 