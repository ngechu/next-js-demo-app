import Image from "next/image";
import { Skeleton } from "antd";

const Hero = () => {
  return (
    <div>
      <Image src="/hero.jpg" height="400" width="1500" />
    </div>
  );
};

export default Hero;
