import styled from "@emotion/styled";

interface IWrapperProps {
  paddingTop: string | number;
}

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: ${(props: IWrapperProps) => props.paddingTop};
`;
