import React, { FC } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";

export interface ListingRealEstatePageProps {}

const ListingRealEstatePage: FC<ListingRealEstatePageProps> = ({}) => {
  return (
    <div className="container relative">
      <SectionGridFilterCard className="py-24 lg:py-28" />
    </div>
  );
};

export default ListingRealEstatePage;
