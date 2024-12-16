"use client";

import React from "react";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionHero2 from "@/app/(server-components)/SectionHero2";
import { Route } from "@/routers/types";

import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";

type TaxonomyType = {
  id: string;
  href: Route<string>;
  name: string;
  taxonomy: "category" | "tag";
  count: number;
  thumbnail: string;
};

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Greenfield Manor for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Lakeview Retreat for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "Modern Urban Villa for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
  },
  {
    id: "4",
    href: "/listing-real-estate",
    name: "Sunny Hillside Residence for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg",
  },
  {
    id: "5",
    href: "/listing-real-estate",
    name: "Riverside Cottage for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg",
  },
  {
    id: "6",
    href: "/listing-real-estate",
    name: "Ocean Breeze Bungalow for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg",
  },
  {
    id: "7",
    href: "/listing-real-estate",
    name: "The Grand Estate for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
  },
  {
    id: "8",
    href: "/listing-real-estate",
    name: "Serenity Lake House for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg",
  },
  {
    id: "9",
    href: "/listing-real-estate",
    name: "Golden Horizon Cottage for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg",
  },
  {
    id: "10",
    href: "/listing-real-estate",
    name: "Blue Lagoon Villa for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg",
  },
  {
    id: "11",
    href: "/listing-real-estate",
    name: "Rustic Pine Retreat for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
  },
  {
    id: "12",
    href: "/listing-real-estate",
    name: "Mountain View Lodge for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg",
  },
  {
    id: "13",
    href: "/listing-real-estate",
    name: "Hillside Haven for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg",
  },
  {
    id: "14",
    href: "/listing-real-estate",
    name: "Golden Gate Villa for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg",
  },
  {
    id: "15",
    href: "/listing-real-estate",
    name: "Forest Creek Cabin for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
  },
  {
    id: "16",
    href: "/listing-real-estate",
    name: "Sunset Bay Bungalow for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg",
  },
  {
    id: "17",
    href: "/listing-real-estate",
    name: "Ocean View Estate for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg",
  },
  {
    id: "18",
    href: "/listing-real-estate",
    name: "Luxury Lakeside Villa for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg",
  },
  {
    id: "19",
    href: "/listing-real-estate",
    name: "Tranquil Woodland House for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg",
  },
  {
    id: "20",
    href: "/listing-real-estate",
    name: "Countryside Dream House for Sale",
    taxonomy: "category",
    count: 188288,
    thumbnail: "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg",
  },
];

function PageHome2() {
  return (
    <main className="nc-PageHome2 relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* HERO SECTION */}
        <SectionHero2 className="" />

        {/* HOW IT WORKS */}
        <SectionHowItWork
          data={[
            { id: 1, img: HIW1img, title: "Smart search", desc: "Use filters to find homes." },
            { id: 2, img: HIW2img, title: "Choose property", desc: "Browse tailored listings." },
            { id: 3, img: HIW3img, title: "Book property", desc: "Secure your perfect home." },
          ]}
        />

        {/* SUGGESTIONS FOR DISCOVERY */}
        <SectionSliderNewCategories
          categories={DEMO_CATS_2}
          categoryCardType="card4"
          itemPerRow={4}
          heading="Explore Real Estate Listings"
          subHeading="Find your dream home among popular choices"
        />
      </div>
    </main>
  );
}

export default PageHome2;