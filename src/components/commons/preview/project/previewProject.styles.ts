import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

const upmotion = keyframes`
  from{
    bottom:-100%
  }
  to{
    bottom: 0;
  }
`;

const leftmotion = keyframes`
  from{
    left:-100%;
  }
  to{
    left:0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: fixed;
  bottom: -100%;
  background-color: #fff;
  overflow: auto;
  z-index: 10;
  animation: ${upmotion} 0.4s ease-in-out 1 forwards;
  ::-webkit-scrollbar {
    display: none;
  }
  @media ${breakPoints.web} {
    max-width: 30vw;
    bottom: 0;
    left: -100%;
    animation: ${leftmotion} 0.5s ease-in-out 1 forwards;
    border-right: 1px solid #ccc;
  }
`;

export const Modal = styled.div`
  width: 100%;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 30vw;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  ::after {
    display: block;
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
  }
`;

export const OffButton = styled.button`
  width: 30px;
  height: 30px;
  position: relative;
  margin: 20px;
  z-index: 200;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 24px 15px;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  @media ${breakPoints.tablet} {
    padding: 18px 200px;
  }
`;

export const Dday = styled.div`
  display: inline;
  padding: 1px 4px;
  background-color: #a3a3a3;

  span {
    font-size: 12px;
    color: #ffffff;
  }
`;
export const Func = styled.div`
  float: right;
`;

export const ProjectListInfo = styled.div`
  padding: 15px;
  & > li {
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    align-items: center;
    font-size: 14px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  @media ${breakPoints.tablet} {
    padding: 18px 200px;
  }
`;
export const Title = styled.div`
  padding: 15px 0px 5px 0px;

  span {
    font-weight: 400;
    font-size: 24px;
    color: #0d223a;
  }
`;

export const Remarks = styled.div`
  padding: 12px 0px;

  span {
    font-weight: 400;
    font-size: 13px;
    color: #999999;
  }
`;

export const TagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProjectInfoBox = styled.ul`
  padding: 18px 15px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  @media ${breakPoints.tablet} {
    padding: 18px 200px;
  }
`;

export const InfoBox = styled.li`
  display: flex;
  padding: 1px 0px;
`;
export const InfoName = styled.div`
  width: 30%;
  padding: 6px 0px;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  color: #0d223a;
`;
export const InfoContents = styled.div`
  width: 70%;
  padding: 6px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #999999;
`;

export const TeamInfoBox = styled.div`
  padding: 12px 0px 24px 15px;
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  @media ${breakPoints.tablet} {
    padding: 18px 200px;
  }
`;

export const WantedBox = styled.div``;

export const ProfileBox = styled.div`
  padding: 16px;
  display: flex;
  margin-top: 15px;
  margin-right: 10px;
  background: #f3f9ff;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    & > img {
      width: 30px;
      margin-right: 10px;
    }
    & > span {
      color: #3894ff;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
`;

export const UserInfo = styled.div`
  width: 80%;
`;

export const UserImg = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    width: 100%;
  }
`;

export const UserPosition = styled.div`
  margin-top: 15px;
  padding: 12px 0px;

  font-style: normal;
  font-weight: 900;
  font-size: 16px;

  color: #0d223a;
`;

export const UserCount = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #999999;
`;

export const ButtonBox = styled.div`
  display: flex;

  padding: 15px 15px;
  border-bottom: 1px solid #dddddd;
`;

export const DetailBtn = styled.div`
  padding: 0px 50px;

  font-weight: 900;
  font-size: 16px;
  line-height: 18px;

  color: #0d223a;
`;
export const QnABtn = styled.div`
  padding: 0px 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #0d223a;
`;

export const SubmitBox = styled.div`
  padding: 0px 15px;
  max-width: 375px;
  margin: 0 auto;
`;

export const DescriptionBox = styled.div`
  padding: 20px 15px;
  & > h3 {
    width: 30%;
    padding: 6px 0px;
    padding-bottom: 20px;
    font-weight: 900;
    font-size: 16px;
  }
  @media ${breakPoints.tablet} {
    padding: 18px 200px;
  }
`;
