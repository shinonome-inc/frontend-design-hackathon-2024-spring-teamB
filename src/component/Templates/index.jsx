import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FONTFAMILY from "../../variables/fontfamily";

const Templates = ({ children }) => {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMedium(window.innerWidth <= 1064);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logoImagePath = isMedium ? "/assets/logomd.png" : "/assets/logolg.png";
  const borderImagePath = isMedium
    ? "/assets/bordermd.png"
    : "/assets/borderlg.png";

  return (
    <Wrapper>
      <Header>
        <div>
          <Logo src={logoImagePath} alt="Logo" />
        </div>
        <div>
          <Border src={borderImagePath} alt="Border" />
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <div>
          <Border src={borderImagePath} alt="Border" />
        </div>
        <Copyright>©PlayGround FE_DE joint hackathon teamB</Copyright>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
`;

const Logo = styled.img`
  height: 60px;
  width: auto;

  @media (max-width: 1064px) {
    height: 48px;
  }
`;

const Border = styled.img`
  height: 66px;
  width: auto;

  @media (max-width: 1064px) {
    height: 32px;
  }
`;

const Content = styled.div`
  text-align: center;
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SERIF : FONTFAMILY.TIMES};
  font-size: 40px;
  font-weight: 400;

  @media (max-width: 1064px) {
    font-size: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Copyright = styled.div`
  text-align: center;
  font-family: ${FONTFAMILY.TIMES};
  font-size: 24px;

  @media (max-width: 1064px) {
    font-size: 12px;
  }
`;

export default Templates;
