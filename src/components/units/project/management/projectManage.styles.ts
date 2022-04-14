import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

interface IPropsTodoWorker {
  align: string;
  status:number;
}

interface IPropsStatusBar{
  status?:number
}


export const NoneTodo = styled.div`
  background-color:  #d9d9d9;
  color: #fff;
  font-size: 1.4rem;
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  border-radius:10px;
`

export const ProjectManageStyle = styled.div`
  & > h2{
    font-size: 3rem;
    text-align: center;
    margin: 50px 0;
    font-weight: 400;
  } 
  @media ${breakPoints.web}{
    & > .layout__responsive{
      display: flex;
      width: 100%;
      margin-bottom: 50px;
      border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
    }
  }
  `;

export const TodoInfos = styled.div`
  display: flex;
  padding-bottom: 10px;
  justify-content: space-between;
  & > div {
    display: flex;
  }
  & > span {
    display: block;
    font-size: 10px;
    background-color: #ccc;
    border-radius: 5px;
    color: #fff;
    padding: 5px;
    margin-right: 10px;
  }
`;

export const TodoButton = styled.div`
  height: 100%;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`;

export const TodoSetting = styled.div`
      display: flex;
      & > button{
        width: 20px;
        margin-right: 10px;
        & > img{
          width: 100%;
        }
      }
`;


export const TodoLimitDescription = styled.div`
  font-size: 1.143rem;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const TodoDoneButton = styled.div`
  font-size: 0.714rem;
  margin-bottom: 10px;
  background-color: #3894FF;
  border-radius: 10px;
  display: inline-block;
  & > button{
    color: #fff;
    padding: 5px 10px;
  }
`;
export const DoneList = styled.div`
  font-size: 8px;
  color: #ccc;
  margin-bottom: 10px;
`;

export const TodoList = styled.div`
  max-height: 500px;
  overflow: auto;
  padding: 30px 0;
  ::-webkit-scrollbar {
    display: none; 
  }
`;

export const ProjectDetail = styled.div`
  padding-top: 30px;
  font-size: 14px;
  color: #999;
  line-height: 1.4;
`;

export const ProjectTodoNavTab = styled.ul`
  display: flex;
  border-bottom: 1px solid #ccc;
  & > li {
    width: 50%;
    text-align: center;
    font-family: normal;
    cursor: pointer;
    padding: 10px 0;
    font-size: 1.286rem;
    &:first-child {
      border-right: 1px solid #ccc;
    }
  }
  @media ${breakPoints.web} {
    & > li {
      cursor: auto;
      padding-right:30px;
      text-align: left;
      :last-child{
        padding-left: 30px;
      }
      & > h3 {
        font-size: 1.286rem;
        padding-bottom: 30px;
      }
    }
  }
`;

export const ResponsiveWebTodoList = styled.div`
  display: none;
  @media ${breakPoints.web} {
    display: block;
  }
`;

export const TodoWorker = styled.ul`
  display: flex;
  justify-content: ${(props: IPropsTodoWorker) =>
    props.align === "left" ? "flex-start" : "flex-end"};
  & > li {
    margin: ${(props: IPropsTodoWorker) =>
      props.align === "left" ? "0 10px 0 0" : "0 0 0 10px"};
    font-size: 8px;
    background-color: #fff;
    width: 30px;
    height: 30px;
    color: #fff;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export const Todo = styled.div`
  background-color: #f3f9ff;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 15px;
`;

export const ProjectManageTop = styled.div`
  @media ${breakPoints.web} {
    & > div > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      @media ${breakPoints.web} {
        flex-direction: column;
      }
    }
    & > div > div > div {
      width: 100%;
    }
    @media ${breakPoints.tablet} {
      padding: 0 130px;
    }
  }
  border-bottom: 1px solid #ccc;
  & h3 {
    font-size: 1.714rem;
    padding-bottom: 15px;
  }
  & h4 {
    font-size: 0.929rem;
    line-height: 1.4rem;
    padding-bottom: 15px;
    color: #999;
  }
  & ul {
    display: flex;
  }
  @media ${breakPoints.web} {
    width: 50%;
    border-bottom: none;
  }
`;

export const ProjectMembers = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #F3F9FF;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    & .left_img{
      width: 40px;
      & > img{
        width: 100%;
      }
    }
    & .right_info{
      margin-left: 10px;
      & .name{
        font-size: 13px;
        padding-bottom: 3px;
      }
      & .position{
        font-size: 10px;
        color: #999;
      }
    }
`;

export const ProjectManageContentsTop = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 0;
  & #add__button{
    margin-top: 10px;
    margin-right: 10px;
    background-color: #3894FF;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
    color: #fff;
    white-space: nowrap;
    &.post{
      margin-top: 0;
      &.board_delete{
        margin-right: 0;
      }
    }
  }
  & .board_button{
    display: flex;
  }
  & h3{
    width: 100%;
    @media ${breakPoints.web}{
      width: 40%;
      margin-top: 0;
    } 
    font-size: 1.4rem;
    & .to_do_title{
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
  }
`;

export const ResponsiveMobleTodoList = styled.div`
  @media ${breakPoints.web} {
    display: none;
  }
`;

export const ProjectResponsiveWeb = styled.div`
  @media ${breakPoints.web} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > div {
      width: 50%;
    }
    & > div:last-child {
      padding-left: 30px;
    }
    & > div > div:last-child{
      max-height: 300px;
      overflow: auto;
    }
    margin-bottom: 30px;
  }
`;

export const ProjectUserSlideBox = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const NonePost = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 10px;
  color: #fff;
  font-size: 1.4rem;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectManaBoard = styled.ul`
  height: 300px;
  overflow: auto;
  & > li {
    display: flex;
    border:1px solid #ccc;
    flex-direction: column;
    border-radius: 12px;
    padding: 20px 13px;
    margin-bottom: 15px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      & h4 {
        text-decoration: underline;
      }
    }
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & time {
        display: block;
        color: #999;
        margin-right: 10px;
      }
    }

    & > div > div {
      display: flex;
    }
  }
`;

export const ProjectListInfo = styled.div`
  padding: 15px 0;
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
`;

export const ProjectDefaultInfo = styled.div`
  @media ${breakPoints.web} {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
  }
`;

export const ProjectStatusBox = styled.div`
  width: 100%;
  background-color: #ccc;
  border-radius: 30px;
  padding: 5px;
`;

export const ProjectStatus = styled.div`
  background-color: #3894ff;
  color: #fff;
  border-radius: 30px;
  font-size: 8px;
  transition: .8s;
  width: ${(props:IPropsStatusBar) => `${props.status}%`};
  padding: 9px 0;
`;

export const ProjectInfoKey = styled.div`
  width: 30%;
  font-weight: 900;
  padding-bottom: 5px;
  @media ${breakPoints.web} {
    width: 20%;
    padding-bottom: 0;
    padding-right: 10px;
  }
`;

export const TodoStatus = styled.div`
 & .status{
    padding: 10px 0;
    display: flex;
    width: 100%;
  }
  & .status__value{
    color: #3894FF;
    margin-left: 10px;
  }
`

export const ProjectInfoValue = styled.div`
  width: 70%;
  color: #999;
  @media ${breakPoints.web} {
    width: auto;
  }
`;

export const ProjectManageImg = styled.img``;

export const ProjectImgBox = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  & > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media ${breakPoints.tablet} {
    height: 35vw;
    margin-top: 50px;
  }
  @media ${breakPoints.web} {
    margin:0;
    width: 50%;
  }
`;


export const ProjectCompleteButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`