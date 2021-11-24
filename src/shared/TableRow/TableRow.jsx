import style from './TableRow.module.css';

const TableRow = ({ obj }) => {
  return (
    <tr key={obj.id}>
      <td  className={style.row}>{ obj.name}</td>
      <td className={style.row}>{ obj.air_date ? obj.air_date: obj.type}</td>
      <td className={style.row}>{ obj.episode ? obj.episode : obj.dimension}</td>
  </tr>
  )
}

export default TableRow