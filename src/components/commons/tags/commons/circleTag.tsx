import styled from "@emotion/styled";

interface IPropsCircleTag {
  name: string;
  size: number;
  bgColor: string | undefined;
  margin: number;
}

interface IPropsWrapper {
  bgColor: string | undefined;
  margin: number;
  size: number;
}

const CircleWrapper = styled.div`
  display: inline-block;
  background: ${(props: IPropsWrapper) => `${props.bgColor}`};
  border-radius: 12px;
  padding: 5px 8px;
  margin-right: ${(props: IPropsWrapper) => `${props.margin}px`};
  font-size: ${(props: IPropsWrapper) => `${props.size}rem`};
  color: #ffffff;
`;

export default function CircleTag(props: IPropsCircleTag) {
  return (
    <CircleWrapper
      bgColor={props.bgColor}
      margin={props.margin}
      size={props.size}
    >
      {props.name}
    </CircleWrapper>
  );
}
