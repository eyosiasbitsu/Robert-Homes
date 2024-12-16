"use client";

import React from "react";
import SocialsList1 from "@/shared/SocialsList1";

const Footer: React.FC = () => {
  return (
    <div className="nc-Footer relative py-10 lg:py-14 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container flex flex-col items-center gap-6">

        {/* Social Media Icons */}
        <SocialsList1 className="flex items-center space-x-4" />

        {/* Static Footer Text */}
        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
