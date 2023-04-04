import React,{useState} from 'react'
import Controller from './components/Controller';
import LeftBar from './components/LeftBar';
import SidePanel from './components/SidePanel';
import Video from './components/Video';
import style from './Meet.module.css';
import { useVideoConf } from '../hooks/useVideoConf';
const Meet = () => {
  const [open,setOpen] = useState(true);

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
      <Video open={open} stream={myStream.current} displayName={"You"} />
      </div>
<SidePanel  open={open} setOpen={setOpen}/>
<Controller
        endCallHandler={destroyConnection}
        raiseHandHandler={raiseHand}
/>
<LeftBar/>
    </div>
  )
}

export default Meet