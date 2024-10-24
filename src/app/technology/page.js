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
//       "https://manage-news-server134.vercel.app/fillter-category/បច្ចេកវិទ្យា"
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
import React from "react";
import { useNewsWeb } from "@/context/NewsContext";
import Cards from "@/components/Cards";
import LoadingCardsComponent from "@/components/LoadingCards";

function Page() {
  const { newsTechnology, loading, loadMoreNewsTechnology, LoadingCards } =
    useNewsWeb();

  return (
    <div>
      {loading.background === false ? (
        <div className="min-h-screen">
          <div>
            <Cards
              news={newsTechnology}
              LoadingCard={LoadingCards}
              loadMoreNews={loadMoreNewsTechnology}
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
