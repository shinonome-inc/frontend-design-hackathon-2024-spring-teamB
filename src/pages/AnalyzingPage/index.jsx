import Analyzingview from "../../component/Molecules/Analyzingview";
import styled, { keyframes } from "styled-components";
import Templates from "../../component/Templates";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AnalyzingPage = () => {
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      router.push();
    }
  }, [redirect, router]);

  return (
    <Templates>
      <Content>
        <ImageAvoveWrapper>
          <ImgLoop src="/assets/horizontal-images-view.png" />
        </ImageAvoveWrapper>
        <Analyzingview />
        <ImageWrapper>
          <ImgLoop src="/assets/horizontal-images-view.png" reversed />
        </ImageWrapper>
      </Content>
    </Templates>
  );
};
export default AnalyzingPage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageAvoveWrapper = styled.div`
  margin-top: -6px; /* 余白を埋めるためのマージンを追加 */
  > img {
    @media (max-width: 1064px) {
      height: 80px;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: -10px;
  > img {
    @media (max-width: 1064px) {
      height: 80px;
    }
  }
`;

const loop = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const loopReversed = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(90%);
  }
`;

const ImgLoop = styled.img`
  width: 100wv;
  animation: ${loop} 50s linear infinite;

  ${ImageWrapper} & {
    animation: ${loopReversed}  50s linear infinite;
  }
`;
