import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Example = () => {
  const { t, i18n } = useTranslation();

  // 言語切り替えのイベントハンドラ
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // 言語切り替え
  };
  return (
    <>
      <SampleText>{t("雛形はこれです。")}</SampleText>
      <button onClick={() => handleLanguageChange("en")}>
        {t("言語切り替えボタン")}
      </button>
    </>
  );
};
export default Example;

const SampleText = styled.div`
  font-size: 13px;
`;
