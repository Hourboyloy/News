"use client";
import Cards from "@/components/Cards";
import { useNewsWeb } from "@/context/NewsContext"; // Import the custom hook

export default function Page() {
  const { news, loading, loadMoreNews, LoadingCardsPageHome } = useNewsWeb(); // Get news, loading, and error from context

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-[100vh]">
          {news.length > 0 ? (
            <div>
              <Cards
                loadMoreNews={loadMoreNews}
                LoadingCardByPage={LoadingCardsPageHome}
                news={news}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
