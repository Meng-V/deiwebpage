import Hero from "@/components/Hero";
import Heritage from "@/components/Heritage";
import Luminaries from "@/components/Luminaries";
import DEIGrants from "@/components/DEIGrants";
import { BlockMenu } from "@/components/BlockMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <BlockMenu />
      <Heritage />
      <Luminaries />
      <DEIGrants />
    </>
  );
}