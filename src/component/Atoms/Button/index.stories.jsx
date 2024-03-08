import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "../Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "テキスト",
  onClick: action("clicked"),
  variant: "default",
};

export const Yellow = Template.bind({});
Yellow.args = {
  children: "テキスト",
  onClick: action("clicked"),
  variant: "yellow",
};
