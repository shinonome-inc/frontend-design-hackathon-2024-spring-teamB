import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import translation_en from "../../../i18n/en.json";
import translation_ja from "../../../i18n/ja.json";

const resources = {
  ja: {
    translation: translation_ja,
  },
  en: {
    translation: translation_en,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ja",
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

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
