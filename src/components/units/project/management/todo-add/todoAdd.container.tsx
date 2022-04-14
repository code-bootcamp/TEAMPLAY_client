import { Wrapper } from "../../../../../commons/styles/commonStyls";
// import { Label } from "../../../../commons/inputs/commons/styles";
import DateInput from "../../../../commons/inputs/component/date/date.container";
import SubmitButton from "../../../../commons/inputs/component/submitbutton/submit.container";
import TypingInput from "../../../../commons/inputs/component/typinginput/typinginput.container";
// import { TodoWorker } from "../projectManage.styles";
// import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import TagBox from "../../new/tagbox/TagBox";
import { gql, useMutation } from "@apollo/client";
import { FETCH_PROJECT } from "../projectManage.queries";
// import TeamProfile from "./teamProfile";

const CREATE_TASK = gql`
  mutation createTask(
    $projectId: String!
    $content: String!
    $limit: DateTime!
    $taskType: TASK_TYPE_ENUM!
    $userIds: [String!]!
  ) {
    createTask(
      projectId: $projectId
      content: $content
      limit: $limit
      taskType: $taskType
      userIds: $userIds
    ) {
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

interface IPropsTodoAdd {
  data: any;
  setTodoOn: Dispatch<SetStateAction<boolean>>;
}

export default function TodoAdd(props: IPropsTodoAdd) {
  // const [warker,setWarker] = useState<string[]>([])

  const [content, setContent] = useState("");
  const [contentValid, setContentValid] = useState(false);
  const [createTask] = useMutation(CREATE_TASK);
  const onClickoffAdd = () => {
    props.setTodoOn(false);
  };

  const [limit, setLimit] = useState("");

  const [field, setField] = useState("");
  const [fieldValid, setFieldValid] = useState(false);

  const onClickcreateTask = async () => {
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
        await createTask({
          variables: {
            projectId: props?.data?.fetchProject?.id,
            content,
            limit: String(limit),
            taskType: field,
            userIds: "",
          },
          refetchQueries: [FETCH_PROJECT],
        });
        alert("할 일이 등록되었습니다.");
        onClickoffAdd();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const onMouseEnterprofileOn = (userId:string) => (e:MouseEvent<HTMLLIElement>) => {
  //   const user = document.getElementById(userId)
  //   user?.classList.add('onMouse')
  // }

  // const onMouseLeaveProfileOn = (userId:string) => (e:MouseEvent<HTMLLIElement>) => {
  //   const user = document.getElementById(userId)
  //   user?.classList.remove('onMouse')
  // }

  return (
    <>
      <ModalBackground id="modalBackground"></ModalBackground>
      <TodoAddStyle id="onTodoAdd">
        <OffAdd onClick={() => props.setTodoOn(false)}>
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
          {/* <div>
            <Label>담당 팀원</Label>
            <TodoWorker align="left">
              {props?.data?.fetchProject?.projectMembers && props?.data?.fetchProject?.projectMembers?.map((el:any,index:number) => {
                if(index === 0){
                  return null
                }
                
                return (
                  <TeamProfile 
                    key={uuidv4()}
                    userId={el.user?.id}
                    userName={el.user?.name}
                    userPosition={el.user?.position?.name}
                    imgUrl={el.user?.imgUrl}
                    onMouseEnterprofileOn={onMouseEnterprofileOn}
                    onMouseLeaveProfileOn={onMouseLeaveProfileOn}
                    setWarker={setWarker}
                    warker={warker}
                  />
                );
              })}
            </TodoWorker>
          </div> */}
          <SubmitButton onClick={onClickcreateTask} btnvalue="업무 추가하기" />
        </Wrapper>
      </TodoAddStyle>
    </>
  );
}
