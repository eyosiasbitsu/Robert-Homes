
import React, { ReactNode } from "react";
import SectionHero2 from "../(server-components)/SectionHero2";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="nc-ListingRealEstateMapPage">
      <div className="container pb-16 lg:pb-25">
        <SectionHero2 />
      </div>
      {children}
    </div>
  );
};

export default Layout;
