import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Example = () => {
  const { t } = useTranslation();
  return (
    <>
      <SampleText>{t("雛形はこれです。")}</SampleText>
      <button>{t("言語切り替えボタン")}</button>
    </>
  );
};
export default Example;

const SampleText = styled.div`
  font-size: 13px;
`;
