import CircleTag from "../../../tags/commons/circleTag";
import * as S from "./profileUserInfo.styles";

export default function ProfileUserInfo() {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.ImgBox>
          <img src="/img/임시사진.png" />
        </S.ImgBox>
        <S.InfoBox>
          <S.Name>
            <span>제이든</span>
          </S.Name>
          <S.Position>
            <span>iOS 개발자 </span>
            <img src="/img/location.svg" />
            <span>경기도 하남</span>
          </S.Position>
          <S.Tag>
            <CircleTag name="태그" size={15} color="#CCC" />
            <CircleTag name="태그" size={15} color="#CCC" />
            <CircleTag name="태그" size={15} color="#CCC" />
          </S.Tag>
        </S.InfoBox>
      </S.WrapperHeader>
    </S.Wrapper>
  );
}
