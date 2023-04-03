import React from 'react'
import Header from '../../../components/Header/Header'
import Preview from './components/Preview'
import ReadyComponent from './components/ReadyComponent'
import style from './WaitRoom.module.css'
import { getMeet } from '../../../utils/meeting.fetch'
import { updateMeetDetails } from '../../../core/reducers/meeting'
import { useAppDispatch, useAppSelector } from '../../../core/hooks/redux'
import { useSnackbar } from 'notistack'
import { useParams } from 'react-router-dom'
import { useTitle } from '../../../core/hooks/common'

type Params = { meetID: string };

type WaitingRoomProps = {
  joinMeetHandler: () => unknown;
};


const WaitRoom: React.FC<WaitingRoomProps> = ({ joinMeetHandler }) => {

  const dispatch = useAppDispatch();
  const { meetID } = useParams<Params>();
  const { enqueueSnackbar } = useSnackbar();
  const { UID } = useAppSelector(({ authReducer }) => authReducer);
  const [loading, setLoading] = React.useState(true);
  const [meetOk, setMeetOk] = React.useState<boolean | null>(null);


  useTitle("Join Meet");

  React.useEffect(() => {
    getMeet(meetID!, UID)
      .then((details) => {
        const { _id, hostID, title, type } = details;
        dispatch(
          updateMeetDetails({
            MID: _id || "",
            hostID,
            isHost: hostID === UID,
            meetID: meetID!,
            title,
            type,
          })
        );
        setMeetOk(true);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setMeetOk(false);
        enqueueSnackbar(error || "Something went wrong", {
          variant: "error",
        });
      });
  }, [meetID, UID]);
  return (
<>
<Header/>
<div className={style.waitroom_middle}>
<Preview/>
<ReadyComponent  joinMeetHandler={joinMeetHandler}/>
</div>
</>
  )
}

export default WaitRoom