import style from './EpisodeRow.module.css';

const EpisodeRow = ({obj}) => {
  return (
    <tr>
      <td>{ obj.name}</td>
      <td>{ obj.air_date}</td>
      <td>{ obj.episode}</td>
  </tr>
  )
}

export default EpisodeRow