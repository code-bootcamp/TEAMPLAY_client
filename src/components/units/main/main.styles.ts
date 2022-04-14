import styled from "@emotion/styled";

export const MainBox = styled.div`
  width: 100%;
  padding-bottom: 50px;
  overflow-x: hidden;
`;

export const MainTop = styled.div``;

export const MainBottom = styled.div``;
export const ContentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 900;
  padding: 30px 0 15px;
  & > h3 {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  & > h3 > img {
    margin-left: 5px;
  }
`;
