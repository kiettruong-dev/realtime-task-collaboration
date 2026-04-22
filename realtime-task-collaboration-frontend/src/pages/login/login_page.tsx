import { useAuth } from "@/hooks";
import { Button, Card, Form, Input } from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onFinish = (values: any) => {
    login(values);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card title="Login" style={{ width: 350 }}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
          <div style={{ marginTop: 10 }}>
            Don't have an account?{" "}
            <Typography.Link onClick={() => navigate("/register")}>
              Register
            </Typography.Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
