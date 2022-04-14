import { useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { RoomListContext } from "../../../../pages/chatting";

const url = "https://backend.ljh305.shop";

export function useTest() {
  const { data: roomList } = useContext(RoomListContext);

  let socket: any;
  useEffect(() => {
    if (!roomList) return;

    const temp = roomList.fetchChatRooms.map((el) => {
      return el.id;
    });

    socket = io(url);

    socket.emit("front", { channel: [...temp] });
    socket.on("back", (data: string) => {
      console.log("back=========");
      console.log(socket);
      console.log(data);
    });
  }, [url]);

  return { socket };
}
