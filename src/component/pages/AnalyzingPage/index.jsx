import Analyzingview from "../../../component/Molecules/Analyzingview";
import styled from "styled-components";
import Templates from "../../Templates";
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
        <ImageWrapper>
          <img src="/assets/horizontal-images-view.png" />
        </ImageWrapper>
        <Analyzingview />
        <ImageWrapper>
          <img src="/assets/horizontal-images-view.png" />
        </ImageWrapper>
      </Content>
    </Templates>
  );
};
export default AnalyzingPage;

const StyledPage = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageWrapper = styled.div`
  background-repeat: repeat-x;
`;
