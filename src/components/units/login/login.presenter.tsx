import SubmitBtn from "../../commons/button/Submit";
import Xmark from "../../commons/button/Xmark";
import * as S from "./login.styles";
import { IPropsLoginUI } from "./login.types";
import Link from "next/link";
import useMoveToPage from "../../commons/hooks/useMoveToPage";

export default function LoginUI(props: IPropsLoginUI) {
  const { moveToMain } = useMoveToPage();
  return (
    <S.Wrapper>
      <S.TabletBox>
        <S.WebImgBox>
          <img src="/img/login/login.png" />
        </S.WebImgBox>
        <S.LoginBox>
          <S.XmarkBox onClick={moveToMain}>
            <Xmark width={16} height={16} />
          </S.XmarkBox>
          <S.LogoBox>
            <img src="/img/login/logo.svg" />
          </S.LogoBox>
          <S.Subscript>
            <span>학생과 주니어들을 위한 사이드 프로젝트</span>
            <span>지금 팀플레이에서 시작하세요</span>
          </S.Subscript>
          <S.EmailInput
            type="text"
            placeholder="이메일"
            onKeyDown={props.onPressEnter}
            onChange={props.onChangeLoginInput("email")}
          />
          <S.PassBox>
            <input
              type={props.type}
              placeholder="비밀번호"
              onKeyDown={props.onPressEnter}
              onChange={props.onChangeLoginInput("password")}
            />
            <S.EyeImg>
              {props.isView ? (
                <img
                  src="/img/login/eyeSlash.svg"
                  onClick={props.onClickSetIsView}
                />
              ) : (
                <img
                  src="/img/login/eye.svg"
                  onClick={props.onClickSetIsView}
                />
              )}
            </S.EyeImg>
          </S.PassBox>
          <SubmitBtn
            isActive={false}
            onClick={props.onClickSubmitLogin}
            name="로그인"
            fontSize={1.143}
            backgroundcolor="#3894FF"
          />
          <S.TextBox>또는</S.TextBox>
          <S.SocialText>SNS계정으로 로그인하기</S.SocialText>
          <S.SocialImgBox>
            <div>
              <Link href="https://backend.ljh305.shop/login/kakao">
                <img src="/img/login/kakao.png" />
              </Link>
              <Link href="https://backend.ljh305.shop/login/naver">
                <img src="/img/login/naver.png" />
              </Link>
              <Link href="https://backend.ljh305.shop/login/google">
                <img src="/img/login/google.png" />
              </Link>
            </div>
          </S.SocialImgBox>
          <S.Cancel>계정이 없으신가요? 간편하게 가입하기</S.Cancel>
        </S.LoginBox>
      </S.TabletBox>
    </S.Wrapper>
  );
}
