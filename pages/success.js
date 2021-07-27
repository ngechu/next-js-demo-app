import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();
  return (
    <Result
      icon={<SmileOutlined />}
      title="Great, you can now continue shopping!"
      extra={
        <Button onClick={() => router.push("/")} type="primary">
          Continue Shopping
        </Button>
      }
    />
  );
};

export default Success;
