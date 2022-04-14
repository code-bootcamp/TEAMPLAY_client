import styled from "@emotion/styled";

export const ProjectManageContentsTop = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 0;
  & #add__button{
    margin-top: 10px;
    margin-right: 10px;
    background-color: #3894FF;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
    color: #fff;
    white-space: nowrap;
    &.post{
      margin-top: 0;
      &.board_delete{
        margin-right: 0;
      }
    }
}
`