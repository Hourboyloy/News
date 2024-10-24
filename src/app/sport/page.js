"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";
import LoadingCardsComponent from "@/components/LoadingCards";

function Page() {
  const { newsSports, loading, loadMoreNewsSports, LoadingCards } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsSports}
              LoadingCard={LoadingCards}
              loadMoreNews={loadMoreNewsSports}
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
