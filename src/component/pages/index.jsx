import React from "react";
import { paths } from "./paths";
import { useRouter } from "next/router";
import TopPage from "../pages/TopPage";

const AppIndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question);
  };

  return <TopPage onClick={onClick}></TopPage>;
};

export default AppIndexPage;
