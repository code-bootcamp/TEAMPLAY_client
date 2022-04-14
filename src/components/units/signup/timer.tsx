import { useContext, useEffect, useRef, useState } from "react";
import { SignUpContext } from "../../units/signup/signup.container";
import * as S from "./signup.styles";

export default function Timer() {
  const { setIsEmail, setIsAuth } = useContext(SignUpContext);
  const time = useRef(180);
  const [min, setMin] = useState("03");
  const [sec, setSec] = useState("00");

  useEffect(() => {
    const timer = setInterval(() => {
      setMin(String(Math.floor(time.current / 60)).padStart(2, "0"));
      setSec(String(time.current % 60).padStart(2, "0"));
    }, 1000);

    time.current -= 1;

    if (time.current <= -1) {
      alert("유효시간이 만료되었습니다.");
      clearInterval(timer);
      setIsAuth && setIsAuth(false);
      setIsEmail && setIsEmail(true);
    }

    return () => clearInterval(timer);
  }, [sec]);

  return <S.Message>{`유효시간 ${min} : ${sec}`}</S.Message>;
}
