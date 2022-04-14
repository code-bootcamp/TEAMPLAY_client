import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  overflow: hidden;
  overflow-y: scroll;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 30px;
`;

export const LeftArrowImg = styled.img`
  width: 12px;
  height: 16px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1.429rem;
`;

export const DotToggleImg = styled.img`
  width: 2px;
  height: 13px;
`;

export const ChattingBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 23px 20px;
  border-bottom: 1px solid #c4c4c4;

  :hover {
    cursor: pointer;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  width: calc(100% - 56px);
`;

export const ProfileBox = styled.div`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const MiddleBox = styled.div`
  padding: 8px 10px;
  width: calc(100% - 50px);
`;

export const Name = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 1.143rem;
  line-height: 18px;
  color: #2c2422;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    width: 8%;
  }
`;

export const Tag = styled.div`
  display: inline;
  padding: 4px 6px;
  background-color: #68a4ff;
  border-radius: 20px;
  font-weight: 500;
  font-size: 0.4rem;
  line-height: 18px;
  color: #fff;
`;

export const Count = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  color: #a4a4a4;
`;

export const Contents = styled.div`
  width: 100px;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: 400;
  font-size: 0.857rem;
  line-height: 14px;
  color: #a4a4a4;
`;

export const RightBox = styled.div`
  width: 56px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  span {
    font-weight: 400;
    font-size: 0.571rem;
    line-height: 9px;
    color: #999999;
  }
`;
