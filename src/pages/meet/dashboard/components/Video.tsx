import React from 'react'
import style from './styles/Video.module.css'
type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  open:Boolean,
  stream: MediaStream | undefined;
  displayName?: string;
};
const Video: React.FC<VideoProps> = ({
  open,
  stream,
  displayName = "You",
  ...props
}) => {
  const videoController = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (videoController.current && stream) {
      videoController.current.srcObject = stream;
    }
  }, [stream]);
  return (
    <div >
            <video
className= {`${style.video_box} ${open?`${style.transition}`:` `}`}
        ref={videoController}
        autoPlay
        {...props}
      />
        <h5 className={style.displayName}>{displayName}</h5>
    </div>
  )
}

export default Video