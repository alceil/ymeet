/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { useEffect, useState } from "react";
import { useSocket } from "./useSocket";
import { useSnackbar } from "notistack";
import { getChat } from "../../utils/chat.fetch";
import { useAppDispatch, useAppSelector } from "./redux";
import { addChat, clearChat, initialChat } from "../reducers/chat";

export const useMsgs = (meetID?: string) => {
  console.log(meetID)
  const socketClient = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [meetTitle, setMeetTitle] = useState("");
  const { UID, displayName } = useAppSelector(
    ({ authReducer: { UID, displayName } }) => ({
      UID,
      displayName,
    })
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!meetID) return;
    resetChat();
    setLoading(true);
    getChat(UID, meetID)
      .then((response) => {
        dispatch(initialChat(response.chats));
        setMeetTitle(response.meetTitle);
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar(err || "Something went wrong", {
          variant: "error",
        });
      });
  }, [meetID, UID]);

  useEffect(() => {
    if (!meetID) return;
    socketEvents();
  }, []);

  const socketEvents = () => {
    socketClient.on("newMessage", (messageData) => {
      console.log(messageData);
      dispatch(
        addChat({
          MID: messageData._id,
          UID: messageData.UID,
          displayName: messageData.displayName || "",
          message: messageData.message || "",
          time: messageData.createdAt || "",
        })
      );
    });
  };

  const sendMessage = React.useCallback((message: string) => {
    console.log(message)
    socketClient.emit("sendMessage", {
      displayName,
      message,
      UID,
    });
  }, []);

  const resetChat = () => {
    dispatch(clearChat());
  };

  return { sendMessage, resetChat, loading, meetTitle };
};
