import __stayListing from "./jsons/__stayListing.json";
import { DEMO_STAY_CATEGORIES } from "./taxonomies";
import { StayDataType } from "./types";
import { DEMO_AUTHORS } from "./authors";
import { Route } from "@/routers/types";

// Property (Stay) Listings
const DEMO_STAY_LISTINGS = __stayListing.map((post, index): StayDataType => {
  // ########## GET CATEGORY BY CAT ID ##########
  const category = DEMO_STAY_CATEGORIES.filter(
    (taxonomy) => taxonomy.id === post.listingCategoryId
  )[0];

  // Construct and return the modified property listing
  return {
    ...post,
    id: `stayListing_${index}_`,
    saleOff: !index ? "-20% today" : post.saleOff, // Apply sale-off to the first listing
    isAds: !index ? true : post.isAds, // Mark the first as an ad
    author: DEMO_AUTHORS.filter((user) => user.id === post.authorId)[0],
    listingCategory: category,
    href: post.href as Route,

    // New fields for property cards
    price: (11100000 + index * 50000).toString(), // Dynamic pricing
    location: "Bophut", // Static location for demo
    areaBuilding: 220 + index * 10, // Building area in sq. meters
    areaLand: 450 + index * 20, // Land area in sq. meters
    status: "Private", // Static status for demo
    ownership: "Chanote", // Ownership type
    buildingYear: 2018 - (index % 5), // Adjust building year dynamically
  };
});

export { DEMO_STAY_LISTINGS };
