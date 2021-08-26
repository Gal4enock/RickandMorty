import { Button } from "@material-ui/core";
import style from './FilterField.module.css';

const FilterField = ({name, filterList, toChange}) => {
  
  return(
    <form name={name} action="submit"  onSubmit={filterList} className={style.form}>
      <input type="text" className={style.filterInput }/>
      <Button variant="outlined" type="submit">filter by {name}</Button>
    </form>
  )
}

export default FilterField