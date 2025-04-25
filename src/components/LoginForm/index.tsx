import { memo } from "react";
import type { FC, ReactNode } from "react";
import { Form, Input, Button, Message } from "@arco-design/web-react";
import { useNavigate } from "react-router-dom";
const FormItem = Form.Item;

import LoginFormWrapper from "./style";
import userRules from "@/config";

interface IProps {
  children?: ReactNode;
}

const LoginForm: FC<IProps> = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <LoginFormWrapper>
      <Form
        form={form}
        style={{ width: 320 }}
        wrapperCol={{ span: 24 }}
        autoComplete="off"
        onValuesChange={(v, vs) => {
          console.log(v, vs);
        }}
        onSubmit={(v) => {
          console.log(v);
          Message.success("success");
        }}
      >
        <FormItem field="email" label="邮箱" rules={userRules.email}>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem field="password" label="密码" rules={userRules.password}>
          <Input placeholder="请输入密码" />
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" long>
            登录
          </Button>
        </FormItem>
        <div
          className="flex justify-end hover:cursor-pointer font-bold"
          onClick={() => navigate("/login")}
        >
          扫码登录
        </div>
      </Form>
    </LoginFormWrapper>
  );
};

export default memo(LoginForm);
