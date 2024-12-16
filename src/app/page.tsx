"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

const PageHome = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /listing-real-estate when visiting the root page
    router.replace("/listing-real-estate");
  }, [router]);

  return null; // Do not render anything else
};

export default PageHome;
