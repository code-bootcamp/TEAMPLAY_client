import * as S from "./footer.styles";

export default function Footer() {
  return (
    <S.Wrapper>
      <div>
        <S.TopBox>
          <img src="/img/footer/FooterLogo.png" />
          <span>서비스 이용약관</span>
          <span>개인정보처리방침</span>
          <span>공지사항</span>
          <span>고객센터</span>
        </S.TopBox>
        <S.BottomBox>
          <div>
            (주)팀플레이 | 서울시 구로구 디지털로 300, 패스트파이브 구로점 13층
          </div>
          <div>2022 © TEAMPLAY.All rights reserved.</div>
        </S.BottomBox>
      </div>
    </S.Wrapper>
  );
}
