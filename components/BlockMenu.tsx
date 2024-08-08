"use client";

import { useEffect, useState, Fragment } from "react";
import { Tab, TabList, TabGroup, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import { BackgroundImage } from "@/utils";
import { Container } from "@/utils";
import { MenuProps } from "@/types";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";

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
    <TabGroup
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <TabList
        className="
      flex gap-x-0
      gap-y-10 overflow-x-auto pb-4 pl-4 
      sm:flex-col sm:gap-x-4 sm:pb-0 sm:pl-0 sm:pr-8"
      >
        {({ selectedIndex }) => (
          <>
            {MENU_ITEMS.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={clsx(
                  "relative w-1/3 flex-none px-3 sm:w-auto sm:pr-0",
                  dayIndex !== selectedIndex && "opacity-70"
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    title: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.title}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {MENU_ITEMS.map((day, dayIndex) => (
          <TabPanel
            key={dayIndex}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

function DaySummary({ day }: { day: MenuProps }) {
  return (
    <>
      <h3
        className="
      text-center text-lg font-semibold lg:text-2xl 
      tracking-tight text-blue-900
      h-10 2xl:h-8"
      >
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
        "space-y-4 bg-white/60 px-10 py-8 text-center shadow-xl shadow-blue-900/5 backdrop-blur divide-y divide-solid"
      )}
    >
      {day.linkGroups.map((timeSlot, timeSlotIndex) => (
        <li key={timeSlot.label} aria-label={`${timeSlot.label}`}>
          <h4 className="tracking-tight mt-4">
            <Link
              className="visited:text-miami_accent_red"
              href={`${timeSlot.link}`}
              target="_blank"
            >
              {timeSlot.label}
            </Link>
          </h4>
        </li>
      ))}
    </ol>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 items-start">
      {MENU_ITEMS.map((day, dayIndex) => (
        <div key={dayIndex}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </div>
      ))}
    </div>
  );
}

export function BlockMenu() {
  return (
    <div className="relative my-14 sm:mt-24">
      <BackgroundImage position="right" />
      <Container className="relative">
        <ScheduleTabbed />
        <ScheduleStatic />
      </Container>
    </div>
  );
}
