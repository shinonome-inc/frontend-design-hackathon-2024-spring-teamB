import { Button } from "./index";

export default { component: Button };

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
