import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
import {
  IQuery,
  IQueryFetchChatRoomMembersArgs,
} from "../../../commons/types/generated/types";
import ChattingUI from "./chatting.presenter";
import { IChattingContext } from "./chatting.types";
import { FETCH_CHAT_ROOM_MEMBERS } from "./detail/chattingDetail.queries";

export const ChattingContext = createContext<IChattingContext>({});

export default function Chatting() {
  const [left, setLeft] = useState(0);
  const [chatRoomId, setChatRoomId] = useState("");

  const { data: roomMembers } = useQuery<
    Pick<IQuery, "fetchChatRoomMembers">,
    IQueryFetchChatRoomMembersArgs
  >(FETCH_CHAT_ROOM_MEMBERS, {
    variables: {
      chatRoomId: chatRoomId || "",
    },
  });

  const onClickChangePosition = () => {
    if (left === 0) setLeft(-100);
    else setLeft(0);
  };

  const onClickSetRoomId = (_id: string) => () => {
    setChatRoomId(_id);
  };

  const value = {
    left,
    chatRoomId,
    roomMembers,
    setLeft,
    onClickChangePosition,
    onClickSetRoomId,
  };

  return (
    <ChattingContext.Provider value={value}>
      <ChattingUI />
    </ChattingContext.Provider>
  );
}
