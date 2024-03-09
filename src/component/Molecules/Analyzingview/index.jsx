import styled from "styled-components";
import React, { useState, useEffect } from "react";

export const Analyzingview = () => {
  const [isMd, setIsMd] = useState(false);
  const leftImage = isMd ? "/assets/leftmd.png" : "/assets/lgleft.png";
  const rightImage = isMd ? "/assets/rightmd.png" : "/assets/rightlg.png";

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

  return (
    <StyledView>
      <img src={leftImage} alt="Left Image" />
      <TextWrapper>診断中...</TextWrapper>
      <img src={rightImage} alt="Right Image" />
    </StyledView>
  );
};

export default Analyzingview;

const StyledView = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Noto Serif JP";
  font-size: 96px;
  font-weight: 700;
  padding: 0 24px 0 24px;
  @media screen and (max-width: 1064px) {
    font-size: 48px;
    font-weight: 400;
    padding: 0px;
  }
`;
