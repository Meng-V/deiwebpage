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
      <Tab.List
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
      </Tab.List>
      <Tab.Panels>
        {MENU_ITEMS.map((day, dayIndex) => (
          <Tab.Panel
            key={dayIndex}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
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
        "space-y-4 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur"
      )}
    >
      {day.linkGroups.map((timeSlot, timeSlotIndex) => (
        <li key={timeSlot.label} aria-label={`${timeSlot.label}`}>
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-blue-900 tracking-tight">
            <a href={`${timeSlot.link}`} target="_blank">{timeSlot.label}</a>
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
