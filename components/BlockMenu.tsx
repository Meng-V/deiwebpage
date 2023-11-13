import { FEATURES } from "@/constants";
import Image from "next/image";

const BlockMenu = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-items-end block-menu">
        <div className="z-20 flex w-full flex-col">
          <ul className="mt-8 grid gap-10 md:grid-cols-3 lg:mt-10 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                title={feature.title}
                key={feature.title}
                icon={feature.icon}
                variant={feature.variant}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
type FeatureItem = {
  title: string;
  icon: string;
  variant: string;
  description: string;
};
const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full padding-4 lg:p-7 bg-${variant}-50`}>
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};
export default BlockMenu;
