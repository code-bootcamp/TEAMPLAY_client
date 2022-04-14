import styled from "@emotion/styled";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProjectContext } from "../../projectNew.container";

interface IPropsRecruitmentList {
  el?: string;
  index: number;
}

const RecruitmentList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  & div {
    display: flex;
    align-items: center;
  }
  & div > span {
    color: #3894ff;
  }
  & .check__input {
    display: none;
  }
  & .check__label {
    display: block;
    border: 1px solid #999;
    width: 15px;
    height: 15px;
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active:after {
      display: block;
      content: " ";
      width: 70%;
      height: 70%;
      background-color: #3894ff;
      border-color: #fff;
    }
  }
  & button {
    width: 20px;
  }
`;

const Personnel = styled.div`
  & > span {
    color: #3894ff;
  }
  margin-right: 1.429rem;
`;

export default function Recruitment(props: IPropsRecruitmentList) {
  const {
    position,
    postionInclueds,
    setPosition,
    setPostionInclueds,
    numbers,
  } = useContext(ProjectContext);

  const onClickDelete = (target: string) => () => {
    if (setPosition && position && setPostionInclueds) {
      const a: any = position.filter((el: any) => {
        return el !== target;
      });
      setPosition(a);
      postionInclueds &&
        setPostionInclueds(
          postionInclueds.filter((el: string) => {
            return el !== target;
          })
        );
    }
  };
  return (
    <RecruitmentList key={uuidv4()}>
      <div>{props.el}</div>
      <div>
        <Personnel>
          <span>{numbers && numbers[props.index + 1]}</span> 명 모집
        </Personnel>
        {props.el && (
          <button onClick={onClickDelete(String(props.el))}>
            <svg
              fill="#3894FF"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M358.625,313.375  c12.5,12.492,12.5,32.758,0,45.25C352.383,364.875,344.188,368,336,368s-16.383-3.125-22.625-9.375L256,301.25l-57.375,57.375  C192.383,364.875,184.188,368,176,368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758,0-45.25L210.75,256l-57.375-57.375  c-12.5-12.492-12.5-32.758,0-45.25c12.484-12.5,32.766-12.5,45.25,0L256,210.75l57.375-57.375c12.484-12.5,32.766-12.5,45.25,0  c12.5,12.492,12.5,32.758,0,45.25L301.25,256L358.625,313.375z" />
            </svg>
          </button>
        )}
      </div>
    </RecruitmentList>
  );
}
