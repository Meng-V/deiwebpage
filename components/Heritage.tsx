"use client";

import Image from "next/image";
import Button from "@/utils";
import { heritage } from "@/constants/heritage";


function MonthlyPrograms() {
  return (
    <div className="flex flex-1 items-start justify-center">
      <ul
        role="list"
        className="
        grid grid-cols-2 md:grid-cols-3 xl:gap-x-8
        gap-4 sm:gap-x-6  w-full"
      >
        {heritage.map((file) => (
          <li key={file.title} className="relative">
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 
            focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <Image
                src={file.img_source}
                alt={file.title}
                className="pointer-events-none object-cover group-hover:opacity-75 group-hover:scale-110 ease-in duration-75"
                width={200}
                height={100}
              />
              <a href={file.link} target="_blank">
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                ></button>
                <span className="sr-only">View details for {file.title}</span>
              </a>
            </div>
            <p className="pointer-events-none mt-2 block text-sm font-medium text-miami_accent_red">
              {file.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Heritage = () => {
  return (
    <section className="section-container">
      <h2>History and Heritage Months</h2>
      <div className="max-container relative w-full flex flex-col py-12 lg:flex-row gap-12">
        <div className="flex w-full flex-1 flex-col items-start self-baseline justify-center gap-4 lg:gap-8">
          <span>
            Miami University Libraries has joined the{" "}
            <a
              href="https://miamioh.edu/transformational-inclusive-excellence/index.html"
              target="_blank"
            >
              Office of Transformational and Inclusive Excellence
            </a>{" "}
            in celebrating history and heritage weeks, months, and special
            events. One of the primary ways the Libraries observe these
            occasions is through resource guides. Each history and heritage
            guide includes books, articles, movies, databases, and more in order
            to provide resources to engage with diverse cultures.
          </span>
          <span>
            In addition, the Libraries coordinate displays to showcase some of
            the materials in the Libraries' collection.
          </span>
          <span>
            More information on heritage programming, including a calendar of
            observances, can be found below.
          </span>

          <div className="flex items-start justify-start w-full flex-col gap-3 whitespace-nowrap">            
            <a href="https://www.miamioh.edu/diversity-inclusion/programs-resources/history-heritage-months/" target="_blank">
              <Button
                type="button"
                title="More information"
                variant="btn_dark_green_outline"
                full
              />
            </a>
          </div>
        </div>

        <MonthlyPrograms />
      </div>
    </section>
  );
};

export default Heritage;
