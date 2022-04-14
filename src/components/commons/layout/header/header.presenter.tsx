import { useContext } from "react";
import useFetchUser from "../../hooks/useFetchUser";
import { HeaderContext } from "./header.container";
import * as S from "./header.styles";
import { IPropsHeaderUI } from "./header.types";
import HeaderToggle from "./toggle/headerToggle";

export default function HeaderUI(props: IPropsHeaderUI) {
  const { onCliclsetPosition, onClickMovetoPage, onClickHeaderRouting } =
    useContext(HeaderContext);
  const { data } = useFetchUser();
  return (
    <S.HeaderStyle>
      <S.HeaderWrapper>
        <S.HeaderTop>
          <h1>
            <S.Logo>
              <img src="/img/commons/logo.svg" alt="logo" />
            </S.Logo>
          </h1>
          {!props.isHiddenNav && (
            <S.HeaderNav>
              <ul>
                <li
                  onClick={onClickHeaderRouting}
                  id="/main"
                  className="nav__list"
                >
                  홈
                </li>
                <li
                  onClick={onClickHeaderRouting}
                  id="/project/list"
                  className="nav__list"
                >
                  프로젝트
                </li>
                <li
                  onClick={onClickHeaderRouting}
                  id="/recruit"
                  className="nav__list"
                >
                  팀원
                </li>
                <li
                  onClick={onClickHeaderRouting}
                  id="/community/list"
                  className="nav__list"
                >
                  커뮤니티
                </li>
              </ul>
            </S.HeaderNav>
          )}
        </S.HeaderTop>
        <S.Setting>
          {data ? (
            <S.UserArvata>
              <img src="/img/commons/defaultProfile.jpg" />
            </S.UserArvata>
          ) : (
            <div className="login-signup">
              <span onClick={onClickMovetoPage && onClickMovetoPage("login")}>
                로그인
              </span>{" "}
              <span> / </span>{" "}
              <span onClick={onClickMovetoPage && onClickMovetoPage("signup")}>
                회원가입
              </span>
            </div>
          )}
          <button className="alam">
            <img src="/img/alam.svg" />
          </button>
          <div className="toggle">
            <HeaderToggle />
            <img src="/img/btn.svg" onClick={onCliclsetPosition} />
          </div>
        </S.Setting>
      </S.HeaderWrapper>
    </S.HeaderStyle>
  );
}
