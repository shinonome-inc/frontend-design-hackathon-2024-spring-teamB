import React from "react";
import ShareBox from "./index";

export default {
  title: "Molecules/ShareBox",
  component: ShareBox, // ShareBox コンポーネントを指定する
};

const Template = (args) => <ShareBox {...args} />; // Template 内でも ShareBox を使用する

export const Default = Template.bind({});
