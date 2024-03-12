import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../../variables/colors";
import FONTFAMILY from "../../../variables/fontfamily";

export const Languages = () => {
  const [isSelecting, setIsSelecting] = useState(false);

  //言語対応のしるしとして一応作りましたが意味はないです
  const [languages, setLanguages] = useState("ja");
  const onClick = () => {
    setIsSelecting(true);
  };

  const isEnglish = () => {
    setLanguages("en");
    setIsSelecting(false);
  };

  const isJapanese = () => {
    setLanguages("ja");
    setIsSelecting(false);
  };

  return (
    <StyledView>
      <StyledBox>
        <img src="/assets/ei-language1.svg" alt="globe image" />
        <StyledSelectingButton onClick={onClick}>
          <StyledText>言語を選択</StyledText>
          <img src="/assets/Chevron-d.svg" alt="gray arrow image" />
        </StyledSelectingButton>
      </StyledBox>
      {isSelecting && (
        <StyledScrollBox>
          <StyledButtonEn onClick={isEnglish}>English</StyledButtonEn>
          <StyledButtonJa onClick={isJapanese}>日本語</StyledButtonJa>
          <StyledButtonExample>Text</StyledButtonExample>
          <StyledButtonExample>Text</StyledButtonExample>
          <StyledButtonExample>Text</StyledButtonExample>
        </StyledScrollBox>
      )}
    </StyledView>
  );
};

export default Languages;

const StyledView = styled.div`
  width: 200px;
  gap: 2px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledBox = styled.div`
  display: flex;
  padding: 4px 8px;
  border-radius: 2px;
`;

const StyledSelectingButton = styled.button`
  display: flex;
  flex-grow: 1;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const StyledText = styled.div`
  flex-grow: 1;
  margin-right: 12px;
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-size: 12px;
  text-align: left;
`;

const StyledScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 8px;
  border-radius: 2px;
  margin-top: 2px;
  max-height: 120px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${COLORS.Light_Gray};
  }
  &::-webkit-scrollbar-thumb {
    height: 20px;
    border-radius: 4px;
    background-color: ${COLORS.Dark_Gray};
  }
`;

const StyledButtonEn = styled.button`
  width: 100%;
  padding: 6px 4px;
  font-family: ${FONTFAMILY.TIMES};
  color: ${COLORS.Dark_Gray};
  cursor: pointer;
  font-size: 12px;
  border: none;
  background-color: transparent;
  text-align: left;
`;

const StyledButtonJa = styled.button`
  width: 100%;
  padding: 6px 4px;
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLORS.Dark_Gray};
  cursor: pointer;
  font-size: 12px;
  border: none;
  background-color: transparent;
  text-align: left;
`;

const StyledButtonExample = styled.button`
  width: 100%;
  padding: 6px 4px;
  font-family: ${FONTFAMILY.NOTO_SANS};
  color: ${COLORS.Dark_Gray};
  cursor: pointer;
  font-size: 12px;
  border: none;
  background-color: transparent;
  text-align: left;
`;
