import styled from "styled-components";
import Templates from "../../component/Templates";
import React, { useEffect, useState } from "react";
import FONTFAMILY from "../../variables/fontfamily";
import { Question } from "../../component/Molecules/Question";
import Button from "../../component/Atoms/Button";
import { useRouter } from "next/router";
import { paths } from "../../paths";

const QuestionPage = ({ language }) => {
  const router = useRouter();
  const onTopClick = () => {
    router.push(paths.index);
  };
  const on1Click = () => {
    router.push(paths.question1);
  };
  const on2Click = () => {
    router.push(paths.question2);
  };
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
          <Question questionText="好きなラーメンのスープの味わいの系統は？" />
        </QuestionWrapper>
      </Content>
      <YellowButtonWrapper>
        <Button children="濃厚" variant="yellow" onClick={on1Click}/>
        <Button children="あっさり" variant="yellow" onClick={on2Click}/>
      </YellowButtonWrapper>
      <ButtonWrapper>
        <Button children={backButton} variant="default" onClick={onTopClick} />
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
  padding: 0 0 40px 0;
`;
const YellowButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
