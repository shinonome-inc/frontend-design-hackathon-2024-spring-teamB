import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
        value={`ラーメン診断で「ラーメン」をおすすめしてもらいました！あなたも診断してみよう！　#ラーメン診断　#おすすめラーメン \nhttp://~~~`}
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
  flex-direction: column;
  padding: 10px 40px;
  gap: 4px;
`;

const ShareText = styled.div`
  display: flex;
  font-size: 16px;
`;

const InputBox = styled.input`
  display: flex;
  flex-grow: 1;
  font-size: 16px;
  justify-content: space-between; /* コピーボタンを右寄せにするために追加 */
  min-height: 100px;
  align-items: flex-start;
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SANS : FONTFAMILY.TIMES};
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 1064px) {
    font-size: 12px;
  }
`;

const CopyButton = styled.button`
  display: flex;
  align-self: flex-end; /* コピーボタンを右寄せにするために追加 */
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
