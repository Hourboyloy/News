"use client";
import React, { useState, useEffect } from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";

function Page() {
  const { news, loading } = useNewsWeb();
  const [lists, setLists] = useState([]);
  const filteredNews = news.filter(
    (newsItem) => newsItem.category === "សុខភាព"
  );

  // Set filtered news to lists
  useEffect(() => {
    setLists(filteredNews);
  }, [news]);

  return (
    <div>
      {loading.news === false && loading.background === false ? (
        <div className="min-h-screen">
          {lists.length > 0 ? (
            <div>
              <Cards news={lists} />
            </div>
          ) : (
            <div className="text-white text-center pt-4">
              No news available.
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
