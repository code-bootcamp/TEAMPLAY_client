import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./sidebar.styles";
import { ProfileEditContext } from "../profileEdit.container";
import Blank from "../../../../commons/blank/blank";
import ClickTag from "../../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../../commons/button/Submit";

export default function ProfileEditPosition() {
  const {
    area,
    position,
    onClickPushTag,
    onClickEditPosition,
    onClickChangeTagButton,
  } = useContext(ProfileEditContext);
  const list = [
    "기획자",
    "UI디자이너",
    "UX디자이너",
    "UXUI디자이너",
    "프론트엔드",
    "백엔드",
    "풀스택",
  ];

  return (
    <S.Wrapper area={area} className="PositionBlank">
      <S.MainBox>
        <S.Header>
          <S.RefreshBox>
            <img src="/img/profile/refreshIcon.svg" />
            <span>초기화</span>
          </S.RefreshBox>
          <S.XMark src="/img/preview/Xmark.svg" onClick={onClickEditPosition} />
        </S.Header>
        <div className="NoneBlank">
          <Blank height={24} width={0} />
        </div>
        <S.Title>
          <span>나의 포지션</span>
        </S.Title>
        <div className="NoneBlank">
          <Blank height={36} width={0} />
        </div>
        <S.TagArea>
          {list.map((name) => (
            <div key={uuidv4()}>
              <ClickTag
                name={name}
                marginBottom={16}
                isClick={position && position === name && true}
                onClick={onClickPushTag}
              />
            </div>
          ))}
        </S.TagArea>
        {/* <S.TagArea>
                    {list?.length ? (
                        <>
                            {list.map((name)=>{
                                return (
                                    <S.NormalTag
                                        key={uuidv4()}
                                        onClick={onClickDeletePositionTag && onClickDeletePositionTag(name)}
                                    >
                                        <span>{name}</span>
                                        <div>x</div>
                                    </S.NormalTag>
                                )
                            })}
                        </>
                    ) : (
                        <></>
                    )}
                </S.TagArea> */}
        <S.BtnBox>
          <SubmitBtn
            isActive={false}
            name="확인"
            fontSize={1.143}
            backgroundcolor="#3894FF"
            onClick={onClickChangeTagButton}
          />
        </S.BtnBox>
      </S.MainBox>
    </S.Wrapper>
  );
}
