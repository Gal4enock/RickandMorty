import style from './MyWatchList.module.css';

const MyWatchListRow = ({obj, handleChange, checked, deleteFromList}) => {
  return (
    <tr key={obj.id}>
        <td className={style.row}>{ obj.name}</td>
        <td className={style.row}>{ obj.air_date}</td>
        <td className={style.row}>{obj.episode}</td>
        <td className={style.row}><input name="rememberMe" checked={checked} onChange={handleChange} type="checkbox"/> <button type='button' onClick ={deleteFromList}>Delete</button></td>
    </tr>
  )
}

export default MyWatchListRow