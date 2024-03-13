import React, { Children } from "react";
import styled from "styled-components";
import Templates from "../../Templates";
import Button from "../../Atoms/Button";
import FONTFAMILY from "../../../variables/fontfamily";
import BREAKPOINT from "../../../variables/breakpoint";
import PropTypes from "prop-types";
import COLOR from "../../../variables/colors";

export const HowToUse = ({ onClick, language }) => {
  const Children = (
    <StyledHowToUseContainer>
      <StyledUseContainer>
        <StyledTitle language={language}>使い方</StyledTitle>
        <StyledTextContainer>
          <StyledLogContainer>
            <img src="/assets/lgleft.png" alt="staminakun" />
          </StyledLogContainer>
          <StyledManual>
            やっほー！ボクはスタミナ君だよ。いくつかの質問に答えると、あなたが好きそうな東京のラーメン屋を紹介することが出来るよ。
            <br />
            「診断スタート」ボタンから、さっそく診断を始めてみよう！
            <br />
            診断結果には、あなたにおすすめするラーメン屋と、そのURLが表示されるよ。気になったらぜひ行ってみてね！
          </StyledManual>
        </StyledTextContainer>
      </StyledUseContainer>
      <StyledButtonContainer>
        <Button variant="yellow" language="ja">
          診断スタート
        </Button>
        <Button variant="white" language="ja">
          トップページ
        </Button>
      </StyledButtonContainer>
    </StyledHowToUseContainer>
  );

  return (
    <>
      <Templates children={Children}></Templates>
    </>
  );
};

export default HowToUse;

HowToUse.PropTypes = {
  onClick: PropTypes.func,
  language: PropTypes.oneOf(["english", "japanese"]),
};

const StyledHowToUseContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 100px;
`;

const StyledUseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const StyledTitle = styled.div`
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SERIF : FONTFAMILY.TIMES};
  font-weight: 600;
  font-size: 64px;
  font-color: ${COLOR.BLACK};

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    height: 48px;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  padding: 0px 40px;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

const StyledLogContainer = styled.div`
  width: 228px;
  height: 203px;
  //background-color:          //見つけられなかった
`;

const StyledManual = styled.div`
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SANS : FONTFAMILY.TIMES};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  font-color: ${COLOR.BLACK};
`;

const StyledButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;