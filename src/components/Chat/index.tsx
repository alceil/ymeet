import loadable from "@loadable/component";
import LinearProgress from "@mui/material/LinearProgress";

export const ChatMessage = loadable(() => import("./ChatMessage"), {
  fallback: <LinearProgress />,
});
export const ChatTextInput = loadable(() => import("./ChatTextInput"), {
  fallback: <LinearProgress />,
});
