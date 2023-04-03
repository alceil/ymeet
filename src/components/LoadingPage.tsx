import React from "react";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/material/styles";
import Logo from "./Logo";

// const useStyles = makeStyles((theme:any) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//     display: "flex",
//     backgroundColor: theme.palette.background.default,
//     flexDirection: "column",
//   },
// }));

const LoadingPage: React.FC = () => {
//   const classes = useStyles();

  return (
    <Backdrop 
    // className={classes.backdrop} 
    open>
      <Box p={2}>
        <Logo size={10} />
      </Box>
      <CircularProgress color="primary" />
    </Backdrop>
  );
};

export default LoadingPage;
