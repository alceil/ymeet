import React from "react";
import { Socket } from "socket.io-client";
import { SocketContext, DefaultEventsMap } from "../provider/SocketProvider";

export const useSocket = (): Socket<DefaultEventsMap, DefaultEventsMap> => {
  const socketConsumerContext = React.useContext(SocketContext);
  return socketConsumerContext;
};
