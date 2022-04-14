import { useMutation, useQuery } from "@apollo/client";
import {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import io, { Socket } from "socket.io-client";
import { RoomListContext } from "../../../../../pages/chatting";
import {
  CheckPrevDate,
  SetDateFunc,
} from "../../../../commons/library/calcDate";
import { getTime } from "../../../../commons/library/getTime";
import {
  IChat,
  IMutation,
  IMutationSendMessageArgs,
  IQuery,
  IQueryFetchChatsArgs,
} from "../../../../commons/types/generated/types";
import useFetchUser from "../../../commons/hooks/useFetchUser";
import { ChattingContext } from "../chatting.container";
import ChattingDetailUI from "./chattingDetail.presenter";
import { FETCH_CHATS, SEND_MESAGE } from "./chattingDetail.queries";
import {
  IChattingDetailContext,
  IJoinMsg,
  IMessageData,
} from "./chattingDetail.types";

const url = "https://backend.ljh305.shop";

export const ChattingDetailContext = createContext<IChattingDetailContext>({});

export default function ChattingDetail() {
  const { chatRoomId } = useContext(ChattingContext);
  const [position, setPosition] = useState(-262.5);
  const [isToggle, setIsToggle] = useState(false);
  const [message, setMessage] = useState("");
  const [roomName, setRoomName] = useState("");
  const ChattingBoxRef = useRef<HTMLUListElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { data: userInfo } = useFetchUser();
  const { data: roomList } = useContext(RoomListContext);
  const [chatsArr, setChatsArr] = useState<IChat[]>([]);

  const [sendMessage] = useMutation<
    Pick<IMutation, "sendMessage">,
    IMutationSendMessageArgs
  >(SEND_MESAGE);
  const { data } = useQuery<Pick<IQuery, "fetchChats">, IQueryFetchChatsArgs>(
    FETCH_CHATS,
    {
      variables: {
        chatRoomId: chatRoomId || "",
      },
    }
  );

  useEffect(() => {
    if (!data) return;

    const temp = data.fetchChats.map(
      (_, idx, array) => array[array.length - 1 - idx]
    );

    setChatsArr([...temp]);
  }, [data]);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight);
  }, [chatsArr]);

  useEffect(() => {
    if (!roomList) return;
    roomList.fetchChatRooms.forEach((el) => {
      if (el.id === chatRoomId) setRoomName(el.name);
    });
    while (ChattingBoxRef.current?.hasChildNodes()) {
      if (!ChattingBoxRef.current?.firstChild) return;
      ChattingBoxRef.current?.removeChild(ChattingBoxRef.current?.firstChild);
    }
  }, [roomList, chatRoomId]);

  let socket: Socket;

  useEffect(() => {
    if (!chatRoomId) return;

    socket = io(url);

    // message;
    socket.on("message" + chatRoomId, (data: IMessageData) => {
      makeLi(data);
      scrollRef.current?.scrollTo(0, scrollRef.current?.scrollHeight);
    });

    /* 누군가 입장 */
    socket.on("join" + chatRoomId, (join: IJoinMsg) => {
      const li = document.createElement("li");
      li.className = "join";

      const dom = `<span class="alert">${join.name}님이 참여하셨습니다.</span>`;

      li.innerHTML = dom;
      ChattingBoxRef.current?.appendChild(li);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatRoomId]);

  const makeLi = (data: IMessageData) => {
    if (!chatsArr) return;
    let dom;
    const li = document.createElement("li");

    if (
      chatsArr.length &&
      CheckPrevDate(
        chatsArr[chatsArr.length - 1].createdAt,
        data.chat.createdAt
      )
    ) {
      li.className = "join";
      dom = `<li className="join">
      <span class="alert">
        ${SetDateFunc(data.chat.createdAt)}
      </span>
    </li>`;

      li.innerHTML = dom;
      ChattingBoxRef.current?.appendChild(li);
    }
    if (data.chat.user.name === userInfo?.fetchUser.name) {
      li.className = "sent";
      dom = `<span class="message">${data.chat.content}</span>
      <span class="time">${getTime(data.chat.createdAt)}</span>`;
    } else {
      li.className = "received";
      if (data.previousChat.user.name) {
        if (data.chat.user.name === data.previousChat.user.name) {
          dom = `<span class="continue-message">${data.chat.content}</span>
          <span class="time">${getTime(data.chat.createdAt)}</span>`;
        } else {
          dom = `<span class="profile">
          <img
            class="image"
            src="https://placeimg.com/50/50/any"
            alt="any"
          />
          <span class="user">
            <span class="name">${data.chat.user.name}</span>
            <span class="message-box">
              <span class="message">
                ${data.chat.content}
              </span>
              <span class="time">${getTime(data.chat.createdAt)}</span>
            </span>
          </span>
        </span>`;
        }
      } else {
        dom = `<span class="profile">
          <img
            class="image"
            src="https://placeimg.com/50/50/any"
            alt="any"
          />
          <span class="user">
            <span class="name">${data.chat.user.name}</span>
            <span class="message-box">
              <span class="message">
                ${data.chat.content}
              </span>
              <span class="time">${getTime(data.chat.createdAt)}</span>
            </span>
          </span>
        </span>`;
      }
    }

    li.innerHTML = dom;
    ChattingBoxRef.current?.appendChild(li);
  };

  const onChangeChatInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const onClickSendMessage = async () => {
    if (!message) return;
    await sendMessage({
      variables: {
        message,
        chatRoomId: chatRoomId || "",
      },
    });
    setMessage("");
  };

  const onkeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter")
      if (!e.shiftKey) {
        if (!message) return;
        e.preventDefault();
        onClickSendMessage();
      }
  };

  const onClickSetPosition = () => {
    if (position === -262.5) {
      wrapperRef.current?.scrollTo(0, 0);
      setPosition(0);
      setIsToggle(true);
    } else {
      wrapperRef.current?.scrollTo(0, wrapperRef.current.scrollHeight);
      setPosition(-262.5);
      setIsToggle(false);
    }
  };

  const value = {
    isToggle,
    position,
    data,
    message,
    chatsArr,
    onClickSetPosition,
    onChangeChatInput,
    onClickSendMessage,
  };
  return (
    <ChattingDetailContext.Provider value={value}>
      <ChattingDetailUI
        ChattingBoxRef={ChattingBoxRef}
        scrollRef={scrollRef}
        wrapperRef={wrapperRef}
        roomName={roomName}
        onkeyPressEnter={onkeyPressEnter}
      />
    </ChattingDetailContext.Provider>
  );
}
