import React, { FC } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import { StayDataType } from "@/data/types";

export interface PropertyCardHProps {
  className?: string;
  data?: StayDataType;
}

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const PropertyCardH: FC<PropertyCardHProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  const {
    galleryImgs,
    title,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
    location,
    areaBuilding,
    areaLand,
    status,
    ownership,
    buildingYear,
  } = data;

  const renderSliderGallery = () => {
    return (
      <div className="flex-shrink-0 p-3 w-full sm:w-64 relative">
        <GallerySlider
          ratioClass="aspect-w-1 aspect-h-1"
          galleryImgs={galleryImgs}
          className="w-full h-full rounded-2xl overflow-hidden"
          uniqueID={`PropertyCardH_${id}`}
        />
        {saleOff && (
          <SaleOffBadge className="absolute left-5 top-5 !bg-orange-500" />
        )}
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div className="mt-4 space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center space-x-2">
          <i className="las la-money-bill-wave text-lg"></i>
          <span>
            <b>Price:</b> THB {price.toLocaleString()}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-map-marker-alt text-lg"></i>
          <span>
            <b>Location:</b> {location}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-ruler-combined text-lg"></i>
          <span>
            <b>Building Area:</b> {areaBuilding} sq. meters
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-tree text-lg"></i>
          <span>
            <b>Land Area:</b> {areaLand} sq. meters
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-lock text-lg"></i>
          <span>
            <b>Status:</b> {status}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-file-alt text-lg"></i>
          <span>
            <b>Ownership:</b> {ownership}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <i className="las la-calendar text-lg"></i>
          <span>
            <b>Year Built:</b> {buildingYear}
          </span>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex-grow p-3 sm:pr-6 flex flex-col items-start">
        <div className="space-y-4 w-full">
          <div className="flex items-center space-x-2">
            {isAds && <Badge name="ADS" color="green" />}
            <h2 className="text-lg font-medium capitalize">
              <span className="line-clamp-2">{title}</span>
            </h2>
          </div>
          {renderDetails()}
          <div className="w-14 border-b border-neutral-200/80 dark:border-neutral-700"></div>
          <div className="flex w-full justify-between items-end">
            {/* Removed StartRating */}
            {/* Removed BtnLikeIcon */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-PropertyCardH group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-700 rounded-3xl overflow-hidden ${className}`}
    >
      <div className="h-full w-full flex flex-col sm:flex-row sm:items-center">
        {renderSliderGallery()}
        {renderContent()}
      </div>
      {/* Removed BtnLikeIcon component */}
    </div>
  );
};

export default PropertyCardH;
