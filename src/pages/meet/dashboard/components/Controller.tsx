import React from 'react'
import style from './styles/Controller.module.css'
import {IoMdMic,IoMdMicOff} from 'react-icons/io'
import {
    MdOutlineVideocam,
    MdOutlineVideocamOff,
    MdPresentToAll,
    MdOutlineCancelPresentation,
    MdCallEnd,
    MdOutlineBrush,
    MdBrightness4,
    MdOutlinePanTool,
    MdPanTool
} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux';
import ControlButton from '../../../../components/ControlButton';
import IconButton from '@mui/material/IconButton';
import { toggleAudio, toggleScreen, toggleVideo } from '../../../../core/reducers/media';
import Tooltip from '@mui/material/Tooltip';

type ControllerProps = {
  endCallHandler: () => unknown;
  raiseHandHandler: () => unknown;
};
const Controller:React.FC<ControllerProps> = (
{  
  endCallHandler,
  raiseHandHandler
}
) => {
  const dispatch = useAppDispatch();
  const { isAudio, isVideo, isScreenShare, isWhiteBoard, isHand } =
    useAppSelector(({ mediaReducer }) => mediaReducer);
  return (
    <div className={style.controller_container}>
    



      {/* <ControlButton
        title="White Board"
        isEnabled={isWhiteBoard}
        shortCut="w"
        IconOn={BrushOutlined}
        IconOff={BrushOutlined}
        onClick={() => dispatch(toggleWhiteBoard(null))}
      /> */}
      {/* <ControlButton
        title="Theme Mode"
        isEnabled={isWhiteBoard}
        shortCut="t"
        IconOn={Brightness4}
        IconOff={Brightness4}
        onClick={() => dispatch(toggleDarkMode(null))}
      /> */}

        {/* <IoMdMic size={24}/> */}
        <ControlButton
        title="Microphone"
        shortCut="m"
        isEnabled={isAudio}
        IconOn={IoMdMic}
        IconOff={IoMdMicOff}
        onClick={() => dispatch(toggleAudio(null))}
      />
        {/* <MdOutlineVideocam  size={24}/> */}
        <ControlButton
        title="Video"
        shortCut="v"
        isEnabled={isVideo}
        IconOn={MdOutlineVideocam}
        IconOff={MdOutlineVideocamOff}
        onClick={() => dispatch(toggleVideo(null))}
      />
        {/* <MdPresentToAll size={24}/> */}
        <ControlButton
        title="ScreenShare"
        shortCut="s"
        isEnabled={isScreenShare}
        IconOn={MdOutlineCancelPresentation}
        IconOff={MdPresentToAll}
        onClick={() => dispatch(toggleScreen(null))}
      />
        <Tooltip title="End Call (Alt+e)">
        <button  className={style.callend_btn} onClick={endCallHandler}>
        <MdCallEnd size={24}/>
        </button>
        </Tooltip>

        <MdOutlineBrush size={24}/>
        <MdBrightness4 size={24}/>
        {/* <MdOutlinePanTool size={24}/> */}
        <ControlButton
        title="Raise Hand"
        isEnabled={isHand}
        shortCut="r"
        IconOn={MdOutlinePanTool}
        IconOff={MdPanTool}
        onClick={raiseHandHandler}
      />
    </div>
  )
}

export default Controller