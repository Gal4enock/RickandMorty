import { Button, ButtonGroup } from "@material-ui/core"
import style from './SlidereButtons.module.css'

export default function SliderBurrons({goPrevious, goNext, page}) {
  return (
    <div className={style.buttons}>
        <ButtonGroup disableElevation variant="contained" color="primary" >
          <Button onClick={goPrevious}>&laquo;</Button>
          <p className={style.pageNumber}>{page}</p>
            <Button onClick={goNext}> &raquo; </Button>
        </ButtonGroup>
        </div>
  )
}