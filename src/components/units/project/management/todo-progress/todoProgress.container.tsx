import CircleTag from "../../../../commons/tags/commons/circleTag";
import SquareTag from "../../../../commons/tags/commons/squareTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "../projectManage.styles";
import { Dday } from "../../../../../commons/library/calcDate";
import { gql, useMutation } from "@apollo/client";
import { FETCH_PROJECT } from "../projectManage.queries";
import TodoUpdate from "../todo-update/todoUpdate.container";
import { useState } from "react";

interface IPropsTodoProgress {
  data: any;
}

const DELETE_TASK = gql`
  mutation deleteTask($taskId: String!) {
    deleteTask(taskId: $taskId)
  }
`;

const COMPLETE_TASK = gql`
  mutation completeTask($taskId: String!) {
    completeTask(taskId: $taskId) {
      id
      is_complete
    }
  }
`;

export default function TodoProgress(props: IPropsTodoProgress) {
  const [completeTask] = useMutation(COMPLETE_TASK);
  const onClickComplete = (taskId: string) => async () => {
    try {
      await completeTask({
        variables: {
          taskId,
        },
        refetchQueries: [FETCH_PROJECT],
      });

      alert("업무가 완료되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const [updateOn, setUpdateOn] = useState(false);
  const [taskId, setTaskId] = useState("");
  const [deleteTask] = useMutation(DELETE_TASK);
  const onClickDelete = (taskId: string) => async () => {
    try {
      await deleteTask({
        variables: {
          taskId,
        },
        refetchQueries: [FETCH_PROJECT],
      });

      alert("할 일이 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUpdate = (taskId: string) => () => {
    setUpdateOn((prev) => !prev);
    setTaskId(taskId);
  };
  return (
    <S.TodoList>
      {props?.data?.fetchProject?.task.filter((el: any) => {
        return !el.is_complete;
      }).length === 0 ? (
        <S.NoneTodo>할 일이 없습니다.</S.NoneTodo>
      ) : (
        props?.data?.fetchProject?.task.map((el: any) => {
          const day = Dday(el.limit);
          if (el.is_complete) {
            return null;
          } else {
            return (
              <S.Todo key={uuidv4()}>
                <S.TodoInfos>
                  <div>
                    <CircleTag
                      name={`${String(day)} 일 남았습니다.`}
                      size={0.514}
                      bgColor="#3894FF"
                      margin={10}
                    />
                    <SquareTag
                      name={el.taskType}
                      size={0.514}
                      bgColor="#c4c4c4"
                    />
                  </div>
                  <S.TodoSetting>
                    <button onClick={onClickUpdate(el.id)}>
                      <img src="/img/edit.svg" alt="edit" />
                    </button>
                    <button onClick={onClickDelete(el.id)}>
                      <img src="/img/delete.svg" alt="delete" />
                    </button>
                  </S.TodoSetting>
                </S.TodoInfos>
                <S.TodoLimitDescription>{el.content}</S.TodoLimitDescription>
                <S.TodoDoneButton>
                  <button onClick={onClickComplete(el.id)}>Done</button>
                </S.TodoDoneButton>
              </S.Todo>
            );
          }
        })
      )}
      {updateOn ? (
        <TodoUpdate taskId={taskId} setUpdateOn={setUpdateOn} />
      ) : null}
    </S.TodoList>
  );
}
