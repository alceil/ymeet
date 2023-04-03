import React,{useState} from 'react'
import Controller from './components/Controller';
import LeftBar from './components/LeftBar';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';
const Meet = () => {
  const [open,setOpen] = useState(true);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });

  const { myStream, peerStream, destroyConnection, raiseHand } = useVideoConf();
  const [gridSize, setGridSize] = React.useState(1);

  React.useEffect(() => {
    const TOTAL_PARTICIPANTS = peerStream.current?.size || 0;
    const GRID_SIZE = [12, 6, 4, 3, 3, 3, 3][TOTAL_PARTICIPANTS];
    let mount = true;
    if (mount) setGridSize(GRID_SIZE);
    return () => {
      mount = false;
    };
  }, [peerStream.current?.size, myStream.current?.active]);
  return (
    <div className={style.meet_container}>
      <div style={{display:'flex'}}>
      <Video open={open}/>
      </div>
<SidePanel  open={open} setOpen={setOpen}/>
<Controller/>
<LeftBar/>
    </div>
  )
}

export default Meet