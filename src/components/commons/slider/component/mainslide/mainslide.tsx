import Slider from "react-slick";
import * as S from "./mainslide.style";

export default function MainSlide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.MainSliderStyle>
      <Slider {...settings}>
        <S.MainSlideBox>
          <S.MainSlideContents className="slide1">
            <div>
              <span>금융</span>
              <h2>
                NFT 블록체인 마켓
                <br /> 런칭 프로젝트
              </h2>
              <h3>직장인들의 사이드 프로젝트 성공기</h3>
            </div>
          </S.MainSlideContents>
        </S.MainSlideBox>
        <S.MainSlideBox>
          <S.MainSlideContents className="slide2">
            <div>
              <span>NEW</span>
              <h2>
                경험이 없어도 괜찮아요 지금 바로
                <br />
                <strong className="team_play">TEAMPLAY</strong>에서!
              </h2>
              <h3>학생과 주니어들을 위한 사이드 프로젝트</h3>
            </div>
          </S.MainSlideContents>
        </S.MainSlideBox>
        <S.MainSlideBox>
          <S.MainSlideContents className="slide3">
            <div>
              <span>NEW</span>
              <h2>
                경험이 없어도 괜찮아요 지금 바로
                <br />
                <strong className="team_play">TEAMPLAY</strong>에서!
              </h2>
              <h3>학생과 주니어들을 위한 사이드 프로젝트</h3>
            </div>
          </S.MainSlideContents>
        </S.MainSlideBox>
      </Slider>
    </S.MainSliderStyle>
  );
}
