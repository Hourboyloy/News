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










"use client";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import axios from "axios";

export default function Page() {
  const [news, setNews] = useState([]); // Initialize with an empty array
  const [trueFalse, setTrueFalse] = useState(false);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track any error

  useEffect(() => {
    axios
      .get("https://manage-news-server134.vercel.app/user-get-all")
      .then((response) => {
        if (response.status === 200) {
          setNews(response.data.news.reverse()); // Reverse directly while setting news
          setTrueFalse(true); // Indicate that data is successfully fetched
        }
      })
      .catch((err) => {
        console.error("Error fetching news:", err.message);
        setError(err.message); // Set error if something goes wrong
      })
      .finally(() => {
        setLoading(false); // Set loading to false once the request finishes
      });
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center text-xl font-semibold pt-4">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white text-center text-xl font-semibold pt-4">
        Error: {error}
      </div>
    );
  }

  return (
    <main className="">
      {trueFalse ? (
        <div>
          <Cards news={news} /> {/* Pass reversed news directly to Cards */}
        </div>
      ) : (
        <div className="text-white text-center pt-4">
          Loading...
        </div>
      )}
    </main>
  );
}
