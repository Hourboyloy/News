"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";

function Page() {
  const { newsHealth, loading, fetchNewsHealth, loadMoreNewsHealth } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsHealth}
              fetchNews={fetchNewsHealth}
              loadMoreNews={loadMoreNewsHealth}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
