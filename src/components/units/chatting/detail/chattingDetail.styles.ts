import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";
import { ISideIsToggle } from "./chattingDetail.types";

export const Wrapper = styled.div`
  width: 90%;
  height: 76vh;
  padding: 0px 10px 0px 10px;
  overflow: hidden;

  position: relative;
  z-index: 1;
`;

export const ChattingBox = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
`;

export const Opacity = styled.div`
  display: ${(props: ISideIsToggle) => (props.isToggle ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 262.5px);
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.6);

  :hover {
    cursor: pointer;
  }
`;

export const Alert = styled.div`
  padding: 4px 0px;
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
  align-items: center;
  padding: 10px 5px 10px 20px;

  @media ${breakPoints.tablet} {
    padding: 10px 5px 10px 0px;
  }

  @media ${breakPoints.web} {
    padding: 10px 5px 10px 0px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftArrowImg = styled.img`
  width: 12px;
  height: 16px;
  margin-right: 20px;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.web} {
    display: none;
  }
`;

export const Tag = styled.div`
  display: inline;
  padding: 2px 6px;
  margin-right: 5px;
  background-color: #68a4ff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.4rem;
  line-height: 18px;
  color: #fff;
`;

export const ProjectName = styled.span`
  margin: 0px 10px 0px 5px;
  font-weight: 400;
  font-size: 1.143rem;
`;

export const Count = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  color: #a4a4a4;
`;

export const DotImgBox = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

export const DotToggleImg = styled.img`
  width: 2px;
  height: 13px;
`;

export const ChattingContainer = styled.div`
  width: 100%;
  height: 60vh;

  overflow-y: auto;

  /* ::-webkit-scrollbar {
    display: none;
  } */
  scroll-behavior: smooth;
`;

export const ChattingList = styled.ul`
  width: 100%;

  li {
    width: 90%;
    padding: 0.3rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 0.5rem;
  }

  .profile {
    display: flex;

    align-items: center;
    justify-content: center;
  }

  .profile .image {
    border-radius: 50%;
    object-fit: cover;
    width: 52px;
    height: 52px;
  }

  .user {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
  }

  .profile .name {
    padding-top: 20px;
    margin-bottom: 3px;

    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
  }

  .message-box {
    display: flex;
    align-items: flex-end;
  }

  .received .user .message {
    padding: 12px 20px;
    border-radius: 0px 24px 24px 24px;
    background-color: #999;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }

  .received .continue-message {
    margin-left: 62px;
    padding: 12px 20px;
    border-radius: 0px 24px 24px 24px;
    background-color: #999;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }

  .received .time {
    margin-left: 10px;

    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: #999999;
  }

  .sent {
    flex-direction: row-reverse;
    float: right;
  }

  .sent .message {
    margin-right: 10px;
    padding: 12px 20px;
    border-radius: 24px 0px 24px 24px;
    background-color: #3894ff;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #fff;
  }

  .sent .time {
    margin-right: 10px;

    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: #999999;
  }

  .join {
    justify-content: center;
    padding: 20px 0px;
  }

  .join .alert {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #999;
  }
`;

export const FunctionWrapper = styled.div`
  width: 100%;
  padding: 0px 0px 30px 0px;
  z-index: 2;
`;

export const FunctionBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const InputBox = styled.div`
  width: 85%;
  display: flex;
  padding: 4px 10px;
  border: 1px solid #999999;
  border-radius: 22px;
`;

export const UploadImgBtn = styled.div`
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #999999;

  img {
    width: 26px;
    height: 21px;
  }
`;

export const MsgInput = styled.div`
  width: calc(100% - 40px);
  padding: 0px 10px;
`;

export const SendButton = styled.div`
  width: 38px;
  height: 42px;
  padding: 10px 13px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #3894ff;

  img {
    width: 22px;
    height: 23px;
  }
`;
