import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { FETCH_PROJECT } from "../projectManage.queries";
import * as S from "../projectManage.styles";

interface IPropsProjectTeamBoard {
  title: string;
  content: string;
  createdAt: any;
  id: string;
  onUpdate?: boolean;
  setOnUpdate: Dispatch<SetStateAction<boolean>>;
  setBoardId?: Dispatch<SetStateAction<string>>;
  onClickUpdateBoard?: any;
}

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`;

export const BoardAddBox = styled.div`
  position: relative;
  & .setting_box {
    & button {
      width: 20px;
      margin-left: 10px;
      & > img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectTeamBoard(props: IPropsProjectTeamBoard) {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [detail, setDetail] = useState(false);
  const onClickDetail = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation();
    setDetail((prev) => !prev);
  };

  const onClickDeleteBoard = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    try {
      await deleteBoard({
        variables: {
          boardId: props.id,
        },
        refetchQueries: [FETCH_PROJECT],
      });

      alert("게시글이 삭제되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  const y = new Date(props.createdAt).getFullYear();
  const m = new Date(props.createdAt).getMonth();
  const g = new Date(props.createdAt).getDate();

  return (
    <>
      <li onClick={onClickDetail} id={props.id}>
        <BoardAddBox>
          <div>
            <time>{`${y}-${m}-${g}`}</time>
            <h4>{props.title}</h4>
          </div>
          <div className="setting_box">
            <button
              onClick={
                props.onClickUpdateBoard && props.onClickUpdateBoard(props.id)
              }
            >
              <img src="/img/edit.svg" alt="edit" />
            </button>
            <button onClick={onClickDeleteBoard}>
              <img src="/img/delete.svg" alt="delete" />
            </button>
          </div>
        </BoardAddBox>
        {detail && <S.ProjectDetail>{props.content}</S.ProjectDetail>}
      </li>
    </>
  );
}
