import styled from "styled-components";
import Templates from "../../Templates";
import React, { useEffect, useState } from "react";
import FONTFAMILY from "../../../variables/fontfamily";
import { Question } from "../../Molecules/Question";
import Button from "../../Atoms/Button";

const QuestionPage = ({ language }) => {
  const [isMd, setIsMd] = useState(false);
  const leftImage = isMd ? "/assets/leftmd.png" : "/assets/lgleft.png";
  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth <= 1064);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const questionText = language === "english" ? "Question 1" : "質問1";
  const backButton =
    language === "english" ? "Back to Top" : "トップページへ戻る";

  return (
    <Templates>
      <TextWrapper>{questionText}</TextWrapper>
      <Content>
        <LeftImage src={leftImage} alt="Left Image" />
        <QuestionWrapper>
          <Question questionText="aaaaaaaaaaaaaaaaaaaaaaaaa" />
        </QuestionWrapper>
      </Content>
      <YellowButtonWrapper>
        <Button children="選択肢1" variant="yellow" />
        <Button children="選択肢2" variant="yellow" />
      </YellowButtonWrapper>
      <ButtonWrapper>
        <Button children={backButton} variant="default" />
      </ButtonWrapper>
    </Templates>
  );
};
export default QuestionPage;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const LeftImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 540px;

  @media (max-width: 1064px) {
    max-width: 334px;
    max-height: 223px;
  }
`;

const QuestionWrapper = styled.div`
  margin-left: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${FONTFAMILY.NOTO_SERIF};
  font-size: 96px;
  font-weight: 700;
  padding: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const YellowButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
