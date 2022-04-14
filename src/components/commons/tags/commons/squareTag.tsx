import styled from "@emotion/styled";

interface IPropsSquareTag {
  name?: string | "DESIGN" | "DEVELOPMENT" |"PLANNING";
  size: number;
  bgColor: string;
}

interface IPropsWrapper {
  bgColor: string;
  size: number;
}

const Wrapper = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props: IPropsWrapper) => props.bgColor};
  font-size: ${(props: IPropsWrapper) => `${props.size}rem`};
  color: #fff;
`;

export default function SquareTag(props: IPropsSquareTag) {
  return (
    <Wrapper bgColor={props.bgColor} size={props.size}>
      {
        props.name === "DESIGN" ? "디자인" :
        props.name=== "DEVELOPMENT" ? "개발" : 
        props.name === "PLANNING" ? "기획" :
        props.name
      }
    </Wrapper>
  );
}
