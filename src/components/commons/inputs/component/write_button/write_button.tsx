import styled from "@emotion/styled";
import { useRouter } from "next/router";

const WriteGoButtonStyle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: #3894ff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  z-index: 10;
  & > img {
    width: 50%;
  }
`;

export default function WriteGoButton() {
  const router = useRouter();
  const onClickWritepage = () => {
    router.push("/project/new");
    document.querySelector("#__next")?.classList.remove("projectdetalon");
  };
  return (
    <WriteGoButtonStyle onClick={onClickWritepage}>
      <img src="../img/gowrite.svg" alt="go write page button" />
    </WriteGoButtonStyle>
  );
}
