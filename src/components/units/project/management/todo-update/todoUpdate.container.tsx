import { Wrapper } from "../../../../../commons/styles/commonStyls";
import DateInput from "../../../../commons/inputs/component/date/date.container";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import TagBox from "../../new/tagbox/TagBox";
import { gql, useMutation, useQuery } from "@apollo/client";
import { FETCH_PROJECT } from "../projectManage.queries";

const UPDATE_TASK = gql`
  mutation updateTask(
    $taskId: String!
    $content: String!
    $limit: DateTime!
    $taskType: TASK_TYPE_ENUM!
    $userIds: [String!]!
  ) {
    updateTask(
      taskId: $taskId
      content: $content
      limit: $limit
      taskType: $taskType
      userIds: $userIds
    ) {
      id
    }
  }
`;

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
    }
  }
`;

const TodoAddStyle = styled.div`
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  position: fixed;
  transition: 0.4s;
  bottom: 0;
  left: 0;
  opacity: 1;
  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & > div > div {
    width: 100%;
  }
  z-index: 2;
  @media ${breakPoints.web} {
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30vw;
    border-radius: 12px;
    opacity: 1;
  }
`;

const OffAdd = styled.button`
  width: 20px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  & > img {
    width: 100%;
  }
`;

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: block;
`;

interface IPropsTodoUpdate {
  taskId: string;
  setUpdateOn: Dispatch<SetStateAction<boolean>>;
}

export default function TodoUpdate(props: IPropsTodoUpdate) {
  const [content, setContent] = useState("");
  const [contentValid, setContentValid] = useState(false);

  const { data } = useQuery(FETCH_USER);
  const [updateTask] = useMutation(UPDATE_TASK);

  const [limit, setLimit] = useState("");

  const [field, setField] = useState("");
  const [fieldValid, setFieldValid] = useState(false);

  const onClickUpdateTask = async () => {
    if (field === "") {
      setFieldValid(true);
    } else {
      setFieldValid(false);
    }

    if (content === "") {
      setContentValid(true);
    } else {
      setContentValid(false);
    }

    if (content && field) {
      try {
        await updateTask({
          variables: {
            taskId: props?.taskId,
            content,
            limit: String(limit),
            taskType: field,
            userIds: data?.fetchUser?.id,
          },
          refetchQueries: [FETCH_PROJECT],
        });
        alert("할 일이 수정되었습니다.");
        props.setUpdateOn(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <ModalBackground></ModalBackground>
      <TodoAddStyle>
        <OffAdd onClick={() => props.setUpdateOn(false)}>
          <img
            src="/img/down-arrow-black.svg"
            className="Xmark"
            alt="down-arrow"
          />
        </OffAdd>
        <Wrapper paddingTop="5px">
          <TypingInput
            label="업무 내용"
            type="text"
            placeholder="업무 내용을 입력해주세요."
            setValues={setContent}
            id="name"
            valid={contentValid}
            errorMessage="프로젝트 이름을 한 글자 이상 입력해야 합니다."
          />
          <DateInput
            label="마감 기한"
            setValues={setLimit}
            warringText="* 마감 기한을 선택하지 않으면 마감기간 없음으로 표시됩니다."
          />
          <TagBox
            list={[
              { name: "기획", id: "PLANNING" },
              { name: "디자인", id: "DESIGN" },
              { name: "개발", id: "DEVELOPMENT" },
            ]}
            label="분야"
            checkBox={false}
            valid={fieldValid}
            setValues={setField}
            errorMessage="분야를 선택해주세요."
          />
          <SubmitButton onClick={onClickUpdateTask} btnvalue="업무 수정하기" />
        </Wrapper>
      </TodoAddStyle>
    </>
  );
}
