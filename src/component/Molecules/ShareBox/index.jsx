import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Templates from "../../Templates";
import FONTFAMILY from "../../../variables/fontfamily";
import { JapaneseResult, EnglishResult } from "../../pages/Results/index";
import contentCopyIcon from "../../../../public/assets/content_copy.svg";

const ShareBox = ({ language }) => {
  const [recommendedRamen, setRecommendedRamen] = useState("");

  useEffect(() => {
    // 言語に応じて、結果コンポーネントからおすすめのラーメンを取得
    const result = language === "japanese" ? JapaneseResult() : EnglishResult();
    setRecommendedRamen(result.props.result);
  }, [language]);

  return (
    <Templates>
      <Wrapper>
        <ShareText>
          {language === "english"
            ? "Share this on social media!"
            : "シェア用SNSテキスト"}
        </ShareText>
        <InputBox
          value={`ラーメン診断で「${recommendedRamen}ラーメン」をおすすめしてもらいました！あなたも診断してみよう！　#ラーメン診断　#おすすめラーメン\nhttp://~~~`}
          readOnly
        />
        <CopyButton onClick={handleCopyClick}>
          <CopyIcon src={contentCopyIcon} alt="Copy Icon" />{" "}
        </CopyButton>
      </Wrapper>
    </Templates>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ShareText = styled.div`
  font-size: 16px;
`;

const InputBox = styled.input`
  flex-grow: 1;
  font-size: 16px;
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SANS : FONTFAMILY.TIMES};
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CopyButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default ShareBox;
