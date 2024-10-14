"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuCategories() {
  const pathname = usePathname();

  const linkClasses = (path) => {
    return `outline-none focus:outline-none select-none border border-gray-700 px-2.5 py-1 rounded-md text-sm hover:bg-gray-600 transition-all duration-300 ${
      pathname === path ? "text-red-500" : ""
    }`;
  };

  return (
    <div>
      <div className="text-white flex items-center justify-center space-x-3 pb-6 pt-10">
        <Link className={linkClasses("/")} href="/">
          Home
        </Link>
        <Link className={linkClasses("/technology")} href="/technology">
          Technology
        </Link>
        <Link className={linkClasses("/sport")} href="/sport">
          Sport
        </Link>
        <Link className={linkClasses("/health")} href="/health">
          Health
        </Link>
      </div>
    </div>
  );
}

export default MenuCategories;
