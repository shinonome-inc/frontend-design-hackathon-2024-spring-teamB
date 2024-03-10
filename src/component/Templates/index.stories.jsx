import React from "react";
import Templates from "./";

export default {
  title: "Templates",
  component: Templates,
};

const Template = (args) => <Templates {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h1>Page Content</h1>
    </div>
  ),
  logoImagePath: "/assets/logolg.png",
};
