import { useMutation, useQuery } from "@apollo/client";
import {
  ChangeEvent,
  createContext,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { IQuery } from "../../../commons/types/generated/types";
import useMoveToPage from "../../commons/hooks/useMoveToPage";

import OnBoardingUI from "./onboarding.presenter";
import {
  FETCH_POSITIONS,
  FETCH_TENDENCYS,
  FETCH_TYPES,
  UPDATE_USER_BY_ONBOARD,
} from "./onboarding.queries";
import { IPropsOnBoardingContext } from "./onboarding.types";
import dump from "../../../commons/json/tendency.json";

export const OnBoardingContext = createContext<IPropsOnBoardingContext>({});

export default function OnBoarding() {
  const { moveToMain } = useMoveToPage();
  const [left, setLeft] = useState(0);
  const [career, setCareer] = useState("");
  const [tendency, setTendency] = useState<string[]>([]);
  const [position, setPosition] = useState("");
  const [interest, setInterest] = useState<string[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [tag, setTag] = useState("");
  const [colorIndex, setColorIndex] = useState<number[]>([]);

  const tagInputRef = useRef<HTMLInputElement>(null);

  const { data: tendencyData } =
    useQuery<Pick<IQuery, "fetchTendencys">>(FETCH_TENDENCYS);
  const { data: positionData } =
    useQuery<Pick<IQuery, "fetchPositions">>(FETCH_POSITIONS);
  const { data: typeData } = useQuery<Pick<IQuery, "fetchTypes">>(FETCH_TYPES);

  const [updateUserByOnboard] = useMutation(UPDATE_USER_BY_ONBOARD);

  const onClickChageInput = () => {
    setIsAdd(true);
    tagInputRef.current?.click();
  };

  const onChangeTagInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };

  const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (tendency.includes(tag)) {
        return;
      }
      if (tendency.length === 3) {
        const temp = tendency;
        temp.shift();
        setTendency([...temp, tag]);
      } else {
        setTendency((prev) => [...prev, tag]);
      }
    }
  };

  const onClickMoveToNext = () => {
    tendency.forEach((name) => {
      const idx = dump.tendency.name.indexOf(name);
      setColorIndex((prev) => [...prev, idx]);
    });
    if (
      (left === -100 && career === "") ||
      (left === -300 && position === "")
    ) {
      alert("최소 1개이상 선택해야 합니다.");
      return;
    }
    if (
      (left === -200 && tendency.length !== 3) ||
      (left === -400 && interest.length !== 3)
    ) {
      alert("3개 선택해야 합니다.");
      return;
    }
    setLeft((prev) => prev - 100);
  };

  const onClickMoveToPrev = () => {
    setLeft((prev) => prev + 100);
  };

  const onClickDeleteTag = (name: string) => () => {
    const temp = tendency.filter((el) => el !== name);

    setTendency([...temp]);
  };

  const onClickPushTag = (name: string) => () => {
    let temp: string[] = [];

    if (left === -100) {
      if (career === name) setCareer("");
      else setCareer(name);
      return;
    }

    if (left === -200) {
      if (tendency.includes(name)) {
        return;
      }
      if (tendency.length === 3) {
        temp = tendency;
        temp.shift();
        setTendency([...temp, name]);
      } else {
        setTendency((prev) => [...prev, name]);
      }

      return;
    }

    if (left === -300) {
      if (position === name) setPosition("");
      else setPosition(name);
      return;
    }

    if (interest.includes(name)) {
      temp = interest.filter((el) => el !== name);
      setInterest([...temp]);
    } else {
      if (interest.length === 3) {
        temp = interest;
        temp.shift();
        setInterest([...temp, name]);
      } else {
        setInterest((prev) => [...prev, name]);
      }
    }
  };

  const onClickSubmit = async () => {
    let careerId = "";
    let positionId = "";
    const tendencyId: string[] = [];
    const typeId: string[] = [];

    tendency.forEach((name) => {
      let index = 0;
      tendencyData?.fetchTendencys.forEach((el, idx) => {
        if (el.name === name) index = idx;
      });
      tendencyId.push(String(tendencyData?.fetchTendencys[index].id));
    });

    interest.forEach((name) => {
      let index = 0;
      typeData?.fetchTypes.forEach((el, idx) => {
        if (el.name === name) index = idx;
      });
      typeId.push(String(typeData?.fetchTypes[index].id));
    });

    positionData?.fetchPositions.forEach((el) => {
      if (el.name === position) positionId = el.id;
    });

    if (career === "대학생") careerId = "STUDENT";
    if (career === "취준생") careerId = "JOBSEEKER";
    if (career === "신입~2년차") careerId = "NEWCOMER";

    try {
      await updateUserByOnboard({
        variables: {
          updateUserOnboardInput: {
            career: careerId,
            tendencyId,
            positionId,
            typeId,
          },
        },
      });
      moveToMain();
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const value = {
    left,
    career,
    tendency,
    position,
    interest,
    isAdd,
    tendencyData,
    positionData,
    typeData,
    colorIndex,
    onClickChageInput,
    onChangeTagInput,
    onKeyPressEnter,
    onClickMoveToNext,
    onClickMoveToPrev,
    onClickSubmit,
    onClickPushTag,
    onClickDeleteTag,
  };

  return (
    <OnBoardingContext.Provider value={value}>
      <OnBoardingUI />
    </OnBoardingContext.Provider>
  );
}
