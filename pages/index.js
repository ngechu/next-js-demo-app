import Image from "next/image";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Link from "next/link";
import { Skeleton } from "antd";
export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="">
        <Hero />
      </div>
      <div className="h-180 p-6 flex flex-row flex-wrap justify-around  content-center gap-6 box-border">
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
        <Link href="#">
          <a>
            <Card title="Iphone X" category="Built by passion" price={2000} />
          </a>
        </Link>
      </div>
      <div className="h-80">
        <Image
          className="object-cover"
          src="/rolex.jpg"
          height="300 "
          width="1200"
        />
      </div>
    </div>
  );
}
