"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import Logo from "@/shared/Logo";
import useOutsideAlerter from "@/hooks/useOutsideAlerter";
import NotifyDropdown from "./NotifyDropdown";
import MenuBar from "@/shared/MenuBar";
import HeroSearchForm from "../(HeroSearchForm)/HeroSearchForm"; // Updated import
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Header3Props {
  className?: string;
}

const Header3: FC<Header3Props> = ({ className = "" }) => {
  const headerInnerRef = useRef<HTMLDivElement>(null);
  const [showHeroSearch, setShowHeroSearch] = useState(false);

  useOutsideAlerter(headerInnerRef, () => {
    setShowHeroSearch(false);
  });

  // Toggle search form visibility
  const toggleHeroSearch = () => {
    setShowHeroSearch(!showHeroSearch);
  };

  const renderHeroSearch = () => {
    return showHeroSearch ? (
      <div className="absolute inset-x-0 top-0 bg-white dark:bg-neutral-800 shadow-lg z-50">
        <HeroSearchForm className="p-4" />
      </div>
    ) : null;
  };

  const renderButtonOpenHeroSearch = () => {
    return (
      <div
        className="w-full flex items-center justify-between border border-neutral-200 dark:border-neutral-600 rounded-full p-3 shadow cursor-pointer hover:shadow-md transition"
        onClick={toggleHeroSearch}
      >
        <span className="text-sm font-medium text-neutral-700">Buy</span>
        <div className="flex-shrink-0">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </span>
        </div>
      </div>
    );
  };

  return (
    <header ref={headerInnerRef} className={`sticky top-0 z-40 ${className}`}>
      <div className="bg-white dark:bg-neutral-900 px-4 lg:container h-[88px] flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Search Button */}
        <div className="w-full max-w-lg">{renderButtonOpenHeroSearch()}</div>

        {/* Right Navigation */}
        <div className="flex space-x-3 items-center">
          <NotifyDropdown />
          <MenuBar />
        </div>
      </div>

      {/* Search Form */}
      {renderHeroSearch()}
    </header>
  );
};

export default Header3;
