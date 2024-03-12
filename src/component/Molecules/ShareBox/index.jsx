import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Templates from "../../Templates";
import FONTFAMILY from "../../../variables/fontfamily";

const ShareBox = ({ language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = `ラーメン診断で「ラーメン」をおすすめしてもらいました！あなたも診断してみよう！　#ラーメン診断　#おすすめラーメン\nhttp://~~~`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopied(true))
      .catch((error) => console.error("Error copying text: ", error));
  };

  return (
      <Wrapper>
        <ShareText>
          {language === "english"
            ? "Share this on social media!"
            : "シェア用SNSテキスト"}
        </ShareText>
        <InputBox
          value={`ラーメン診断で「ラーメン」をおすすめしてもらいました！あなたも診断してみよう！　#ラーメン診断　#おすすめラーメン\nhttp://~~~`}
          readOnly
        />
        <CopyButton onClick={handleCopyClick}>
          {copied ? (
            "Copied!"
          ) : (
            <CopyIcon src="/assets/content_copy.svg" alt="Copy Icon" />
          )}
        </CopyButton>
      </Wrapper>
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
