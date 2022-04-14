import styled from "@emotion/styled";
import useFetchUser from "../../../src/components/commons/hooks/useFetchUser";

const CompletePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
  }
`;

function ProjectCompletePayment() {
  const { data } = useFetchUser();

  return (
    <CompletePage>
      <h2>축하합니다.</h2>
      프로젝트가 성공적으로 마무리되었습니다.
      <span>포인트가 환급됩니다.</span>
      <div>
        <div>환급받은 포인트 : {data?.fetchUser.point}</div>
        <div>현재 포인트 : {data?.fetchUser.point}</div>
      </div>
    </CompletePage>
  );
}

export default ProjectCompletePayment;
