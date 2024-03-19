import React from "react";
import { HowToUse } from "./index.jsx";

export default {
  title: "Pages/HowToUse",
  component: HowToUse,
};

export const Default = (args) => <HowToUse {...args} />;
Default.args = {
  onClick: () => console.log("clicked"),
};
