import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/breakpoint";

export const MainSlideBox = styled.div`
  position: relative;
  height: 220px;
  @media ${breakPoints.tablet} {
    height: 300px;
  }
  @media ${breakPoints.web} {
    height: 500px;
  }
`;

export const MainSlideContents = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2 {
    font-size: 20px;
    padding-bottom: 20px;
    line-height: 1.2;
    color: #fff;
    font-weight: 100;
    @media ${breakPoints.web} {
      font-size: 3.5rem;
    }
    & .team_play {
      color: #3894ff;
      font-size: 20px;
      @media ${breakPoints.web} {
        font-size: 3.5rem;
      }
    }
  }
  & h3 {
    color: #fff;
    font-family: normal;
    font-weight: 100;
    @media ${breakPoints.web} {
      font-size: 24px;
    }
    @media ${breakPoints.web} {
      font-size: 24px;
    }
  }
  & span {
    color: #fff;
    display: block;
    font-size: 8px;
    padding: 3px 15px;
    border: 1px solid #c4c4c4;
    display: inline-block;
    border-radius: 4px;
    margin-bottom: 14px;
    @media ${breakPoints.web} {
      padding: 8px 10px;
      font-size: 1.5rem;
    }
  }
  & img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  & > div {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 1;
  }
  &.slide1 {
    background: url("img/slide01.png") no-repeat center/cover;
  }
  &.slide2 {
    background: url("img/slide02.png") no-repeat center/cover;
  }
  &.slide3 {
    background: url("img/slide03.png") no-repeat center/cover;
  }
`;

export const MainSliderStyle = styled.div`
  width: 100%;
  position: relative;
  & .slick-dots {
    position: absolute;
    bottom: 9px;
    @media ${breakPoints.web} {
      bottom: 50px;
    }
  }
  & .slick-dots li button {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #242121;
    &::before {
      display: none;
    }
  }
  & .slick-dots li.slick-active button {
    background-color: #fff;
  }
  margin-bottom: 20px;
`;
