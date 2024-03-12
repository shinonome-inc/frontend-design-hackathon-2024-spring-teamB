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
  align-self: stretch;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`;

const StyledPolygon = styled.div`
  width: 16px;
  height: 24px;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  background-color: ${COLOR.WHITE};
`;

const StyledText = styled.div`
  font-size: 36px;
  line-height: normal;
  padding: 40px 24px;
  margin-left: -2px;
  gap: 8px;
  flex: 100;
  border-radius: 60px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.25);
  font-color: ${COLOR.BLACK};
  font-family: ${FONTFAMILY.NOTO_SANS};
  background-color: ${COLOR.WHITE};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 24px;
    font-size: 24px;
  }
`;
