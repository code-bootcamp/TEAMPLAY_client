import * as S from "./sidebar.styles";
import { v4 as uuidv4 } from "uuid";
import { IPropsSidebarUI } from "../chattingDetail.types";
import { ChattingDetailContext } from "../chattingDetail.container";
import { useContext } from "react";
import Blank from "../../../../commons/blank/blank";
import { ChattingContext } from "../../chatting.container";

const STORAGE = "https://storage.googleapis.com/";

export default function SidebarUI(props: IPropsSidebarUI) {
  const { position, onClickSetPosition } = useContext(ChattingDetailContext);
  const { roomMembers } = useContext(ChattingContext);

  return (
    <S.Wrapper position={position}>
      <S.TitleBox>
        <S.RightBox>
          <S.ProjectName>프로젝트 단톡방</S.ProjectName>
          <S.Count>{roomMembers?.fetchChatRoomMembers.length}</S.Count>
        </S.RightBox>
        <S.Xmark src="/img/preview/Xmark.svg" onClick={onClickSetPosition} />
      </S.TitleBox>
      <S.SubTitleBox>
        <S.SubTitle>{props.isChoose ? "선택 팀원" : "대화 상대"}</S.SubTitle>
        <S.Tag onClick={props.onClickProjectSetting}>
          {props.isChoose ? "이전" : "프로젝트 시작"}
        </S.Tag>
      </S.SubTitleBox>
      {props.isChoose ? (
        <>
          {props.checkList.map((data) => (
            <S.UserProfileBox key={uuidv4()}>
              <S.ProfileImg>
                <S.Profile>
                  <img
                    src={
                      data.user.imgUrl
                        ? STORAGE + data.user.imgUrl
                        : "/img/commons/noimage.jpg"
                    }
                  />
                </S.Profile>
              </S.ProfileImg>
              <S.NameBox>
                <S.Name>{data.user.name}</S.Name>
              </S.NameBox>
            </S.UserProfileBox>
          ))}
          <Blank width={0} height={20} />
          <S.SubTitle>금액 선택</S.SubTitle>
          <Blank width={0} height={20} />
          <S.SelectPrice
            onChange={props.onChangeSelectPrice}
            defaultValue={10000}
          >
            <option value={10000}>10000 point</option>
            <option value={20000}>20000 point</option>
            <option value={30000}>30000 point</option>
            <option value={40000}>40000 point</option>
            <option value={50000}>50000 point</option>
            <option value={"직접입력"}>직접 입력</option>
          </S.SelectPrice>
          {props.isSelf && (
            <>
              <S.InputBox>
                <input
                  type="number"
                  placeholder="직접입력"
                  onChange={props.onChangeInputPrice}
                />
                <span>원</span>
              </S.InputBox>
            </>
          )}
          <S.SubmitBtn isSubmit={props.isSubmit}>
            <button
              disabled={!props.isSubmit}
              onClick={props.onClickStartProject}
            >
              시작하기
            </button>
          </S.SubmitBtn>
        </>
      ) : (
        <>
          {roomMembers?.fetchChatRoomMembers.map((data, idx) => (
            <S.UserProfileBox key={uuidv4()}>
              <S.ProfileImg>
                <S.Profile>
                  <img
                    src={
                      data.user.imgUrl
                        ? STORAGE + data.user.imgUrl
                        : "/img/commons/noimage.jpg"
                    }
                  />
                </S.Profile>
              </S.ProfileImg>
              <S.NameBox>
                <S.Name>{data.user.name}</S.Name>
                <S.SelectCircle>
                  <input
                    type="checkbox"
                    checked={props.isCheck.includes(data.user.name)}
                    id={String(idx)}
                    onChange={props.onChangeCheckedUser(data)}
                  />
                  <label htmlFor={String(idx)} />
                </S.SelectCircle>
              </S.NameBox>
            </S.UserProfileBox>
          ))}
        </>
      )}
    </S.Wrapper>
  );
}
