import { useSnackbar } from 'notistack';
import React from 'react'
import { MdOutlineFileCopy} from 'react-icons/md'
import { CopyToClipboard } from '../../../../../utils/common';
type Props = {
  meetLink?: string;
};
const MeetInfo:React.FC<Props> = ({ meetLink = window.location.href }) => {
  const { enqueueSnackbar } = useSnackbar();
  const handlePress = () => {
    enqueueSnackbar("Copied meeting link");
    CopyToClipboard(meetLink);
  };
  return (
    <div>
    <p>Joining info</p>
    <span style={{color:'#0000008A'}}>
    {meetLink}
    </span>
    <button 
    style={{display: 'flex',
    alignItems: 'center',
    border: 'none',
    margin: '10px auto',
    backgroundColor: '#ffff',
    color:'#4527a0'}}
    onClick={handlePress}
    >
    <MdOutlineFileCopy size={20}/>
<span style={{marginLeft:'10px'}}>Copy joining info</span>
    </button>
  </div>
  )
}

export default MeetInfo