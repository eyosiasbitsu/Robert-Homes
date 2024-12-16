import __stayListing from "./jsons/__stayListing.json";
import { DEMO_STAY_CATEGORIES } from "./taxonomies";
import { StayDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import { Route } from "@/routers/types";

// Property (Stay) Listings
const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  // ########## GET CATEGORY BY CAT ID ##########
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === (post.listingCategoryId || "default-category")
  )[0];

  // Construct and return the modified property listing
  return {
    ...post,
    id: `stayListing_${index}_`,
    date: "2024-03-23",
    commentCount: 0,
    viewCount: 0,
    address: "Koh Samui, Thailand",
    reviewStart: 4.5,
    reviewCount: 0,
    galleryImgs: post.galleryImgs, // <-- Use the original galleryImgs array
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    saleOff: !index ? "-20% today" : (post.saleOff || null),
    isAds: !index ? true : null,
    author: DEMO_AUTHORS[0],
    listingCategory: category || { id: "default-category", name: "Uncategorized" },
    href: `/listing-real-estate/${index}` as Route,

    // New fields for property cards
    price: (11100000 + index * 50000).toString(), // Dynamic pricing
    location: "Bophut", // Static location for demo
    areaBuilding: 220 + index * 10, // Building area in sq. meters
    areaLand: 450 + index * 20, // Land area in sq. meters
    status: "Private", // Static status for demo
    ownership: "Chanote", // Ownership type
    buildingYear: 2018 - (index % 5), // Adjust building year dynamically
    like: false, // Add default like status
    map: {       // Add default map coordinates
      lat: 9.539778,
      lng: 100.045594
    },
  };
});

// Export the listings
export { DEMO_STAY_LISTINGS };
