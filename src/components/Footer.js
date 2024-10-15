"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";

function Footer() {
  const { loading } = useNewsWeb();
  return (
    <div>
      {loading.background === false && loading.news === false ? (
        <div className="z-20">
          <div className="w-full py-10 bg-gray-950">
            <p className="text-center text-gray-300 font-semibold uppercase text-xs">
              Copyright@ 2024
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Footer;
