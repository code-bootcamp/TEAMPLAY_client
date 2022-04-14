import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/breakpoint";

export const MultiSlideBox = styled.div`
  & * {
    font-family: normal;
    line-height: 1;
  }
  overflow-x: hidden;
  margin: 0 -20px;
  transform: translateX(20px);
  @media ${breakPoints.tablet} {
    transform: translateX(0);
    margin: 0;
    width: 100%;
  }
  @media ${breakPoints.web} {
    transform: translateX(0);
    margin: 0;
    width: 100%;
  }
`;

export const MultiSlideItem = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

export const MultiSlideWrapper = styled.div`
  padding-right: 10px;
`;

export const MultiTagBox = styled.div`
  display: flex;
  padding-bottom: 3px;
`;

export const MultiSlideTop = styled.div`
  position: relative;
  & > img {
    width: 100%;
  }
  & > div {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 13px 10px;
  }
  & > div > div {
    padding: 2px 8px;
    background-color: #595959;
    color: #fff;
    border-radius: 12px;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
`;

export const MultiSlideTop2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  & > h3 {
    font-size: 16px;
    padding-bottom: 10px;
  }
  & > h4 {
    font-size: 10px;
    padding-bottom: 10px;
    color: #999999;
  }
`;
export const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  background-color: #eeecec;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  & > img {
    width: 80%;
  }
`;

export const Like = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const MultiSlideBottom = styled.div`
  & h3 {
    padding-top: 12px;
    font-size: 15px;
    color: #0d223a;
    padding-bottom: 6px;
  }
  padding: 0 10px 14px;
`;

export const MultiSlideBottom2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 40px;
`;

export const MemberCount = styled.div`
  display: flex;
  align-items: center;
  color: #9f9f9f;
  & > span {
    font-size: 8px;
  }
`;
