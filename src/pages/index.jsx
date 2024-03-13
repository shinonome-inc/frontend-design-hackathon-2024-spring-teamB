import { paths } from '../../paths';
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Button from "../../Atoms/Button";
import Languages from "../../Molecules/Languages";
import Templates from "../component/Templates";
import FONTFAMILY from "../../variables/fontfamily";
import BREAKPOINT from "../../variables/breakpoint";

export const TopPage = () => {
  const IndexPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push(paths.question1);
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
          <Button variant="yellow" language="ja" onClick={onClick}>
            診断スタート
          </Button>
          <Button variant="white" language="ja" onClick={onclick}>
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
  align-items: center;
`;

const StyledTitleLogo = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 196px;
  align-items: center;

  @media (max-width: 1064px) {
    img:first-child {
      content: url("/assets/leftmd.png");
    }
    img:last-child {
      content: url("/assets/rightmd.png");
    }
  }
`;

const StyledTitleLogoText = styled.div`
  font-family: ${FONTFAMILY.NOTO_SERIF};
  font-size: 96px;
  font-weight: 700;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-size: 32px;
  }
`;

const StyledMainCopy = styled.div`
  font-family: ${FONTFAMILY.NOTO_SERIF};
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
  padding: 0 0 40px 0;
`;
