import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import * as S from "./projectManage.styles";
import ProjectTeamBoard from "./teamBoard/projectTeamBoard.container";
import TodoAdd from "./todo-add/todoAdd.container";
import TodoDone from "./todo-done/todoDone.container";
import TodoProgress from "./todo-progress/todoProgress.container";
import SquareTag from "../../../commons/tags/commons/squareTag";
import { MainBox } from "../../main/main.styles";
import BoardAdd from "./boardAdd/BoardAdd";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import BoardUpdate from "./boardUpdate/BoardUpdate";
import TeamMember from "./teamMenber/teamMember";

interface IProsManage {
  onClickonAdd: ((e: MouseEvent<HTMLButtonElement>) => void) | undefined;
  project?: string;
  data?:any;
  toDoTab:boolean;
  doneTab:boolean;
  onClickChangeTabTodo:() => void
  onClickChangeTabDone:() => void
  projectcomplete:() => void
  setOnUpdate:Dispatch<SetStateAction<boolean>>
  onAdd:boolean
  onUpdate:boolean
  setBoardId?:Dispatch<SetStateAction<string>>
  boardId?:string
  onClickUpdateBoard?:any
  onClickAllDeleteBoard?:() => void
  onClickAllDeleteTask?:() => void
}

function ProjectManageUI(props: IProsManage) {
   const complete = props?.data?.fetchProject.task.filter((el:any) => {
     return el.is_complete
   })
   const statusState = complete && isNaN(complete.length/props?.data?.fetchProject.task.length*100) ? 0 :
   complete && complete.length/props?.data?.fetchProject.task.length*100
  const [todoOn,setTodoOn] = useState(false)
  return (
    <S.ProjectManageStyle>
      <h2>프로젝트 관리</h2>
      <div className="layout__responsive">
      <S.ProjectImgBox>
        {props?.data?.fetchProject.imgUrl ? (
          props?.data?.fetchProject.imgUrl.includes(
            "cdn-cashy-static-assets.lucidchart.com/"
          ) ? (
            <S.ProjectManageImg src={props?.data?.fetchProject.imgUrl} />
          ) : (
            <S.ProjectManageImg
              src={`https://storage.googleapis.com/${props?.data?.fetchProject.imgUrl}`}
            />
          )
        ) : (
          <div>이미지가 없습니다.</div>
        )}
      </S.ProjectImgBox>
      <S.ProjectManageTop>
        <div>
          <Wrapper paddingTop="30px">
            <S.ProjectDefaultInfo>
              <h3>{props?.data?.fetchProject.name}</h3>
              <h4>{props?.data?.fetchProject.description}</h4>
              <SquareTag
                name={props?.data?.fetchProject.type.name}
                size={0.525}
                bgColor="#3894FF"
              />
            </S.ProjectDefaultInfo>
            <S.ProjectListInfo>
              <li>
                <S.ProjectInfoKey>팀</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.teamname}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>팀장</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.leader.name}

                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>활동 지역</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.location.name}
                </S.ProjectInfoValue>
              </li>
              <li>
                <S.ProjectInfoKey>진행 방식</S.ProjectInfoKey>
                <S.ProjectInfoValue>
                  {props?.data?.fetchProject.method === "UNTACT" && "비대면"}
                  {props?.data?.fetchProject.method === "MEET" && "대면"}
                  {props?.data?.fetchProject.method === "MEDIATE" && "조정 가능"}
                </S.ProjectInfoValue>
              </li>
            </S.ProjectListInfo>
          </Wrapper>
        </div>
      </S.ProjectManageTop>
      </div>
      <MainBox>
        <Wrapper paddingTop="0">
          <S.ProjectResponsiveWeb>
            <div>
              <S.ProjectManageContentsTop>
                <h3>팀 프로필</h3>
              </S.ProjectManageContentsTop>  
              <div>
                {
                props.data?.fetchProject.projectMembers.length >= 1 ? 
                props.data?.fetchProject.projectMembers?.map((el:any,index:number) => {
                  if(index === 0){
                    return null
                  }
                  return <TeamMember 
                      key={uuidv4()}
                      imgurl={el.user?.imgUrl}
                      name={el.user?.name && el.user?.name}
                      position={el.user?.position?.name}
                  />
                }): <div>팀원이 없습니다.</div>
                } 
              </div>

            </div>
            <div>
              <S.ProjectManageContentsTop>
                <h3>팀 게시판</h3>
                <div className="board_button">
                  <button className="post" id="add__button" onClick={props.onClickonAdd}>
                    글 올리기 +
                  </button>
                  <button className="post board_delete" id="add__button" onClick={props.onClickAllDeleteBoard}>
                    전체 삭제
                  </button>
                </div>
              </S.ProjectManageContentsTop>
              <S.ProjectManaBoard>
                {
                props.data?.fetchProject.board.length === 0 ? <S.NonePost>게시물이 없습니다.</S.NonePost> :
                props.data?.fetchProject.board.map((el:any) => {
                  return <ProjectTeamBoard 
                    key={uuidv4()} 
                    title={el.title} 
                    content={el.content} 
                    createdAt={el.createdAt}
                    id={el.id}
                    onUpdate={props.onUpdate}
                    setOnUpdate={props.setOnUpdate}
                    setBoardId={props.setBoardId}
                    onClickUpdateBoard={props.onClickUpdateBoard}
                  />;
                })}
              </S.ProjectManaBoard>
            </div>
          </S.ProjectResponsiveWeb>
          <S.ResponsiveMobleTodoList>
            <S.ProjectManageContentsTop>
              <h3>
                <div className="to_do_title">To Do List</div>
                <div className="to_do_status"> 
                  <S.ProjectInfoKey>
                    <S.TodoStatus><span>업무 진행률</span> <span className="status__value">{`${Math.round(statusState)}`}</span>%</S.TodoStatus>
                  </S.ProjectInfoKey>
                  <S.ProjectInfoValue>
                    <S.ProjectStatusBox>
                      <S.ProjectStatus status={statusState}>
                      </S.ProjectStatus>
                    </S.ProjectStatusBox>
                    <button id="add__button" onClick={() => setTodoOn(true)}>
                     업무 추가 +
                    </button>
                    <button id="add__button" onClick={props.onClickAllDeleteTask}>
                     전체 삭제
                    </button>
                  </S.ProjectInfoValue>
                </div>
              </h3>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li onClick={props?.onClickChangeTabTodo}>해야 하는 업무</li>
              <li onClick={props?.onClickChangeTabDone}>완료한 업무</li>
            </S.ProjectTodoNavTab>
            {props?.toDoTab && <TodoProgress data={props.data} />}
            {props?.doneTab &&  <TodoDone  data={props.data} />}
          </S.ResponsiveMobleTodoList>

          <S.ResponsiveWebTodoList>
          <S.ProjectManageContentsTop>
              <h3>
                <div className="to_do_title">To Do List</div>
                <div className="to_do_status"> 
                  <S.TodoStatus>
                    <div className="status">
                      <span>업무 진행률</span>
                      <span className="status__value">{`${Math.round(statusState)}`}</span>%
                    </div>
                  </S.TodoStatus>
                  <div>
                    <S.ProjectStatusBox>
                      <S.ProjectStatus status={statusState}>
                      </S.ProjectStatus>
                    </S.ProjectStatusBox>
                    <button id="add__button" onClick={() => setTodoOn(true)}>
                     업무 추가 +
                    </button>
                    <button id="add__button" onClick={props.onClickAllDeleteTask}>
                     전체 삭제
                    </button>
                  </div>
                </div>
              </h3>
            </S.ProjectManageContentsTop>
            <S.ProjectTodoNavTab>
              <li>
                <h3>해야 하는 업무</h3>
                <TodoProgress data={props.data} />
              </li>
              <li>
                <h3>완료한 업무</h3>
                <TodoDone data={props.data}/>
              </li>
            </S.ProjectTodoNavTab>
          </S.ResponsiveWebTodoList>
        </Wrapper>
      </MainBox>
      {todoOn ? <TodoAdd data={props.data} setTodoOn={setTodoOn}/> : null}
      {props.onAdd ? <BoardAdd /> : null}
      {props.onUpdate ? <BoardUpdate boardId={props.boardId}/> : null}
      <S.ProjectCompleteButton>
      <SubmitButton onClick={props.projectcomplete} btnvalue="프로젝트 완료" />
      </S.ProjectCompleteButton>
    </S.ProjectManageStyle>
  );
}


export default ProjectManageUI