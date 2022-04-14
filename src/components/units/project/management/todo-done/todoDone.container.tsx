import CircleTag from "../../../../commons/tags/commons/circleTag";
import SquareTag from "../../../../commons/tags/commons/squareTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "../projectManage.styles";
import { gql, useMutation } from "@apollo/client";
import { FETCH_PROJECT } from "../projectManage.queries";

interface IPropsTodoProgress {
  data: any;
}

const DELETE_TASK = gql`
  mutation deleteTask($taskId: String!) {
    deleteTask(taskId: $taskId)
  }
`;

export default function TodoProgress(props: IPropsTodoProgress) {
  const [deleteTask] = useMutation(DELETE_TASK);
  const onClickDelete = (taskId: string) => async () => {
    try {
      await deleteTask({
        variables: {
          taskId,
        },
        refetchQueries: [FETCH_PROJECT],
      });

      alert("기록을 삭제히였습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.TodoList>
      {props?.data?.fetchProject?.task.filter((el: any) => {
        return el.is_complete;
      }).length === 0 ? (
        <S.NoneTodo>완료된 업무가 없습니다.</S.NoneTodo>
      ) : (
        props?.data?.fetchProject?.task.map((el: any) => {
          if (!el.is_complete) {
            return null;
          } else {
            return (
              <S.Todo key={uuidv4()}>
                <S.TodoInfos>
                  <div>
                    <CircleTag
                      name="완료된 업무입니다."
                      size={0.514}
                      bgColor="#999"
                      margin={10}
                    />
                    <SquareTag
                      name={el.taskType}
                      size={0.514}
                      bgColor="#c4c4c4"
                    />
                  </div>
                  <S.TodoSetting>
                    <button onClick={onClickDelete(el.id)}>
                      <img src="/img/delete.svg" alt="delete" />
                    </button>
                  </S.TodoSetting>
                </S.TodoInfos>
                <S.TodoLimitDescription>{el.content}</S.TodoLimitDescription>
              </S.Todo>
            );
          }
        })
      )}
    </S.TodoList>
  );
}
