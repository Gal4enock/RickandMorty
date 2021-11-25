import style from './MyWatchList.module.css';

const MyWatchListRow = ({ obj, handleChange, watched, deleteFromList }) => {
  console.log(obj.name);
  console.log(watched);
  return (
    <tr key={obj.id}>
      <td className={style.row}>{obj.name}</td>
      <td className={style.row}>{obj.air_date}</td>
      <td className={style.row}>{obj.episode}</td>
      <td className={style.row}><input name={obj.name} checked={watched} onChange={handleChange} type="checkbox" /> <button name={obj.name} type='button' onClick={deleteFromList}>Delete</button></td>
    </tr>
  );
}

export default MyWatchListRow