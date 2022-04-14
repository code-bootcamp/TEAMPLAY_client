import { createContext, useState } from "react";
import ProjectManageUI from "./projectManage.presenter";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../commons/types/generated/types";
import {
  CREATE_BOARD,
  DELETE_PROJECT,
  END_PROJECT,
  FETCH_PROJECT,
} from "./projectManage.queries";
import { IProjectManagement, IPropsProjectManage } from "./projectManage.types";

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

const DELETE_TASK = gql`
  mutation deleteTask($taskId: String!) {
    deleteTask(taskId: $taskId)
  }
`;

export const ProjectManageContext = createContext<IProjectManagement>({});

export default function ProjectManage(props: IPropsProjectManage) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [onAdd, setOnAdd] = useState(false);
  const [onUpdate, setOnUpdate] = useState(false);
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [endProject] = useMutation(END_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);
  const [deleteBoards] = useMutation(DELETE_BOARD);
  const [deleteTask] = useMutation(DELETE_TASK);

  const onClickonAdd = () => {
    setOnAdd(true);
  };

  const [validTitle, setValidTitle] = useState(false);
  const [validContent, setValidContent] = useState(false);
  const onClickBoardAdd = async () => {
    if (title === "") {
      setValidTitle(true);
    } else {
      setValidTitle(false);
    }

    if (content === "") {
      setValidContent(true);
    } else {
      setValidContent(false);
    }

    if (title && content) {
      try {
        await createBoard({
          variables: {
            title,
            content,
            projectId: router.query.temp,
          },
          refetchQueries: [FETCH_PROJECT],
        });

        setOnAdd(false);
        alert("게시글이 등록되었습니다.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const value = {
    onClickBoardAdd,
    setTitle,
    setContent,
    validTitle,
    validContent,
    setOnAdd,
    setOnUpdate,
    title,
    content,
    setValidTitle,
    setValidContent,
  };

  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: props.project || "",
    },
  });
  const [toDoTab, setToDoTab] = useState(true);
  const [doneTab, setDoneTab] = useState(false);
  const [boardId, setBoardId] = useState("");

  const onClickChangeTabTodo = () => {
    setToDoTab(true);
    setDoneTab(false);
  };

  const onClickChangeTabDone = () => {
    setToDoTab(false);
    setDoneTab(true);
  };

  const projectcomplete = async () => {
    try {
      await endProject({
        variables: {
          projectId: props.project,
        },
      });
      await deleteProject({
        variables: {
          projectId: props.project,
        },
      });

      alert("프로젝트를 성공적으로 마무리 했습니다!!");
      router.push("/project/list");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdateBoard = (bid: string) => () => {
    setOnUpdate(true);
    setBoardId(bid);
  };

  const onClickAllDeleteBoard = () => {
    if (!data) return;

    try {
      data?.fetchProject?.board?.forEach(async (el: any) => {
        await deleteBoards({
          variables: {
            boardId: el.id,
          },
          refetchQueries: [FETCH_PROJECT],
        });
      });
      alert("모든 게시판이 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickAllDeleteTask = () => {
    if (!data) return;

    try {
      data?.fetchProject?.task?.forEach(async (el: any) => {
        await deleteTask({
          variables: {
            taskId: el.id,
          },
          refetchQueries: [FETCH_PROJECT],
        });
      });
      alert("모든 투두 리스트가 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProjectManageContext.Provider value={value}>
      <ProjectManageUI
        project={props.project}
        onClickonAdd={onClickonAdd}
        data={data}
        toDoTab={toDoTab}
        doneTab={doneTab}
        onClickChangeTabTodo={onClickChangeTabTodo}
        onClickChangeTabDone={onClickChangeTabDone}
        projectcomplete={projectcomplete}
        setOnUpdate={setOnUpdate}
        onAdd={onAdd}
        onUpdate={onUpdate}
        setBoardId={setBoardId}
        boardId={boardId}
        onClickUpdateBoard={onClickUpdateBoard}
        onClickAllDeleteBoard={onClickAllDeleteBoard}
        onClickAllDeleteTask={onClickAllDeleteTask}
      />
    </ProjectManageContext.Provider>
  );
}
