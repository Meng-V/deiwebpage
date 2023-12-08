"use client";

import { useEffect, useState, Fragment } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

import { BackgroundImage } from "@/utils";
import { Container } from "@/utils";
import { MenuProps } from "@/types";
import { MENU_ITEMS } from "@/constants";

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {MENU_ITEMS.map((item, itemIndex) => (
              <div
                key={item.title}
                className={clsx(
                  "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                  itemIndex !== selectedIndex && "opacity-70"
                )}
              >
                {item.title}
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {MENU_ITEMS.map((item) => (
          <Tab.Panel
            key={item.title}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={item} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function DaySummary({ day }: { day: MenuProps }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900 h-24 xl:h-16 2xl:h-8">
        {day.title}
      </h3>
    </>
  );
}

function TimeSlots({ day, className }: { day: MenuProps; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        "space-y-4 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
      )}
    >
      {day.linkGroups.map((timeSlot, timeSlotIndex) => (
        <li key={timeSlotIndex}>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <a href={timeSlot.link ?? undefined}>
            <h4 className="text-lg font-semibold tracking-tight text-blue-900">
              {timeSlot.label}
            </h4>
          </a>
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 items-start">
      {MENU_ITEMS.map((item) => (
        <section key={item.title}>
          <DaySummary day={item} />
          <TimeSlots day={item} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function BlockMenu() {
  return (
    <>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </>
  );
}
