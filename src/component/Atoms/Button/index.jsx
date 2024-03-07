import React from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";

export const Button = (props) => {
  return (
    <Button onClick={props.onClick}>
      <img src={plus} className="button" />
      <div className="button-text">テキスト</div>
    </Button>
  );
};
export default Button;

const Button = styled.button`
  display: flex;
  padding: 36px 20px;
  gap: 10px;
  background: ${COLOR.YELLOW};
  border: none;
  border-radius: 44px;
  transition: 0.2s;
  aline-items: center;

  .button {
    width: 168px;
    height: 78px;
  }

  .button-text {
    font-family: ${FONTFAMILY.NOTO_SERIF};
    text: 24px;
    color: ${COLOR.Night_Rider};
  }
`;
