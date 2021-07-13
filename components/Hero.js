import Image from "next/image";
import { Skeleton } from "antd";

const Hero = () => {
  return (
    <div>
      <Image src="/hero.jpg" height="400" width="1200" />
    </div>
  );
};
Hero.skeletonLoader = <Skeleton active />;

export default Hero;
