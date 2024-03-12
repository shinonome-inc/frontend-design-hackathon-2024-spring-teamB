import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Templates from "../../Templates";
import FONTFAMILY from "../../../variables/fontfamily";
import ShareBox from "../../Molecules/ShareBox";

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

    // 説明文、お店の名前、お店のサイトリンクを設定
    switch (result) {
      case "富山ブラックラーメン":
        setDescription(
          language === "japanese"
            ? "富山ブラックラーメンの説明文"
            : "Description of Toyama Black Ramen"
        );
        setShopName(language === "japanese" ? "お店の名前1" : "Shop Name 1");
        setShopLink("https://shop1.example.com");
        break;
      case "札幌ラーメン":
        setDescription(
          language === "japanese"
            ? "札幌ラーメンの説明文"
            : "Description of Sapporo Ramen"
        );
        setShopName(language === "japanese" ? "お店の名前2" : "Shop Name 2");
        setShopLink("https://shop2.example.com");
        break;
      // 他のラーメンの種類に対する説明文、お店の名前、お店のサイトリンクもここに追加する
      default:
        setDescription("");
        setShopName("");
        setShopLink("");
        break;
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [result, language]); // resultとlanguageが変更された時のみeffectを実行

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
      <ShareBox/>
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

export default DiagnosisResultPage;
