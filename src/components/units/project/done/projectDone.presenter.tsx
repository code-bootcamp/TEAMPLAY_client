import styled from "@emotion/styled";
import { useEffect } from "react";
import useFetchUser from "../../../commons/hooks/useFetchUser";

const DonePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
  }
`;

interface IPropsProjectDone {
  point?: string | string[] | undefined;
}

export default function ProjectDoneUI(props: IPropsProjectDone) {
  const { data } = useFetchUser();
  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      console.log("페이지를 벗어났습니다.");
    });
  }, []);
  return (
    <DonePage>
      <h2>축하합니다.</h2>
      프로젝트가 성공적으로 마무리되었습니다.
      <span>포인트가 환급됩니다.</span>
      <div>
        <div>환급받은 포인트 : {props?.point}</div>
        <div>현재 포인트 : {data?.fetchUser.point}</div>
      </div>
    </DonePage>
  );
}
