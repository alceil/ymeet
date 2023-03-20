import React from 'react'
import Header from '../../../components/Header/Header'
import Preview from './components/Preview'
import ReadyComponent from './components/ReadyComponent'
import style from './WaitRoom.module.css'
const WaitRoom = () => {
  return (
<>
<Header/>
<div className={style.waitroom_middle}>
<Preview/>
<ReadyComponent/>
</div>
</>
  )
}

export default WaitRoom