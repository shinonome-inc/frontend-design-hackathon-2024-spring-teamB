import React from "react";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/fontfamily";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/colors";

export const Question = ({ onClick }) => {
  return (
    <StyledQuestion onClick={onClick}>
      <StyledPolygon></StyledPolygon>
      <StyledText>ここに質問が入ります</StyledText>
    </StyledQuestion>
  );
};

const StyledQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -2px;
  align-self: stretch;
  background-color: black; //見やすいように仮設定

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 366px;
  }
`;

const StyledPolygon = styled.div`
  width: 16px;
  height: 24px;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  //transform: rotate(90deg);
  //box-sizing: border-box;
  background-color: ${COLOR.WHITE};
`;

const StyledText = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: flex-start;
  padding: 40px 24px;
  font-size: 36px;
  line-height: normal;
  gap: 8px;
  flex: 100;
  border-radius: 60px;
  //box-sizing: border-box;
  font-color: ${COLOR.BLACK};
  font-family: ${FONTFAMILY.NOTO_SANS};
  background-color: ${COLOR.WHITE};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 24px;
    font-size: 24px;
    gap: 8px;
  }
`;
