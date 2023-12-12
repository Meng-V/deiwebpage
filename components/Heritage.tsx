"use client";

import Image from "next/image";
import Button from "@/utils";
import { Carousel } from "flowbite";

const Heritage = () => {
  return (
    <section>
      <h2>Heritage Programming</h2>
      <div className="get-app">
        <div className="flex w-full flex-1 flex-col items-start justify-center gap-8">
          <span>
            Miami University Libraries has joined the Office of Institutional
            Diversity & Inclusion in celebrating history and heritage weeks,
            months, and special events. One of the primary ways the Libraries
            observe these occasions is through resource guides. Each history and
            heritage guide includes books, articles, movies, databases, and more
            in order to provide resources to engage with diverse cultures.
          </span>
          <span>
            In addition, the Libraries coordinate displays to showcase some of
            the materials in the Libraries' collection.
          </span>
          <span>
            More information on heritage programming, including a calendar of
            observances, can be found here.
          </span>

          <div className="flexStart w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a href="https://www.miamioh.edu/diversity-inclusion/index.html">
              <Button
                type="button"
                title="Office of Transformational and Inclusive Excellence"
                variant="btn_white_no_left_padding"
              />
            </a>
            <a href="https://www.miamioh.edu/diversity-inclusion/programs-resources/history-heritage-months/">
              <Button
                type="button"
                title="More information"
                icon="/android.svg"
                variant="btn_dark_green_outline"
                full
              />
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end bg-slate-500">
          something here
        </div>
      </div>
    </section>
  );
};

export default Heritage;
