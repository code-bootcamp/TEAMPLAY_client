import { useContext } from "react";
import { TextArea } from "../../../commons/textarea/textarea";
import { ChattingDetailContext } from "./chattingDetail.container";
import * as S from "./chattingDetail.styles";
import Sidebar from "./sidebar/sidebar.container";
import { ChattingContext } from "../chatting.container";
import { IPropsChattingDetailUI } from "./chattingDetail.types";
import { v4 as uuidv4 } from "uuid";
import ChatHistory from "./chatHistory/chatHistory";

export default function ChattingDetailUI(props: IPropsChattingDetailUI) {
  const {
    isToggle,
    message,
    chatsArr,
    onClickSetPosition,
    onChangeChatInput,
    onClickSendMessage,
  } = useContext(ChattingDetailContext);
  const { roomMembers, onClickChangePosition } = useContext(ChattingContext);

  return (
    <S.Wrapper ref={props.wrapperRef}>
      <S.Opacity isToggle={isToggle} onClick={onClickSetPosition} />
      <Sidebar />
      <S.ChattingBox>
        <S.TitleBox>
          <S.RightBox>
            <S.LeftArrowImg
              src="/img/commons/leftArrow1.svg"
              onClick={onClickChangePosition}
            />
            <S.Tag>Project</S.Tag>
            <S.ProjectName>{props.roomName}</S.ProjectName>
            <S.Count>{roomMembers?.fetchChatRoomMembers.length}</S.Count>
          </S.RightBox>
          <S.DotImgBox onClick={onClickSetPosition}>
            <S.DotToggleImg src="/img/commons/dotToggle.svg" />
          </S.DotImgBox>
        </S.TitleBox>
        <S.ChattingContainer ref={props.scrollRef}>
          <S.ChattingList className="chatting-list">
            {chatsArr?.map((el, idx) => (
              <ChatHistory
                el={el}
                idx={idx}
                chatsArr={chatsArr}
                key={uuidv4()}
              />
            ))}
          </S.ChattingList>
          <S.ChattingList
            className="chatting-list"
            ref={props.ChattingBoxRef}
          ></S.ChattingList>
        </S.ChattingContainer>
        <S.FunctionWrapper>
          <S.FunctionBox>
            <S.InputBox>
              <S.UploadImgBtn>
                <img src="/img/chatting/camera.svg" />
              </S.UploadImgBtn>
              <S.MsgInput>
                <TextArea
                  wrapperRef={props.wrapperRef}
                  value={message}
                  onChange={onChangeChatInput}
                  onkeydown={props.onkeyPressEnter}
                />
              </S.MsgInput>
            </S.InputBox>
            <S.SendButton onClick={onClickSendMessage}>
              <img src="/img/chatting/send.svg" />
            </S.SendButton>
          </S.FunctionBox>
        </S.FunctionWrapper>
      </S.ChattingBox>
    </S.Wrapper>
  );
}
