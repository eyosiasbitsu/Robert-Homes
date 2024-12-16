"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { FC, Fragment, useEffect, useState } from "react";

// <--- NavItemType --->
export interface MegamenuItem {
  id: string;
  image: string;
  title: string;
  items: NavItemType[];
}
export interface NavItemType {
  id: string;
  name: string;
  isNew?: boolean;
  href?: string;
  targetBlank?: boolean;
  children?: NavItemType[];
  megaMenu?: MegamenuItem[];
  type?: "dropdown" | "megaMenu" | "none";
}

export interface NavigationItemProps {
  menuItem: NavItemType;
}

type NavigationItemWithRouterProps = NavigationItemProps;

const NavigationItem: FC<NavigationItemWithRouterProps> = ({ menuItem }) => {
  const [menuCurrentHovers, setMenuCurrentHovers] = useState<string[]>([]);

  const onMouseEnterMenu = (id: string) => {
    setMenuCurrentHovers((state) => [...state, id]);
  };

  const onMouseLeaveMenu = (id: string) => {
    setMenuCurrentHovers((state) => state.filter((item) => item !== id));
  };

  // ===================== MENU MEGAMENU =====================
  const renderMegaMenu = (menu: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menu.id);

    return (
      <Popover
        as="li"
        className="menu-item flex items-center menu-megamenu"
        onMouseEnter={() => onMouseEnterMenu(menu.id)}
        onMouseLeave={() => onMouseLeaveMenu(menu.id)}
      >
        <div>{renderMainItem(menu)}</div>
        <Transition
          as={Fragment}
          show={isHover}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 top-full w-screen max-w-sm">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              {menu.megaMenu?.map((item) => (
                <div key={item.id}>
                  <Image
                    alt=""
                    src={item.image}
                    width={100}
                    height={60}
                    className="rounded"
                  />
                  <p className="font-medium mt-2">{item.title}</p>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  // ===================== MENU DROPDOWN =====================
  const renderDropdownMenu = (menuDropdown: NavItemType) => {
    const isHover = menuCurrentHovers.includes(menuDropdown.id);

    return (
      <Popover
        as="li"
        className="menu-item flex items-center"
        onMouseEnter={() => onMouseEnterMenu(menuDropdown.id)}
        onMouseLeave={() => onMouseLeaveMenu(menuDropdown.id)}
      >
        <div>{renderMainItem(menuDropdown)}</div>
        <Transition
          as={Fragment}
          show={isHover}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 top-full left-0 bg-white shadow-lg rounded-lg p-3">
            <ul>
              {menuDropdown.children?.map((i) => (
                <li key={i.id} className="hover:bg-gray-100 p-2 rounded">
                  {renderMainItem(i)}
                </li>
              ))}
            </ul>
          </Popover.Panel>
        </Transition>
      </Popover>
    );
  };

  // ===================== MENU MAIN ITEM =====================
  const renderMainItem = (item: NavItemType) => {
    return (
      <div className="inline-flex items-center text-sm font-medium text-neutral-700 py-2 px-4 rounded-lg hover:bg-gray-100 cursor-pointer">
        {item.name}
        {item.type && (
          <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-400" />
        )}
      </div>
    );
  };

  switch (menuItem.type) {
    case "megaMenu":
      return renderMegaMenu(menuItem);
    case "dropdown":
      return renderDropdownMenu(menuItem);
    default:
      return <li className="menu-item">{renderMainItem(menuItem)}</li>;
  }
};

export default NavigationItem;
