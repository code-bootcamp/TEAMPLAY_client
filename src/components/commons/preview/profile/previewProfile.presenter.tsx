 import * as S from "./previewProfile.styles";
import ProfileUserInfo from "./userInfo/profileUserInfo";

export default function PreviewProfileUI() {
  return (
    <S.Wrapper>
      <S.UserInfoWrapper>
        <ProfileUserInfo />
      </S.UserInfoWrapper>
    </S.Wrapper>
  );
}
