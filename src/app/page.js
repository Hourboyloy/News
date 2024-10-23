// "use client";
// import { useEffect, useState } from "react";
// import Cards from "@/components/Cards";
// import axios from "axios";

// export default function Page() {
//   const [news, setNews] = useState([]);
//   const [news2, setNews2] = useState();
//   const [trueFalse, setTrueFalse] = useState(false);

//   //  const handleRouteChange = () => {
//   //    if (typeof window !== "undefined") {
//   //      window.scrollTo(0, 0); // Scroll to the top of the page
//   //    }
//   //  };

//   //  handleRouteChange();

//   useEffect(() => {
//     axios
//       .get("https://manage-news-server134.vercel.app/user-get-all")
//       .then((response) => {
//         setNews(response.data.news);
//         if (response.status === 200) {
//           setTrueFalse(true);
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   useEffect(() => {
//     const tempNews2 = [];
//     news.forEach((element) => {
//       tempNews2.push(element);
//     });
//     tempNews2.reverse();
//     setNews2(tempNews2);
//   }, [news]);

//   return (
//     <main className="">
//       {trueFalse ? (
//         <div>
//           <Cards news={news2} />
//         </div>
//       ) : (
//         <div className="text-white text-center text-xl font-semibold pt-4">Loading...</div>
//       )}
//     </main>
//   );
// }

// src/app/page.js

"use client";
import Cards from "@/components/Cards";
import { useNewsWeb } from "@/context/NewsContext"; // Import the custom hook

export default function Page() {
  const { news, loading, loadMoreNews } = useNewsWeb(); // Get news, loading, and error from context

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-[100vh]">
          {news.length > 0 ? (
            <div>
              <Cards
                loadMoreNews={loadMoreNews}
                news={news}
              />
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
