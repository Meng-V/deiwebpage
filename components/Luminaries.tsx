import { Block_Menu } from "@/constants";
import Image from "next/image";

const Luminaries = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-items-end">
        {/* left */}
        <div className="flex flex-1 lg:min-h-[900px] bg-slate-500">
        </div>
        {/* right */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64 ">OhioLink Luminaries</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20">
            {Block_Menu.map((menu) => (
              <MenuItem
                title={menu.title}
                key={menu.title}
                icon={menu.icon}
                variant={menu.variant}
                menu_item={menu.menu_item}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
type MenuItem = {
  title: string;
  icon: string;
  variant: string;
  menu_item: {
    title: string;
    link: string;
  }[];
};
const MenuItem = ({ title, icon, variant, menu_item }: MenuItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className={`rounded-full padding-4 lg:p-7 bg-${variant}-50`}>
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <ul className="regular-16 mt-5 text-white lg:mt-[30px] lg:bg-none">
        {menu_item.map((item, index) => (
          <li
            key={index}
            className="regular-16 mt-5 text-white lg:mt-[30px] lg:bg-none"
          >
            <a href={item.link} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default Luminaries;
