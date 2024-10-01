import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Weather from "@/API/weather";
// import Link from "next/link";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";

function Header(props) {
  const { catchValueInput, handleCatchValueInput, background } = props;
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // start search
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
      if (currentInput) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          currentInput
        )}`;
        window.open(searchUrl, "_blank");
      }
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background?.bgurl})` }}
      className="bg-no-repeat bg-cover bg-centerc h-screen w-full relative flex justify-center items-center inset-0"
    >
      <div className="h-screen inset-0 bg-opacity-20 bg-gray-500 absolute"></div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="absolute right-5 top-4 flex space-x-4">
            {/* Your previous code for icons */}
          </div>
          <div className="cursor-pointer absolute w-full h-full -top-40 sm:-top-52 lg:-top-44  xl:-top-48 2xl:-top-56 flex justify-center items-center">
            <div
              className="w-72 sm:w-6/12 lg:w-4/12 xl:w-3/12 2xl:w-1/5 h-28 2xl:h-24 rounded bg-opacity-70 bg-gray-800"
              data-aos="zoom-in"
            >
              <Weather />
            </div>
          </div>

          <div className="w-full h-full absolute xl:-top-10">
            <div className=" w-full h-full flex justify-center translate-y-[45%]">
              <div className="w-full flex flex-col justify-start items-center space-y-1">
                <div
                  className={`bg-white rounded-3xl sm:w-9/12 w-10/12 lg:w-7/12  xl:w-2/6 shadow-md outline-none overflow-hidden ${
                    currentInput == "" ? "pb-0" : "pb-3"
                  }`}
                >
                  <form className=" w-full z-10 form relative">
                    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                      <Image
                        src={`/images/google.png`}
                        alt=""
                        width={300}
                        height={300}
                        className=" rounded-full w-7"
                      />
                    </button>
                    <div className="bg-white w-full text-2xl xl:text-lg h-[47.20px] text-gray-500  rounded-full px-11  border-2 border-transparent  placeholder-gray-400 transition-all duration-300">
                      <input
                        type="text"
                        value={query}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        onChange={handleInputChange}
                        className="input focus:outline-none w-full h-full "
                        placeholder="Enter search"
                        required=""
                      />
                    </div>
                    <div
                      className={`${
                        catchValueInput
                          ? "absolute xl:top-3 top-4  right-5 xl:right-4 cursor-pointer"
                          : "w-0 h-0 overflow-hidden"
                      }`}
                      onClick={() => {
                        handleCatchValueInput("");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </form>

                  {currentInput && (
                    <div className=" pr-4">
                      <div className="flex items-center space-x-2.5 border-l-4 border-blue-500 text-start h-[45px] bg-gray-100 hover:bg-gray-100 transition-all duration-200 px-[13px] text-gray-700 z-20 rounded-r-full">
                        <IoMdSearch className=" text-lg" />
                        <p
                          onClick={(e) =>
                            handleCurrentInputClick(e, currentInput)
                          }
                          ref={currentInputRef}
                        >
                          {currentInput}
                        </p>
                      </div>

                      <div
                        onClick={(e) => handleCurrentInputClick(e, "news")}
                        ref={currentInputRef}
                        className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                      >
                        <IoMdSearch className=" text-lg" />
                        <p>news</p>
                      </div>

                      <div
                        onClick={(e) => handleCurrentInputClick(e, "you tube")}
                        ref={currentInputRef}
                        className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                      >
                        <IoMdSearch className=" text-lg" />
                        <p>you tube</p>
                      </div>

                      <div
                        onClick={(e) => handleCurrentInputClick(e, "face book")}
                        ref={currentInputRef}
                        className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                      >
                        <IoMdSearch className=" text-lg" />
                        <p>face book</p>
                      </div>

                      <div
                        onClick={(e) => handleCurrentInputClick(e, "tik tok")}
                        ref={currentInputRef}
                        className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                      >
                        <IoMdSearch className=" text-lg" />
                        <p>tik tok</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
