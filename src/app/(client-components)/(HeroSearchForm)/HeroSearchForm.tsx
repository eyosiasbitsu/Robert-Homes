"use client";

import React, { FC } from "react";

export interface HeroSearchFormProps {
  className?: string;
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {/* Tabs - Only "Buy" option */}
      <ul className="ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11">
        <li className="flex-shrink-0 flex items-center text-sm lg:text-base font-medium text-neutral-800">
          <span className="block w-2.5 h-2.5 rounded-full bg-neutral-800 mr-2" />
          Buy
        </li>
      </ul>

      {/* Form Section */}
      <div className="mt-4 bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location Field */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location (e.g., Bangkok)"
              className="mt-1 block w-full p-2 border border-neutral-300 rounded-md text-sm"
            />
          </div>

          {/* Property Type Field */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Property Type
            </label>
            <input
              type="text"
              placeholder="Enter property type (e.g., Villa)"
              className="mt-1 block w-full p-2 border border-neutral-300 rounded-md text-sm"
            />
          </div>

          {/* Price Range Field */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Price Range
            </label>
            <input
              type="text"
              placeholder="$200k ~ $5,000k"
              className="mt-1 block w-full p-2 border border-neutral-300 rounded-md text-sm"
            />
          </div>

          {/* Search Button */}
          <div className="md:col-span-3 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 text-sm"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSearchForm;
