"use client";

import React from "react";
import { BellIcon, ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
// import Logo from "../Logo";

// Language data with flag icons
export const headerLanguage = [
  { id: "English", name: "English", description: "United States", flag: "🇺🇸", active: true },
  { id: "Mandarin", name: "Mandarin", description: "China", flag: "🇨🇳" },
  { id: "Vietnamese", name: "Vietnamese", description: "Vietnam", flag: "🇻🇳" },
  { id: "Thai", name: "Thai", description: "Thailand", flag: "🇹🇭" },
  { id: "Malay", name: "Malay", description: "Malaysia", flag: "🇲🇾" },
];

const SiteHeader: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Website Logo */}
        {/* <Logo /> */}

        {/* Right-side Options */}
        <div className="flex items-center space-x-6">
          {/* Language Dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="w-5 h-5 opacity-80" />
              <span className="text-sm font-medium">Language</span>
              <ChevronDownIcon className="w-4 h-4 opacity-70" />
            </div>
            <div className="absolute hidden group-hover:block top-8 right-0 bg-white dark:bg-neutral-800 shadow-lg rounded-lg w-48 z-10">
              {headerLanguage.map((item, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 flex items-center space-x-3 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer ${
                    item.active ? "bg-neutral-100 dark:bg-neutral-700" : ""
                  }`}
                >
                  <span className="text-lg">{item.flag}</span>
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-neutral-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Bell */}
          <div className="cursor-pointer relative">
            <BellIcon className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
