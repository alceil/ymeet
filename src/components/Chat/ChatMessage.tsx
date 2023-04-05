import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  displayName?: string;
  message?: string;
  time?: string;
  isSelf?: boolean;
  hideAvatar?: boolean;
  hidePrimary?: boolean;
};

const ChatMessage: React.FC<Props> = ({
  displayName,
  message,
  time,
  isSelf,
}) => {
  return (

    <div style={{display:'flex',flexDirection:'column'}}>
<div style={{display:'flex',justifyContent:'space-between',color:'#4527a0'}}>
<h5>{displayName} {isSelf && "(You)"}</h5>
<h5>{time}</h5>
</div>
<div style={
  {
    display:'flex',
    justifyContent:'space-between',
    border:'1px solid rgb(221, 220, 220)',
    padding:'14px',
    borderRadius:'10px'
    }
    } >
 <ReactMarkdown remarkPlugins={[gfm]}>{message || ""}</ReactMarkdown>
</div>
</div>
    // <ListItem
    //   style={{
    //     padding: 0,
    //     marginBottom: 0,
    //   }}
    // >
    //   <ListItemText
    //     style={{ margin: 0 }}
    //     primary={
    //       <Typography
    //         className={classes.secondary}
    //         variant="caption"
    //         color="primary"
    //       >
    //         <b>
    //           {displayName} {isSelf && "(You)"}
    //         </b>
    //         <b>{time}</b>
    //       </Typography>
    //     }
    //     secondary={
    //       <Box border="1px solid #dddcdc" borderRadius={10} m={1} px={2}>
    //         <ReactMarkdown remarkPlugins={[gfm]}>{message || ""}</ReactMarkdown>
    //       </Box>
    //     }
    //   />
    // </ListItem>
  );
};

export default React.memo(ChatMessage);
