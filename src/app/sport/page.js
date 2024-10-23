"use client";
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";

function Page() {
  const { newsSports, loading, fetchNewsSports, loadMoreNewsSports } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsSports}
              fetchNews={fetchNewsSports}
              loadMoreNews={loadMoreNewsSports}
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
