import styled from "@emotion/styled";
import CircleTag from "../tags/commons/circleTag";
import { v4 as uuidv4 } from "uuid";
import dumpData from "../../../commons/json/tendency.json";
import { useEffect, useState } from "react";

interface IPropsInfoBox {
  fontSize: number;
}

export const ProfileBox = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding-top: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeartImg = styled.img`
  width: 12%;
  height: 6.67%;
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const PictureBox = styled.div`
  width: 78%;
  height: 50%;

  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eeecec;
  }
`;

export const InfoBox = styled.div`
  width: 100%;
  font-size: ${(props: IPropsInfoBox) => `${props.fontSize}px`};
`;

export const Position = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 1.286em;
  line-height: 21px;
  color: #999999;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 1.714em;
  line-height: 28px;
  color: #4a4a4a;
`;

export const Tags = styled.div`
  display: flex;
  padding: 0px 13px;
  justify-content: space-between;
`;

interface IPropsTendency {
  name: string;
}

interface IPropsProfileCard {
  img: string;
  name: string | undefined;
  position: string;
  tendency: { name: string }[] | (IPropsTendency[] | undefined);
  fontSize: number;
}

export default function PropsProfileCard(props: IPropsProfileCard) {
  const [color, setColor] = useState<string[]>([]);
  const defultTag = ["best", "team", "player"];
  const defultColor = ["#68A4FF", "#DCCBFF", "#FBA04C"];

  useEffect(() => {
    if (!props.tendency) return;

    const bg: string[] = [];
    props.tendency?.forEach((el) => {
      const idx = dumpData.tendency.name.indexOf(el.name);

      bg.push(dumpData.tendency.color[idx]);
    });

    setColor([...bg]);
  }, [props.tendency]);

  return (
    <ProfileBox>
      <HeartImg src="/img/commons/heart.svg" />
      <PictureBox>
        <img src={props.img} />
      </PictureBox>
      <InfoBox fontSize={props.fontSize}>
        <Name>{props.name}</Name>
        <Position>{props.position}</Position>
        <Tags>
          {props.tendency?.length ? (
            <>
              {props.tendency.map((el, idx) => {
                return (
                  <CircleTag
                    key={uuidv4()}
                    name={el.name}
                    size={0.124}
                    bgColor={color[idx]}
                    margin={4}
                  />
                );
              })}
            </>
          ) : (
            <>
              {defultTag.map((el, idx) => {
                return (
                  <CircleTag
                    key={uuidv4()}
                    name={el}
                    size={0.124}
                    bgColor={defultColor[idx]}
                    margin={4}
                  />
                );
              })}
            </>
          )}
        </Tags>
      </InfoBox>
    </ProfileBox>
  );
}
