import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {IoMdMic} from 'react-icons/io'
// import ToggleIcon from "material-ui-toggle-icon";

type ControlButtonProps = {
  title?: string;
  isEnabled: boolean;
  IconOn: typeof IoMdMic;
  IconOff: typeof IoMdMic;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  shortCut?: string;
};

const ControlButton: React.FC<ControlButtonProps> = ({
  title,
  isEnabled,
  IconOn,
  IconOff,
  onClick,
  shortCut,
}) => (
  <Tooltip
    title={`${title} ${!isEnabled ? "off" : "on"} ${
      shortCut ? `(Alt+${shortCut})` : ""
    }`}
  >
    <IconButton accessKey={shortCut || ""} onClick={onClick}>

       {
        isEnabled?<IconOn />:<IconOff />
       } 
      {/* <ToggleIcon on={isEnabled} onIcon={<IconOn />} offIcon={<IconOff />} /> */}
    </IconButton>
  </Tooltip>
);
export default ControlButton;
