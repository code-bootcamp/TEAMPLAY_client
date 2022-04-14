import { useQuery } from "@apollo/client";
import { createContext } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import Chatting from "../../src/components/units/chatting/chatting.container";
import { FETCH_CHAT_ROOMS } from "../../src/components/units/chatting/list/chattingList.queries";

interface IRoomListContext {
  data?: Pick<IQuery, "fetchChatRooms"> | undefined;
}

export const RoomListContext = createContext<IRoomListContext>({});

export default function ChattingPage() {
  const { data, loading } =
    useQuery<Pick<IQuery, "fetchChatRooms">>(FETCH_CHAT_ROOMS);

  if (loading) return "Loading...";

  const value = {
    data,
  };
  return (
    <RoomListContext.Provider value={value}>
      <Chatting />
    </RoomListContext.Provider>
  );
}
