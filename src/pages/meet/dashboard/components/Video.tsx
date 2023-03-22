import React from 'react'
import style from './styles/Video.module.css'
const Video: React.FC<{open:boolean}> = ({open}) => {
  return (
    <div className= {`${style.video_box} ${open?`${style.transition}`:` `}`}>
        <h5 className={style.displayName}>You</h5>
    </div>
  )
}

export default Video