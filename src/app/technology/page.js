"use client";
import React, { useEffect, useState } from "react";
import { HandleApi } from "@/API/APIHelper";
import Cards from "@/components/Cards";

function page() {
  const [lists, setLists] = useState([]);
   const [trueFalse, setTrueFalse] = useState(false);

  //  const handleRouteChange = () => {
  //    if (typeof window !== "undefined") {
  //      window.scrollTo(0, 0); // Scroll to the top of the page
  //    }
  //  };

  //  handleRouteChange();
   
  const handleGetLists = async () => {
    const data = await HandleApi(
      "get",
      "http://localhost:5051/fillter-category/បច្ចេកវិទ្យា"
    );
    if (data.message === "Get category បច្ចេកវិទ្យា successfuly") {
      setLists(data.results.reverse());
      setTrueFalse(true);
    }else{
      console.log("Category បច្ចេកវិទ្យា not found!");
    }
  };
  useEffect(() => {
    handleGetLists();
  }, []);
  
  return (
    <div>
      <div>
        {trueFalse ? (
          <div>
            <Cards news={lists} />
          </div>
        ) : (
          <div className="text-white text-center text-xl font-semibold">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
