// "use client";
// import React, { useEffect, useState } from "react";
// import { HandleApi } from "@/API/APIHelper";
// import Cards from "@/components/Cards";

// function Page() {
//   const [lists, setLists] = useState([]);
//   const [trueFalse, setTrueFalse] = useState(false);

//   //  const handleRouteChange = () => {
//   //    if (typeof window !== "undefined") {
//   //      window.scrollTo(0, 0); // Scroll to the top of the page
//   //    }
//   //  };

//   //  handleRouteChange();

//   const handleGetLists = async () => {
//     const data = await HandleApi(
//       "get",
//       "http://localhost:5051/fillter-category/បច្ចេកវិទ្យា"
//     );
//     if (data.message === "Get category បច្ចេកវិទ្យា successfuly") {
//       setLists(data.results.reverse());
//       setTrueFalse(true);
//     } else {
//       console.log("Category បច្ចេកវិទ្យា not found!");
//     }
//   };
//   useEffect(() => {
//     handleGetLists();
//   }, []);

//   return (
//     <div>
//       <div>
//         {trueFalse ? (
//           <div>
//             <Cards news={lists} />
//           </div>
//         ) : (
//           <div className="text-white text-center pt-4">Loading...</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Page;









"use client";
import React, { useState, useEffect } from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";

function Page() {
  const {news, loading } = useNewsWeb();
  const [lists, setLists] = useState([]);
   const filteredNews = news.filter((newsItem) => newsItem.category === "បច្ចេកវិទ្យា");

   // Set filtered news to lists
   useEffect(() => {
     setLists(filteredNews);
   }, [news]);

  return (
    <div>
      {loading.news === false && loading.background === false ? (
        lists.length > 0 ? (
          <Cards news={lists} /> // Pass reversed news directly to Cards component
        ) : (
          <div className="text-white text-center pt-4">No news available.</div>
        )
      ) : (
        ""
      )}
    </div>
  );
}

export default Page;
