import React from 'react'
import style from './styles/Preview.module.css'
import {IoMdMic} from 'react-icons/io'
import {MdOutlineVideocam} from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../../../core/hooks/redux'
const Preview = () => {
  const videoController = React.useRef<HTMLVideoElement>(null);
  const dispatch = useAppDispatch();
  const { isAudio, isVideo } = useAppSelector(
    ({ mediaReducer }) => mediaReducer
  );
  React.useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: isVideo, audio: true })
      .then((stream) => {
        if (videoController.current) {
          videoController.current.srcObject = stream;
        }
      });
  }, [isVideo]);

  React.useEffect(() => {
    if (videoController.current) {
      videoController.current.muted = !isAudio;
    }
  }, [isAudio]);
  return (
    <div>
              <video muted className={style.video_box} ref={videoController} autoPlay />
      <div className={style.vc_options}>
       <IoMdMic size={20} style={{color:'rgba(0, 0, 0, 0.54)'}}/> 
       <MdOutlineVideocam size={20} style={{color:'rgba(0, 0, 0, 0.54)'}}/>

      </div>
    </div>
  )
}

export default Preview