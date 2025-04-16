import { FC } from "react";

import { LoginWrapper } from "./style";
import { Button } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";

const Login:FC = () => {
  const navigate = useNavigate();
  return (
    <LoginWrapper>
      <h2 className="title">login</h2>
      <Button type='primary' onClick={() => navigate("/")}>to home</Button>
    </LoginWrapper>
  );
};

export default Login;
