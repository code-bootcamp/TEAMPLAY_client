import styled from "@emotion/styled";
import {
  IPropsSidebarSubmitBtn,
  ISidebarWrapper,
} from "../chattingDetail.types";

export const Wrapper = styled.div`
  padding: 15px 10px;
  width: 262.5px;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  right: ${(props: ISidebarWrapper) => `${props.position}px`};
  transition: all 0.25s;
  z-index: 3;
`;

export const MainBox = styled.div`
  padding: 15px 10px;
  width: 262.5px;
  height: 100%;
  background-color: #fff;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 0px 20px 0px 0px;
  margin-bottom: 30px;
`;

export const RightBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectName = styled.span`
  margin-right: 10px;
  font-weight: 400;
  font-size: 16px;
`;

export const Tag = styled.div`
  display: inline;
  padding: 2px 6px;
  margin-right: 5px;
  background-color: #c4c4c4;
  border-radius: 20px;
  font-weight: 500;
  font-size: 5.6px;
  line-height: 18px;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #68a4ff;
  }
`;

export const Count = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #a4a4a4;
`;

export const Xmark = styled.img`
  width: 14px;
  position: absolute;
  top: 1px;
  right: 3px;

  :hover {
    cursor: pointer;
  }
`;

export const SubTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

export const UserProfileBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
export const ProfileImg = styled.div`
  width: 20%;
  display: flex;
  align-content: flex-start;
`;
export const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
`;

export const NameBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.div`
  padding: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

export const SelectCircle = styled.div`
  margin-right: 5px;
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 2px solid #707070;
    border-radius: 50%;
    position: relative;

    :hover {
      cursor: pointer;
    }
  }

  input:checked + label::after {
    content: "✔";
    font-size: 18px;
    width: 15px;
    height: 15px;
    text-align: center;
    position: absolute;
    left: 1px;
    bottom: 1px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const SelectPrice = styled.select`
  width: 50%;
`;

export const Function = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  width: 67%;
  margin-top: 10px;
  padding: 0 5px;

  input {
    width: 60%;
    padding: 5px 0;
    border-bottom: 1px solid #c4c4c4;

    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;

    ::placeholder {
      font-weight: 500;
      font-size: 1rem;
      line-height: 18px;
      color: #999999;
    }
  }

  span {
    padding: 0 10px;
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    color: #999999;
  }
`;

export const SubmitBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  button {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: ${(props: IPropsSidebarSubmitBtn) =>
      props.isSubmit ? "#3894ff" : "#c4c4c4"};

    font-size: 1rem;
    color: #fff;
  }
`;
