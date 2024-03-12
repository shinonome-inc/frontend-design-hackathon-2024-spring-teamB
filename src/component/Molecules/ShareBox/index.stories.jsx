import React from "react";
import ShareBox from "./index";
import { JapaneseResult, EnglishResult } from "../../pages/Results/index";

export default {
  title: "Components/ShareBox",
  component: ShareBox,
};

export const JapaneseShareBox = () => (
  <ShareBox
    language="japanese"
    recommendedRamen={JapaneseResult().props.result} // JapaneseResultコンポーネントからrecommendedRamenを取得
  />
);

export const EnglishShareBox = () => (
  <ShareBox
    language="english"
    recommendedRamen={EnglishResult().props.result} // EnglishResultコンポーネントからrecommendedRamenを取得
  />
);
