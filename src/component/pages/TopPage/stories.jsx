import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "pages/TopPage",
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
