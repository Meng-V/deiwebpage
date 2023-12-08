"use client";

import { grants } from "@/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <section className="bg-white">
      <div className="px-4">
        <h2>DEI Grants Program</h2>
      </div>

      <div className="mt-4 flow-root">
        <div className="-my-2">
          <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
            <div className="absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
              {grants.map((grant) => (
                <a
                  key={grant.name}
                  href={grant.href}
                  className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      src={grant.imageSrc}
                      alt={grant.name}
                      className="h-full w-full object-cover object-center"
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

      <div className="mt-6 px-4 sm:hidden">
        <a
          href="#"
          className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
        >
          Browse All DEI Grants
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div>
    </section>
  );
}
