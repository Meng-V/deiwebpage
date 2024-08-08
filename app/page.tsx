import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Luminaries from "@/components/Luminaries";
import DEIGrants from "@/components/DEIGrants";
import { BlockMenu } from "@/components/BlockMenu";

export default function Home() {
  return (
    <div className="leading-7">
      <Hero key="hero" />
      <BlockMenu key="blockmenu" />
      <Heritage key="heritage" />
      <Luminaries key="luminaries" />
      <DEIGrants key="deigrants" />
    </div>
  );
}