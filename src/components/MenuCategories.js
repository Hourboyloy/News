import React from "react";
import Link from "next/link";
function MenuCategories() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-5">
        <Link>Home</Link>
        <Link>Technology</Link>
        <Link>Sport</Link>
        <Link>Health</Link>
      </div>
    </div>
  );
}

export default MenuCategories;
