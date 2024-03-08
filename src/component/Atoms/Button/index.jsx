import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FONTFAMILY from "../../../variables/fontfamily";

const Button = ({ children, onClick, variant, language }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} language={language}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["white", "yellow"]),
  language: PropTypes.oneOf(["english", "japanese"]),
};

Button.defaultProps = {
  onClick: () => {},
  variant: "white",
  language: "english",
};

const StyledButton = styled.button`
  font-size: ${(props) => (props.language === "english" ? "30px" : "24px")};
  padding: ${(props) =>
    props.variant === "yellow" ? "20px 36px" : "16px 32px"};
  background-color: ${(props) =>
    props.variant === "yellow" ? "#F2D600" : "transparent"};
  border: none;
  border-radius: 44px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.variant === "yellow"
      ? "0px 6px 10px rgba(0, 0, 0, 0.3)"
      : "0px 2px 6px rgba(0, 0, 0, 0.3)"};
  font-family: ${(props) =>
    props.language === "japanese" ? FONTFAMILY.NOTO_SERIF : FONTFAMILY.TIMES};
`;

export default Button;
