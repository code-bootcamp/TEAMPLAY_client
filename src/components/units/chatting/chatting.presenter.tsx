import { useContext } from "react";
import { ChattingContext } from "./chatting.container";
import * as S from "./chatting.styles";
import ChattingDetail from "./detail/chattingDetail.container";
import ChattingList from "./list/chattingList.container";

export default function ChattingUI() {
  const { left, chatRoomId } = useContext(ChattingContext);

  return (
    <S.Wrapper left={left}>
      <S.ListBox>
        <ChattingList />
      </S.ListBox>
      <S.DetailBox>{chatRoomId ? <ChattingDetail /> : <></>}</S.DetailBox>
    </S.Wrapper>
  );
}
