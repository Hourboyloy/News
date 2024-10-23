"use client";
import React, { useState } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import MenuCategories from "@/components/MenuCategories";
import { useNewsWeb } from "@/context/NewsContext"; 

function MainHeader() {
   const { background, loading } = useNewsWeb();
  const [catchValueInput, setCatchValueInput] = useState("");
  const handleCatchValueInput = (value) => {
    setCatchValueInput(value);
  };

  return (
    <div>
      <div className="relative space-y-0 bg-gray-900">
        <div>
          {loading.background === false ? (
            <div className="">
              <div>
                <Header
                  catchValueInput={catchValueInput}
                  handleCatchValueInput={handleCatchValueInput}
                  background={background}
                />
              </div>
              <div className="z-10 sticky">{<MenuCategories />}</div>
            </div>
          ) : (
            <div className=" h-screen flex justify-center items-center bg-white overflow-hidden">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
