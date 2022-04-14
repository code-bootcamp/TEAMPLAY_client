import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/dist/shared/lib/router/router";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/library/getAccessToken";
import { useRouter } from "next/router";
import {
  IPosition,
  ITendency,
  IType,
} from "../src/commons/types/generated/types";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  isLogin?: boolean;
  setIsLogin?: Dispatch<SetStateAction<boolean>>;
  loggedInfo?: {
    _id: string;
    email: string;
    name: string;
    point: number;
    career: string;
    tendencys: ITendency[];
    position: IPosition | string;
    types: string[];
  };
  setLoggedInfo?: Dispatch<
    SetStateAction<{
      _id: string;
      email: string;
      name: string;
      point: number;
      career: string;
      tendencys: ITendency[];
      position: IPosition | string;
      types: IType[];
    }>
  >;
}

export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken,
    setAccessToken,
    isLogin,
    setIsLogin,
  };

  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, [router]);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              ...operation,
              headers: { Authorization: `Bearer ${newAccessToken}` },
            });
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend.ljh305.shop/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
