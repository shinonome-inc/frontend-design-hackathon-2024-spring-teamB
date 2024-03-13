import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Templates from "../../Templates";
import FONTFAMILY from "../../../variables/fontfamily";
import ShareBox from "../../Molecules/ShareBox";
import Button from "../../Atoms/Button";
import ramenData from "../../../../src/ramenData.json";

const DiagnosisResultPage = ({ result, language }) => {
  const titleText = language === "japanese" ? "診断結果" : "Result";
  const [isMd, setIsMd] = useState(false);
  const leftImage = isMd ? "/assets/leftmd.png" : "/assets/lgleft.png";
  const [description, setDescription] = useState(""); // 説明文をstateとして管理
  const [shopName, setShopName] = useState(""); // おすすめのお店の名前をstateとして管理
  const [shopLink, setShopLink] = useState(""); // おすすめ店のサイトリンクをstateとして管理

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth <= 1064);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const selectedRamen = ramenData.find((ramen) => ramen.type === result);
    if (selectedRamen) {
      setDescription(selectedRamen.description[language]);
      setShopName(selectedRamen.shopName[language]);
      setShopLink(selectedRamen.shopLink);
    } else {
      setDescription("");
      setShopName("");
      setShopLink("");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [result, language]);

  const shopTitleText =
    language === "japanese" ? "おすすめのお店" : "Recommended shop";
  const shopLinkText =
    language === "japanese"
      ? "おすすめ店のサイトを見る"
      : "Visit the recommended shop's website";

  return (
    <Templates>
      <DiagnosisResultTitle>{titleText}</DiagnosisResultTitle>
      <RamenName>{result}</RamenName>
      <ImagesContainer>
        <LeftImage src={leftImage} alt="Left Image" />
        <Description>{description}</Description>
      </ImagesContainer>
      <ShopInfo>
        <ShopTitle>{shopTitleText}</ShopTitle>
        <ShopName>{shopName}</ShopName>
        <ShopLink href={shopLink} target="_blank">
          {shopLinkText}
        </ShopLink>
      </ShopInfo>
      <ShareBox />
      <ButtonWrapper>
        <Button onClick="{}" variant="yellow" language={language}>
          もう一度診断する
        </Button>
        <Button variant="white" language={language}>
          トップページ
        </Button>
      </ButtonWrapper>
    </Templates>
  );
};

const DiagnosisResultTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const RamenName = styled.h2`
  font-size: 40px;
  text-align: center;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
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

const Description = styled.div`
  font-size: 24px;
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SERIF : FONTFAMILY.TIMES};
  margin-left: 20px;
`;

const ShopInfo = styled.div`
  margin-top: 20px;
`;

const ShopTitle = styled.h3`
  font-size: 24px;
`;

const ShopName = styled.p`
  font-size: 24px;
`;

const ShopLink = styled.a`
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 12px;
  padding: 0 0 40px 0;
`;

export default DiagnosisResultPage;
