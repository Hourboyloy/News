"use client";
import { useEffect, useState } from "react";
import Cards from "@/components/Cards";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import axios from "axios";

export default function Home() {
  const [news, setNews] = useState([]);
  const [background, setBackground] = useState();
  const [news2, setNews2] = useState();

  const [trueFalse, setTrueFalse] = useState(false);

  useEffect(() => {
    axios
      .get("https://manage-news-server134.vercel.app/background-seted")
      .then((response) => {
        if (
          response.status == 200 &&
          response.data.message !== "No document with seted=true found"
        ) {
          return setBackground(response.data.seted);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get("https://manage-news-server134.vercel.app/user-get-all")
      .then((response) => {
        setNews(response.data.news);
        if (response.status === 200) {
          setTrueFalse(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    const tempNews2 = [];
    news.forEach((element) => {
      tempNews2.push(element);
    });
    
    setNews2(tempNews2);
  }, [news]);


  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };


  return (
    <main className="">
      <div className=" relative space-y-0 bg-gray-900 ">
        <div>
          {trueFalse ? (
            ""
          ) : (
            <div className=" h-screen flex justify-center items-center bg-white">
              {/*<div className="loader rounded text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"></div> */}
              <Loader />
            </div>
          )}
          {trueFalse ? (
            <div className=" ">
              <Header
                catchValueInput={catchValueInput}
                handleCatchValueInput={handleCatchValueInput}
                background={background}
              />
            </div>
          ) : (
            <div className=" w-0 h-0 overflow-hidden">
              <Header
                catchValueInput={catchValueInput}
                handleCatchValueInput={handleCatchValueInput}
              />
            </div>
          )}
        </div>
        <div>
          {trueFalse ? (
            <div>
              <Cards news2={news2} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}
