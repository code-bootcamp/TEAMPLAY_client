import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { GlobalContext } from "../../../../pages/_app";
import {
  IMutation,
  IMutationLoginArgs,
} from "../../../commons/types/generated/types";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import LoginUI from "./login.presenter";
import { LOGIN } from "./login.queries";

export default function Login() {
  const { setAccessToken, setIsLogin } = useContext(GlobalContext);
  const { moveToMain, moveToOnboarding } = useMoveToPage();

  const [isView, setIsView] = useState(false);
  const [type, setType] = useState("password");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  useEffect(() => {
    if (isView) setType("text");
    else setType("password");
  }, [isView]);

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onClickSubmitLogin();
  };

  const onClickSetIsView = () => {
    setIsView((prev) => !prev);
  };

  const onChangeLoginInput =
    (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setLoginInput({
        ...loginInput,
        [name]: e.target.value,
      });
    };

  const onClickSubmitLogin = async () => {
    if (!setAccessToken || !setIsLogin) return;

    try {
      const result = await login({
        variables: {
          ...loginInput,
        },
      });
      setIsLogin(true);
      setAccessToken(result.data?.login.accessToken || "");

      result.data?.login.onboarding ? moveToMain() : moveToOnboarding();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <LoginUI
      type={type}
      isView={isView}
      onPressEnter={onPressEnter}
      onClickSetIsView={onClickSetIsView}
      onChangeLoginInput={onChangeLoginInput}
      onClickSubmitLogin={onClickSubmitLogin}
    />
  );
}
