import styled from "@emotion/styled";
import CircleTag from "../tags/commons/circleTag";
import { v4 as uuidv4 } from "uuid";
import { ITendency, Maybe } from "../../../commons/types/generated/types";
import dumpData from "../../../commons/json/tendency.json";
import { useEffect, useState } from "react";

export const ProfileBox = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid #c4c4c4;
  border-radius: 12px;
  padding: 28px 0;

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
`;

export const Position = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 1rem;
  line-height: 21px;
  color: #999999;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.3rem;
  font-weight: 400;
  font-size: 1.286rem;
  color: #4a4a4a;
`;

export const Tags = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: nowrap;
`;

interface IPropsProfileCard {
  img: Maybe<string> | undefined;
  name: string;
  position: string | undefined;
  fontSize: number;
  tendency: Maybe<ITendency[]> | undefined;
}

const STORAGE = "https://storage.googleapis.com/";

export default function PropsProfileCardSlide(props: IPropsProfileCard) {
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
        <img
          src={props.img ? STORAGE + props.img : "/img/commons/noimage.jpg"}
        />
      </PictureBox>
      <InfoBox>
        <Name>{props.name}</Name>
        <Position>{props.position || "teamplayer"}</Position>
        <Tags>
          {props.tendency?.length ? (
            <>
              {props.tendency.map((el, idx) => {
                return (
                  <CircleTag
                    key={uuidv4()}
                    name={el.name}
                    size={props.fontSize}
                    bgColor={color[idx]}
                    margin={0}
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
                    size={props.fontSize}
                    bgColor={defultColor[idx]}
                    margin={0}
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
