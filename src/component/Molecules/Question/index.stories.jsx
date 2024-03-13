import React from "react";
import { Question } from "./index.jsx";

export default {
  title: "Molecules/Question",
  component: Question,
};

export const Default = (args) => <Question {...args} />;
Default.args = {
  onClick: () => console.log("clicked"),
};
