"use client";

import React, { FC, useState } from "react";
import { DEMO_STAY_LISTINGS } from "../../data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import Heading2 from "@/shared/Heading2";
import PropertyCardH from "@/components/PropertyCardH";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const ITEMS_PER_PAGE = 6; // Number of houses per page

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_STAY_LISTINGS,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<"price" | "buildingYear">("price");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Sorting Logic: Sort by price or buildingYear
  const sortedData = [...data].sort((a, b) => {
    let valueA: number, valueB: number;

    if (sortField === "price") {
      // Extract numeric value from price (e.g., THB 11100000 → 11100000)
      valueA = parseInt(a.price.replace(/[^0-9]/g, ""), 10);
      valueB = parseInt(b.price.replace(/[^0-9]/g, ""), 10);
    } else {
      // Sort based on buildingYear instead of yearBuilt
      valueA = a.buildingYear;
      valueB = b.buildingYear;
    }

    return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSortChange = (field: "price" | "buildingYear", order: "asc" | "desc") => {
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      {/* Heading */}
      <Heading2
        heading="Properties in Thailand"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            {data.length} Properties Available
          </span>
        }
      />

      {/* Sort Options */}
      <div className="flex justify-end items-center mb-6 space-x-4">
        <label className="text-gray-600 font-medium text-sm">Sort by:</label>
        <div className="relative">
          <select
            value={`${sortField}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split("-");
              handleSortChange(field as "price" | "buildingYear", order as "asc" | "desc");
            }}
            className="appearance-none w-full py-2 pl-3 pr-10 text-sm font-medium border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 bg-white"
          >
            <option value="price-asc">Price: Lowest to Highest</option>
            <option value="price-desc">Price: Highest to Lowest</option>
            <option value="buildingYear-asc">Year Built: Oldest to Newest</option>
            <option value="buildingYear-desc">Year Built: Newest to Oldest</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {/* Dropdown Arrow Icon */}
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Grid of Property Cards */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2">
        {paginatedData.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex mt-16 justify-center items-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-full ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
