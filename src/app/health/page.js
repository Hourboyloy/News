"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";

function Page() {
  const { newsHealth, loading, loadMoreNewsHealth, LoadingCardsPageHealth } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsHealth}
              LoadingCardByPage={LoadingCardsPageHealth}
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
