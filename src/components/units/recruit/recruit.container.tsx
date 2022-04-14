// import { useQuery } from "@apollo/client";
import { createContext, useState } from "react";
// import { IQuery } from "../../../commons/types/generated/types";
import RecruitUI from "./recruit.presenter";
// import { FETCH_TENDENCYS } from "./recruit.queries";
import { IPropsRecruitContext } from "./recruit.types";

export const RecruitContext = createContext<IPropsRecruitContext>({});

export default function Recruit() {
  const [tendency, setTendency] = useState<string[]>([]);
  const [region, setRegion] = useState("");
  const [position, setPosition] = useState("");
  const [interest, setInterest] = useState<string[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const [isTendency, setIsTendency] = useState(false);
  const [isRegion, setIsRegion] = useState(false);
  const [isPosition, setIsPosition] = useState(false);
  const [isInterest, setIsInterest] = useState(false);

  const [isSearchBar, setIsSearchBar] = useState(false);
  const [locate, setLocate] = useState(0);
  const [tendencyLocate, setTendencyLocate] = useState(-10);
  const [regionLocate, setRegionLocate] = useState(-10);
  const [positionLocate, setPositionLocate] = useState(-10);
  const [interestLocate, setInterestLocate] = useState(-10);

  // const { data: tendencyData } =
  //     useQuery<Pick<IQuery, "fetchTendencys">>(FETCH_TENDENCYS)

  const onClickSearchImg = () => {
    setIsSearchBar((prev) => !prev);
  };

  const onClickSearchfilter = () => {
    if (locate === 0) {
      setLocate(0);
      setIsVisible((prev) => !prev);

      setIsTendency(true);
      setIsPosition(false);
      setIsRegion(false);
      setIsInterest(false);
    }
  };

  const onClickTendency = () => {
    if (tendencyLocate) {
      setTendencyLocate(-10);
      setIsTendency(true);
      setIsPosition(false);
      setIsRegion(false);
      setIsInterest(false);
    }
  };

  const onClickRegion = () => {
    if (regionLocate) {
      setRegionLocate(-10);
      setIsTendency(false);
      setIsPosition(false);
      setIsRegion(true);
      setIsInterest(false);
    }
  };

  const onClickPosition = () => {
    if (positionLocate) {
      setPositionLocate(-10);
      setIsTendency(false);
      setIsPosition(true);
      setIsRegion(false);
      setIsInterest(false);
    }
  };

  const onClickInterest = () => {
    if (interestLocate) {
      setInterestLocate(-10);
      setIsTendency(false);
      setIsPosition(false);
      setIsRegion(false);
      setIsInterest(true);
    }
  };

  const onClickPushTag = (name: string) => () => {
    let temp: string[] = [];

    if (tendency) {
      if (tendency.includes(name)) {
        return;
      }
      if (tendency.length === 3) {
        const temp = tendency;
        temp.shift();
        setTendency([...temp, name]);
      } else {
        setTendency((prev) => [...prev, name]);
      }
      return;
    }

    if (region) {
      if (region === name) {
        setRegion("");
      } else {
        setRegion(name);
      }
      return;
    }

    if (position) {
      if (position === name) {
        setPosition("");
      } else {
        setPosition(name);
      }
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

  const onClickDeleteTendencyTag = (name: string) => () => {
    const temp = tendency.filter((el) => el !== name);
    setTendency([...temp]);
  };

  const onClickDeletePositionTag = (name: string) => {
    setPosition(name);
  };

  const value = {
    tendency,
    region,
    position,
    interest,
    isVisible,
    isTendency,
    isRegion,
    isPosition,
    isInterest,
    isSearchBar,
    // tendencyData,
    // isSearchFilterBar,
    locate,
    tendencyLocate,
    regionLocate,
    positionLocate,
    interestLocate,
    onClickSearchImg,
    onClickSearchfilter,
    onClickTendency,
    onClickPosition,
    onClickRegion,
    onClickPushTag,
    onClickInterest,
    onClickDeleteTendencyTag,
    onClickDeletePositionTag,
  };

  return (
    <RecruitContext.Provider value={value}>
      <RecruitUI />
    </RecruitContext.Provider>
  );
}
