import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { createContext, MouseEvent, useState } from "react";
import { IMutation } from "../../../../commons/types/generated/types";
import useMoveToPage from "../../hooks/useMoveToPage";
import HeaderUI from "./header.presenter";
import { LOGOUT } from "./header.queries";
import { IHeaderContext } from "./header.types";

export const HeaderContext = createContext<IHeaderContext>({});

export default function Header() {
  const {
    moveToLogin,
    moveToSignup,
    moveToProfile,
    moveToMyProject,
    moveToChatting,
    moveToPayment,
  } = useMoveToPage();
  const [logout] = useMutation<Pick<IMutation, "logout">>(LOGOUT);
  const router = useRouter();
  const [position, setPosition] = useState(-80);
  const [isPoint, setIsPoint] = useState(false);
  const [isView, setIsView] = useState(false);
  const isHiddenNav = [
    "/project/new",
    "/onboarding",
    "/chatting/detail",
    "/chatting/list",
  ];

  const onClickMovetoPage = (name: string) => () => {
    setPosition(-80);
    setIsView(false);
    document.querySelector("#__next")?.classList.remove("projectdetalon");

    if (name === "login") moveToLogin();

    if (name === "signup") moveToSignup();

    if (name === "chatting") moveToChatting();

    if (name === "profile") moveToProfile();

    if (name === "myProject") moveToMyProject();

    if (name === "payment") moveToPayment();
  };

  const onClickHeaderRouting = (e: MouseEvent<HTMLLIElement>) => {
    setPosition(-80);
    setIsView(false);
    const navList = document.querySelectorAll(".nav__list");
    document.querySelector("#__next")?.classList.remove("projectdetalon");
    for (let i = 0; i < navList.length; i++) {
      navList[i].classList.remove("active__page");
    }
    if(e.currentTarget.id === '/community/list'){
      alert("준비중인 페이지입니다.")
      return
    } 
    router.push(e.currentTarget.id);
    e.currentTarget && e.currentTarget.classList.add("active__page");
  };

  const onClickLogout = () => {
    logout();
    location.reload();
  };

  const onCliclsetPosition = () => {
    setPosition((prev) => (prev === -80 ? 0 : -80));
    setIsView((prev) => !prev);
  };

  const onClickPointModal = () => {
    setIsPoint((prev) => !prev);
  };

  const value = {
    position,
    isView,
    isPoint,
    onCliclsetPosition,
    onClickLogout,
    onClickMovetoPage,
    onClickPointModal,
    onClickHeaderRouting,
  };

  return (
    <HeaderContext.Provider value={value}>
      <HeaderUI isHiddenNav={isHiddenNav.includes(router.asPath)} />
    </HeaderContext.Provider>
  );
}
