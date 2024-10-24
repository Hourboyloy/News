"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";
import LoadingCardsComponent from "@/components/LoadingCards";

function Page() {
  const { newsHealth, loading, loadMoreNewsHealth, LoadingCards } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsHealth}
              LoadingCard={LoadingCards}
              loadMoreNews={loadMoreNewsHealth}
            />
          </div>
        </div>
      ) : (
        <LoadingCardsComponent/>
      )}
    </div>
  );
}

export default Page;
