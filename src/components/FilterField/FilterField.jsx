import { Button } from "@material-ui/core";

const FilterField = (name, filterList) => {
  
  return(
    <form action="submit" onSubmit={filterList}>
      <input type="text" name={name} />
      <Button type="submit">filter by {name}</Button>
    </form>
  )
}

export default FilterField