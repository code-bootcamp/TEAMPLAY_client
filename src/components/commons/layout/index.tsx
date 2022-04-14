import { useRouter } from "next/router";
import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./header/header.container";
import * as S from "./header/header.styles";
import * as F from "./footer/footer.styles";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenHeaderMobile = [
    "/login",
    "/onboarding",
    "/chatting/detail",
    "/chatting/list",
    "/profile",
    "/profile/edit",
    "/profile/list",
    "/signup",
    "/signup/edit",
  ];

  const isHiddenHeaderWeb = ["/", "/onboarding"];

  const isHiddenFooterWeb = ["/login", "/onboarding"];

  return (
    <>
      {router.asPath.includes("/project/list/") ? (
        <div>{props.children}</div>
      ) : (
        <>
          <S.HeaderBox
            isHiddenHeader={isHiddenHeaderMobile}
            isHiddenHeaderWeb={isHiddenHeaderWeb}
            asPath={router.asPath}
          >
            <Header />
          </S.HeaderBox>
          <div>{props.children}</div>
          <F.FooterBox
            isHiddenFooterWeb={isHiddenFooterWeb}
            asPath={router.asPath}
          >
            <Footer />
          </F.FooterBox>
        </>
      )}
    </>
  );
}
