import React from "react";
import styled from "styled-components";

import Button from "../../Atoms/Button";
import Languages from "../../Molecules/Languages";
import Templates from "../../Templates";

import FONTFAMILY from "../../../variables/fontfamily";
import BREAKPOINT from "../../../variables/breakpoint";

import { paths } from "../paths";
import { useRouter } from "next/router";

export const TopPage = () => {
  const router = useRouter();
  const nextPage = () => {
    router.push(paths.question);
  };

  const HowToUsePage = () => {
    router.push(paths.howtouse);
  };

  const Children = (
    <StyledTopContainer>
      <StyledLanguageContainer>
        <Languages />
      </StyledLanguageContainer>
      <StyledTitleContainer>
        <StyledTitleLogo>
          <img src="/assets/lgleft.png" />
          <StyledTitleLogoText>ラーメン診断</StyledTitleLogoText>
          <img src="/assets/rightlg.png" />
        </StyledTitleLogo>
        <StyledMainCopy>好みのラーメンをお選びします</StyledMainCopy>
        <StyledButtonContainer>
          <Button variant="yellow" language="ja" onClick={nextPage}>
            診断スタート
          </Button>
          <Button variant="white" language="ja" onClick={HowToUsePage}>
            使い方
          </Button>
        </StyledButtonContainer>
      </StyledTitleContainer>
    </StyledTopContainer>
  );

  return (
    <>
      <Templates children={Children}></Templates>
    </>
  );
};

export default TopPage;

const StyledTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  justify-content: center;
`;

const StyledLanguageContainer = styled.div`
  margin: 0 0 0 auto;
`;

const StyledTitleContainer = styled.div`
  margin: 6px 0px;
  display: flex;
  flex-direction: column;
`;

const StyledTitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 196px;
  align-items: center;
`;

const StyledTitleLogoText = styled.div`
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-size: 96px;
  font-weight: 700;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-size: 32px;
  }
`;

const StyledMainCopy = styled.div`
  font-family: ${FONTFAMILY.NOTO_SANS};
  font-size: 48px;
  margin: 24px 0px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-size: 16px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center; /* ボタンを中央に配置 */
  max-width: 216px;
  margin: 0 auto;
`;
