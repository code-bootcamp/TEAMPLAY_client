import { useContext } from "react";
import useFetchUser from "../../../hooks/useFetchUser";
import { HeaderContext } from "../header.container";
import * as S from "./headerToggle.styles";

export default function HeaderToggle() {
  const { data } = useFetchUser();
  const {
    position,
    isView,
    onCliclsetPosition,
    onClickLogout,
    onClickMovetoPage,
  } = useContext(HeaderContext);

  return (
    <S.Wrapper position={position} isView={isView}>
      <S.XmarkBox onClick={onCliclsetPosition}>
        <img src="/img/preview/Xmark.svg" />
      </S.XmarkBox>
      <S.ProfileBox>
        {data ? (
          <S.UserInfoBox>
            <S.ProfileImg>
              <img src="/img/commons/defaultProfile.jpg" />
            </S.ProfileImg>
            <S.Info>
              <S.Name>{data.fetchUser.name}</S.Name>
              <S.Position>{data.fetchUser.position?.name}</S.Position>
              <S.Point>{`${data.fetchUser.point} 포인트`}</S.Point>
            </S.Info>
          </S.UserInfoBox>
        ) : (
          <S.LoginBox>
            <span onClick={onClickMovetoPage && onClickMovetoPage("login")}>
              로그인
            </span>{" "}
            <span> / </span>
            <span onClick={onClickMovetoPage && onClickMovetoPage("signup")}>
              회원가입
            </span>
          </S.LoginBox>
        )}
      </S.ProfileBox>
      <S.Option onClick={onClickMovetoPage && onClickMovetoPage("payment")}>포인트 충전</S.Option>
      <S.Option onClick={onClickMovetoPage && onClickMovetoPage("chatting")}>
        메세지
      </S.Option>
      <S.Option onClick={onClickMovetoPage && onClickMovetoPage("profile")}>
        나의 프로필
      </S.Option>
      <S.Option onClick={onClickMovetoPage && onClickMovetoPage("myProject")}>
        나의 프로젝트
      </S.Option>
      {data ? <S.Option onClick={onClickLogout}>로그아웃</S.Option> : <></>}
    </S.Wrapper>
  );
}
