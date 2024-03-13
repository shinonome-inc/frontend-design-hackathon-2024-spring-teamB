import React from "react";
import DiagnosisResultPage from "../Results/index";
import { action } from "@storybook/addon-actions";

export default {
  title: "Pages/DiagnosisResultPage",
  component: DiagnosisResultPage,
};

export const JapaneseResult = () => (
  <DiagnosisResultPage
    result="富山ブラックラーメン"
    language="japanese"
    description="富山ブラックラーメンの説明文"
    shopName="お店の名前1"
    shopLink="https://shop1.example.com"
    onLinkClick={action("Link clicked")} // リンククリックのアクション
  />
);
JapaneseResult.storyName = "診断結果ページ（日本語）";

export const EnglishResult = () => (
  <DiagnosisResultPage
    result="Toyama Black Ramen"
    language="english"
    description="Description of Toyama Black Ramen"
    shopName="Shop Name 1"
    shopLink="https://shop1.example.com"
    onLinkClick={action("Link clicked")} // リンククリックのアクション
  />
);
EnglishResult.storyName = "Analysis Result Page (English)";
