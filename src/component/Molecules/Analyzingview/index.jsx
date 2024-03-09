import styled from "styled-components";
import React, { useState, useEffect } from "react";

export const Analyzingview = () => {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth <= 1064);
    };

    handleResize(); // コンポーネントがマウントされた際に1度呼び出して初期値を設定
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledView>
      {isMd ? <img src="" /> : <img src="./lgleft.png" />}
      <TextWrapper>診断中</TextWrapper>
    </StyledView>
  );
};

export default Analyzingview;

const StyledView = styled.div`
  display: flex;
  flex-direction: row;A
`;
const TextWrapper = styled.p``;
