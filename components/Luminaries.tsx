"use client";

import Image from "next/image";

import { useEffect, useId, useState } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { DiamondIcon } from "@/utils";

import { LUMSTUDENTS } from "@/constants";

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

const Luminaries = () => {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section className="section-container">
      <ImageClipPaths id={id} />
      <div className="mx-auto">
        <h2>OhioLINK Luminaries Program</h2>
        <div className="mt-4">
          <p>
            The Luminaries program is an effort coordinated by OhioLINK, Ohio’s
            statewide academic library consortium, that aims to increase
            representation in library and information sciences careers among
            historically underrepresented populations.{" "}
          </p>
          <p>
            Through paid, resume-building student employment and support from a
            mentor, Luminaries gain a broad introduction to the library and
            information studies profession by rotating through each of the
            different departments within the Libraries. This exposure to the
            wide variety of roles and specializations can influence a
            participant’s decision to pursue a career in Library and Information
            Science; the hands-on training and networking opportunities bolster
            Luminaries’ abilities to establish their careers.{" "}
          </p>
          <p>
            Miami University Libraries joined the OhioLINK Luminaries program in
            2021. Read about the experience of one of the inaugural students,
            Hal Howard, in{" "}
            <a href="https://www.lib.miamioh.edu/2022-04-08-reflections-from-a-luminary-a-student-employee-blog">
              their blog
            </a>
            .{" "}
          </p>
          <p>
            If you would like to learn more about the Luminaries program in
            Miami University Libraries, contact{" "}
            <a href="mailto:irwinkr@miamioh.edu">Ken Irwin</a>.
          </p>
        </div>
      </div>
      <Tab.Group
        as="div"
        className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
        vertical={tabOrientation === "vertical"}
      >
        <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
          <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
          <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
            {({ selectedIndex }) => (
              <>
                {LUMSTUDENTS.map((lum, lumIndex) => (
                  <div key={lumIndex} className="relative lg:pl-8">
                    <DiamondIcon
                      className={clsx(
                        "absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block",
                        lumIndex === selectedIndex
                          ? "fill-blue-600 stroke-blue-600"
                          : "fill-transparent stroke-slate-400"
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          "font-mono text-sm",
                          lumIndex === selectedIndex
                            ? "text-blue-600"
                            : "text-slate-500"
                        )}
                      >
                        <Tab className="ui-not-focus-visible:outline-none">
                          <span className="absolute inset-0" />
                          {lum.year}
                        </Tab>
                      </div>
                      <div className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900 text-wrap-balance">
                        {lum.name}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Tab.List>
        </div>
        <Tab.Panels className="lg:col-span-3">
          {LUMSTUDENTS.map((lum) => (
            <Tab.Panel
              key={lum.name}
              className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
              unmount={false}
            >
              {lum.display.map((person, personIndex) => (
                <div key={personIndex}>
                  <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                    <div
                      className={clsx(
                        "absolute bottom-6 left-0 right-4 top-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6",
                        [
                          "border-blue-300",
                          "border-indigo-300",
                          "border-sky-300",
                        ][personIndex % 2]
                      )}
                    />
                    <div
                      className="absolute inset-0 bg-indigo-50"
                      style={{ clipPath: `url(#${id}-${personIndex % 2})` }}
                    >
                      <Image
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                        src={person.image}
                        alt=""
                        priority
                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">
                    {person.major}
                  </p>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Luminaries;
