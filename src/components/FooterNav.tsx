"use client";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const NAV = [
  {
    name: "Explore",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Wishlists",
    icon: HeartIcon,
  },
  {
    name: "Log in",
    icon: UserCircleIcon,
  },
  {
    name: "Menu",
    icon: () => <div className="w-6 h-6 bg-gray-300 rounded"></div>, // Simple placeholder for "Menu"
  },
];

const FooterNav = () => {
  const renderItem = (item: { name: string; icon: any }, index: number) => (
    <div
      key={index}
      className="flex flex-col items-center justify-between text-neutral-500 dark:text-neutral-300/90"
    >
      <item.icon className="w-6 h-6" />
      <span className="text-[11px] leading-none mt-1">{item.name}</span>
    </div>
  );

  return (
    <div
      className="FooterNav block md:hidden p-2 bg-white dark:bg-neutral-800 fixed bottom-0 inset-x-0 z-30 border-t border-neutral-300 dark:border-neutral-700"
    >
      <div className="w-full max-w-lg flex justify-around mx-auto text-sm text-center">
        {NAV.map(renderItem)}
      </div>
    </div>
  );
};

export default FooterNav;
