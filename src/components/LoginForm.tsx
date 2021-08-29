import { useState } from "react";
import Swipeable from "react-swipeable-views";
import LoginOptions from "./LoginOptions";
import LoginByNumber from "./LoginByNumber";
import VerifyCode from "./VerifyCode";

export default function LoginForm() {
  const [pageIndex, ] = useState(0);
  return (
    <Swipeable index={pageIndex}>
      <LoginOptions />
      <LoginByNumber />
      <VerifyCode />
    </Swipeable>
  );
}
