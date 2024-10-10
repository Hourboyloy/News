"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import MenuCategories from "./MenuCategories";

function MainHeader() {
  const [background, setBackground] = useState();
  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };

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
  }, []);

  return (
    <div>
      <div className="relative space-y-0 bg-gray-900">
        <div>
          {background ? (
            ""
          ) : (
            <div className=" h-screen flex justify-center items-center bg-white">
              {/*<div className="loader rounded text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"></div> */}
              <Loader />
            </div>
          )}

          {background ? (
            <div className=" ">
              <div>
                <Header
                  catchValueInput={catchValueInput}
                  handleCatchValueInput={handleCatchValueInput}
                  background={background}
                />
              </div>
              <div>
                <MenuCategories/>
              </div>
            </div>
          ) : (
            <div className=" w-0 h-0 overflow-hidden"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
