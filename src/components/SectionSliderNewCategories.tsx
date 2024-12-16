"use client";

import React, { FC, useEffect, useState } from "react";
import { TaxonomyType } from "@/data/types";
import CardCategory4 from "@/components/CardCategory4";
import Heading from "@/shared/Heading";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import { variants } from "@/utils/animationVariants";
import { useWindowSize } from "react-use";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  itemPerRow?: 4 | 5;
  categoryCardType?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-real-estate",
    name: "Nature House for Sale",
    taxonomy: "category",
    count: 17288,
    thumbnail: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-real-estate",
    name: "Wooden House for Sale",
    taxonomy: "category",
    count: 2118,
    thumbnail: "https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-real-estate",
    name: "Modern Houseboat for Sale",
    taxonomy: "category",
    count: 36612,
    thumbnail: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Explore Real Estate Listings",
  subHeading = "Popular homes for sale",
  className = "",
  categories = DEMO_CATS,
  itemPerRow = 4,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const windowWidth = useWindowSize().width;

  useEffect(() => {
    if (windowWidth < 500) return setNumberOfItems(itemPerRow - 2);
    if (windowWidth < 1024) return setNumberOfItems(itemPerRow - 1);
    setNumberOfItems(itemPerRow);
  }, [itemPerRow, windowWidth]);

  const changeItemId = (newVal: number) => {
    setDirection(newVal > currentIndex ? 1 : -1);
    setCurrentIndex(newVal);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => currentIndex < categories.length - 1 && changeItemId(currentIndex + 1),
    onSwipedRight: () => currentIndex > 0 && changeItemId(currentIndex - 1),
    trackMouse: true,
  });

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <Heading desc={subHeading}>{heading}</Heading>
      <MotionConfig transition={{ x: { type: "spring", stiffness: 300, damping: 30 } }}>
        <div className="relative" {...handlers}>
          <motion.ul className="relative whitespace-nowrap">
            <AnimatePresence initial={false} custom={direction}>
              {categories.map((item, indx) => (
                <motion.li
                  key={indx}
                  className="inline-block px-2"
                  style={{ width: `calc(100% / ${numberOfItems})` }}
                  variants={variants(200, 1)}
                  initial={{ x: `${(currentIndex - 1) * -100}%` }}
                  animate={{ x: `${currentIndex * -100}%` }}
                >
                  <CardCategory4 taxonomy={item} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>

          {currentIndex > 0 && (
            <PrevBtn onClick={() => changeItemId(currentIndex - 1)} />
          )}
          {currentIndex < categories.length - numberOfItems && (
            <NextBtn onClick={() => changeItemId(currentIndex + 1)} />
          )}
        </div>
      </MotionConfig>
    </div>
  );
};

export default SectionSliderNewCategories;
