import { useMutation } from "@apollo/client";
import { ChangeEvent, createContext, useEffect, useState } from "react";
import {
  IMutation,
  IMutationCheckTokenToEmailArgs,
  IMutationCreateUserArgs,
  IMutationLoginArgs,
  IMutationSendTokenToEmailArgs,
} from "../../../commons/types/generated/types";
import useMoveToPage from "../../commons/hooks/useMoveToPage";
import { LOGIN } from "../login/login.queries";
import SignUpUI from "./signup.presenter";
import {
  CHECK_TOKEN_TO_EMAIL,
  CREATE_USER,
  SEND_TOKEN_TO_EMAIL,
} from "./signup.queries";
import { IPropsSignUp, ISignUpContext } from "./signup.types";

export const SignUpContext = createContext<ISignUpContext>({});

const valid = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  password:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&()])[A-Za-z\d$@$!%*#?&()]{8,}$/,
  phone: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
};

export default function SignUp(props: IPropsSignUp) {
  const [isAuth, setIsAuth] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [passMsg, setPassMsg] = useState("");
  const [checkMsg, setCheckMsg] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    token: "",
    password: "",
    chkPassword: "",
  });
  const [isPrivite, setIsPrivite] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { moveToMain, moveToOnboarding } = useMoveToPage();
  const { name, email, token, password } = input;
  const isEdit = props.isEdit;

  const [sendTokenToEmail] = useMutation<
    Pick<IMutation, "sendTokenToEmail">,
    IMutationSendTokenToEmailArgs
  >(SEND_TOKEN_TO_EMAIL);
  const [checkTokenToEmail] = useMutation<
    Pick<IMutation, "checkTokenToEmail">,
    IMutationCheckTokenToEmailArgs
  >(CHECK_TOKEN_TO_EMAIL);
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);
  const [login] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(
    LOGIN
  );

  useEffect(() => {
    if (isEdit) {
      if (!passMsg && !checkMsg && isPolicy && isPrivite) setIsSubmit(true);
      else setIsSubmit(false);
    } else {
      if (email && name && !passMsg && !checkMsg && isPolicy && isPrivite)
        setIsSubmit(true);
      else setIsSubmit(false);
    }
    if (input.password !== input.chkPassword)
      setCheckMsg("비밀번호가 일치하지 않습니다.");
    else setCheckMsg("");
  }, [input, isPolicy, isPrivite]);

  const onChangeInput = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInput({
      ...input,
      [key]: value,
    });

    if (key === "email" && valid.email.test(value)) setIsEmail(true);

    if (key === "email" && valid.phone.test(value)) setIsEmail(true);
    if (key === "password" && !valid.password.test(value)) {
      setPassMsg(
        "8글자 이상, 최소 1개 이상의 특수문자, 숫자가 포함되어야합니다."
      );
    }
    if (key === "password" && valid.password.test(value)) {
      setPassMsg("");
    }
  };

  const onChageCheckBox = (name: string) => () => {
    if (name === "privite") setIsPrivite((prev) => !prev);
    if (name === "policy") setIsPolicy((prev) => !prev);
  };

  const onClickSubmit = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      alert("TEAMPLAY에 오신것을 환영합니다.");

      const result = await login({
        variables: {
          email,
          password,
        },
      });
      result.data?.login.onboarding ? moveToMain() : moveToOnboarding();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickSendEmailToken = async () => {
    setIsEmail(false);
    setIsAuth(true);

    try {
      await sendTokenToEmail({
        variables: {
          email,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      setIsEmail(true);
      setIsAuth(false);
    }
  };

  const onClickCheckEmailToken = async () => {
    try {
      await checkTokenToEmail({
        variables: {
          email,
          token,
        },
      });
      alert("이메일 인증에 성공하였습니다.");
    } catch (error) {
      if (error instanceof Error) alert("인증번호가 일치하지 않습니다.");
    }
  };

  const onClickRequestPhoneAuth = () => {
    setIsEmail(false);
    setIsAuth(true);
  };

  const value = {
    isAuth,
    isEmail,
    isEdit,
    setIsAuth,
    setIsEmail,
    onChangeInput,
  };

  return (
    <SignUpContext.Provider value={value}>
      <SignUpUI
        passMsg={passMsg}
        checkMsg={checkMsg}
        isEmail={isEmail}
        isSubmit={isSubmit}
        onClickSendEmailToken={onClickSendEmailToken}
        onClickCheckEmailToken={onClickCheckEmailToken}
        onClickSubmit={onClickSubmit}
        onClickRequestPhoneAuth={onClickRequestPhoneAuth}
        onChageCheckBox={onChageCheckBox}
      />
    </SignUpContext.Provider>
  );
}
