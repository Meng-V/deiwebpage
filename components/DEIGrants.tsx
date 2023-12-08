"use client";

import { grants } from "@/constants";
import Image from "next/image";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  return (
    <section className="bg-white section-container">
      <div>
        <h2>DEI Grants Program</h2>
        <p className="mt-4 mx-8">
          The Diversity, Equity, and Inclusion (DEI) Grant Program is an
          opportunity for the Miami University Libraries community to seek funds
          up to $1500 for DEI-focused ideas and projects that are not regularly
          funded through departmental budgets. We welcome grant ideas from all
          members of the Miami Community in collaboration with library staff.
          Current Libraries staff can learn more about the application process
          and timelines <a href="https://drive.google.com/file/d/1Bx2MRttOXgB7sG_5rLZwNwefkLl8c5ac/view?usp=drive_link">here</a>.
        </p>
      </div>

      <div className="mt-4 flow-root">
        <div className="my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {grants.map((grant) => (
                <a
                  key={grant.name}
                  href={grant.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <Image
                      src={grant.imageSrc}
                      alt={grant.name}
                      className="h-full w-full object-cover object-center"
                      width={300}
                      height={400}
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-white">
                    {grant.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
