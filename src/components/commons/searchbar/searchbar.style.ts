import styled from "@emotion/styled";

export const SearchBarStyle = styled.div`
  width: 100%;
  padding: 10px 0;
  transition: 0.4s;
  background-color: #fff;
  &.onSticky{
      background-color: #ccc;
  }
`;

export const SearchBarTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  margin-bottom: 10px;
  @media (min-width: 1200px) {
    border-bottom: 1px solid #ccc;
  }
`;

export const SearchInput = styled.input`
  width: 500px;
  max-width: 70vw;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.5s ease-in-out;
  padding: 12px;
  border-radius: 20px;
  margin-right: 10px;
  &:focus {
    width: 600px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const SearchBarBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 25px;
  & div > img {
    margin-left: 5px;
  }
`;
