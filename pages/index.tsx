import type { NextPage } from "next";
import { useEffect } from "react";
import useMoveToPage from "../src/components/commons/hooks/useMoveToPage";

const Home: NextPage = () => {
  const { moveToMain } = useMoveToPage();
  useEffect(() => {
    moveToMain();
  }, []);
  return <div>ads</div>;
};

export default Home;
