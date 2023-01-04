import { createButton } from "react-social-login-buttons";

const config = {
  text: "login with apple",
  icon: "apple",
  iconFormat: (name) => `fa fa-${name}`,
  style: { background: "#ffffff" },
  activeStyle: { background: "#ffffff" },
};
const appleBtn = createButton(config);
export default appleBtn;
