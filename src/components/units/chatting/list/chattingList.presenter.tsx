import { useContext } from "react";
import { ChattingContext } from "../chatting.container";
import * as S from "./chattingList.styles";
import { v4 as uuidv4 } from "uuid";
import { RoomListContext } from "../../../../../pages/chatting";
import { getTime } from "../../../../commons/library/getTime";

const STORAGE = "https://storage.googleapis.com/";

export default function ChattingListUI() {
  const { onClickChangePosition, onClickSetRoomId } =
    useContext(ChattingContext);
  const { data } = useContext(RoomListContext);
  return (
    <S.Wrapper onClick={onClickChangePosition}>
      <S.TitleBox>
        <S.LeftArrowImg src="/img/commons/leftArrow1.svg" />
        <S.Title>메세지</S.Title>
        <S.DotToggleImg src="/img/commons/dotToggle.svg" />
      </S.TitleBox>
      {data?.fetchChatRooms.map((data) => (
        <S.ChattingBox
          key={uuidv4()}
          onClick={onClickSetRoomId && onClickSetRoomId(data.id)}
        >
          <S.LeftBox>
            <S.ProfileBox>
              <img
                src={
                  data.project.imgUrl
                    ? STORAGE + data.project.imgUrl
                    : "/img/commons/noimage.jpg"
                }
              />
            </S.ProfileBox>
            <S.MiddleBox>
              <S.Name>{data.name}</S.Name>
              <S.Contents>
                {data.chat.length ? data.chat[0].content : ""}
              </S.Contents>
            </S.MiddleBox>
          </S.LeftBox>
          <S.RightBox>
            <span>
              {data.chat.length
                ? getTime(data.chat[data.chat.length - 1].createdAt)
                : ""}
            </span>
          </S.RightBox>
        </S.ChattingBox>
      ))}
    </S.Wrapper>
  );
}
