import React, { FC } from "react";
import { DEMO_STAY_LISTINGS } from "../../data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import Heading2 from "@/shared/Heading2";
import PropertyCardH from "@/components/PropertyCardH";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div className={`nc-SectionGridFilterCard ${className}`}>
      <Heading2
        heading="Properties in Thailand"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            30 Properties
            <span className="mx-2">·</span>
            Aug 12 - 18
          </span>
        }
      />

      {/* Grid of Property Cards */}
      <div className="grid grid-cols-1 gap-6 md:gap-8 xl:grid-cols-2">
        {data.map((stay) => (
          <PropertyCardH key={stay.id} data={stay} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
