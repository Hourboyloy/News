"use client";
import React, { useState, useRef } from "react";
import axios from "axios";

const GoogleSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [currentInput, setCurrentInput] = useState("");
  const currentInputRef = useRef(null);
  const apiKey = "AIzaSyA1eMrgzTydKpL3JNrOUn6nKi7mEyzYZQ8";
  const searchEngineId = "f44f9e7fe832f4377";

  const performSearch = () => {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
      query
    )}&key=${apiKey}&cx=${searchEngineId}`;

    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        if (data && data.items) {
          setSearchResults(data.items);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setCurrentInput(inputValue);

    if (inputValue.trim() === "") {
      setSearchResults([]);
    } else if (inputValue.trim().length > 1) {
      // Check if input value length is more than 1
      if (typingTimeout) clearTimeout(typingTimeout);

      setTypingTimeout(
        setTimeout(() => {
          performSearch();
        }, 500)
      );
    }
  };

  const handleCurrentInputClick = (e, val) => {
    e.preventDefault();
    if (val) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        val
      )}`;
      window.open(searchUrl, "_blank");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentInputRef.current) {
        currentInputRef.current.click();
      }
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="w-[420px] mx-auto">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          placeholder="Search here..."
          className="border border-gray-300 p-2 rounded w-full outline-none"
        />
        {currentInput && (
          <div
            className="cursor-pointer"
            onClick={(e) => handleCurrentInputClick(e, currentInput)}
            ref={currentInputRef}
          >
            <p>{currentInput}</p>
          </div>
        )}
        <div>
          {searchResults.length > 0 ? (
            searchResults.slice(0, 9).map((result, index) => (
              <div
                className="cursor-pointer"
                onClick={(e) => handleCurrentInputClick(e, result.title)}
                key={index}
              >
                {result.title}
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoogleSearch;
