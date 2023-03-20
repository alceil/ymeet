import React from 'react'
import style from './styles/ReadyComponent.module.css'
const ReadyComponent = () => {
  return (
    <div className={style.joinmeet_right}>
        <h2 className={style.joinmeet_title}>Ready to Join?</h2>
        <button className={style.joinmeet_btn}>Join Now</button>
    </div>
  )
}

export default ReadyComponent