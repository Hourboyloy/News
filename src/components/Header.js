// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import Weather from "@/API/weather";
// // import Link from "next/link";
// import Image from "next/image";
// import { IoMdSearch } from "react-icons/io";

// function Header(props) {
//   const { catchValueInput, handleCatchValueInput, background } = props;
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   // start search
//   const [query, setQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [typingTimeout, setTypingTimeout] = useState(null);
//   const [currentInput, setCurrentInput] = useState("");
//   const currentInputRef = useRef(null);
//   const apiKey = "AIzaSyA1eMrgzTydKpL3JNrOUn6nKi7mEyzYZQ8";
//   const searchEngineId = "f44f9e7fe832f4377";

//   const performSearch = () => {
//     const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(
//       query
//     )}&key=${apiKey}&cx=${searchEngineId}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const data = response.data;
//         if (data && data.items) {
//           setSearchResults(data.items);
//         } else {
//           setSearchResults([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching search results:", error);
//         setSearchResults([]);
//       });
//   };

//   const handleInputChange = (e) => {
//     const inputValue = e.target.value;
//     setQuery(inputValue);
//     setCurrentInput(inputValue);

//     if (inputValue.trim() === "") {
//       setSearchResults([]);
//     } else if (inputValue.trim().length > 1) {
//       // Check if input value length is more than 1
//       if (typingTimeout) clearTimeout(typingTimeout);

//       setTypingTimeout(
//         setTimeout(() => {
//           performSearch();
//         }, 500)
//       );
//     }
//   };

//   const handleCurrentInputClick = (e, val) => {
//     e.preventDefault();
//     if (val) {
//       const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
//         val
//       )}`;
//       window.open(searchUrl, "_blank");
//       // Clear input and suggestions after pressing Enter
//       setCurrentInput("");
//       setQuery("");
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       if (currentInput) {
//         const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
//           currentInput
//         )}`;
//         window.open(searchUrl, "_blank");

//         // Clear input and suggestions after pressing Enter
//         setCurrentInput("");
//         setQuery("");
//         setSearchResults([]);
//       }
//     }
//   };

//   return (
//     <div>
//       <div>
//         <div
//           style={{ backgroundImage: `url(${background?.bgurl})` }}
//           className="bg-center bg-no-repeat bg-cover relative flex justify-center items-center inset-0 transition-all duration-1000"
//         >
//           {/* Responsive Overlay */}
//           <div className="h-full inset-0 bg-opacity-40 bg-gray-700 absolute"></div>

//           {/* Main Content */}
//           <div className="h-screen w-full pt-20 md:pt-36 xl:pt-36 lg:pt-32">
//             <div className="w-full flex flex-col justify-center md:space-y-12 space-y-6">
//               {/* Weather Section */}
//               <div className="cursor-pointer w-full flex justify-center items-center">
//                 <div
//                   className="w-64 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-1/5 h-16 md:h-20 lg:h-28 2xl:h-24 rounded bg-opacity-70 bg-gray-800"
//                   data-aos="zoom-in"
//                 >
//                   <Weather />
//                 </div>
//               </div>

//               {/* Search Bar Section */}
//               <div className="w-full">
//                 <div className="w-full h-full flex justify-center">
//                   <div className="w-full flex flex-col justify-start items-center space-y-1">
//                     {/* Input Box */}
//                     <div
//                       className={`bg-white z-20 sticky rounded-3xl sm:w-9/12 w-10/12 lg:w-7/12 xl:w-2/6 shadow-md outline-none overflow-hidden ${
//                         currentInput == "" ? "pb-0" : "pb-3"
//                       }`}
//                     >
//                       <form className="w-full z-10 form relative">
//                         <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1 focus:outline-none">
//                           <Image
//                             src={`/images/google.png`}
//                             alt=""
//                             width={300}
//                             height={300}
//                             className="rounded-full w-7"
//                           />
//                         </button>

//                         {/* Input Field */}
//                         <div className="bg-white w-full md:text-base text-sm h-[47.20px] text-gray-500 rounded-full px-11 border-2 border-transparent placeholder-gray-400 transition-all duration-300">
//                           <input
//                             type="text"
//                             value={query}
//                             onKeyDown={handleKeyDown}
//                             autoComplete="off"
//                             onChange={handleInputChange}
//                             className="input focus:outline-none w-full h-full"
//                             placeholder="Enter search"
//                             required=""
//                           />
//                         </div>

//                         {/* Clear Button */}
//                         <div
//                           className={`${
//                             catchValueInput
//                               ? "absolute xl:top-3 top-4 right-5 xl:right-4 cursor-pointer"
//                               : "w-0 h-0 overflow-hidden"
//                           }`}
//                           onClick={() => {
//                             handleCatchValueInput("");
//                           }}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6 text-gray-800"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M6 18 18 6M6 6l12 12"
//                             />
//                           </svg>
//                         </div>
//                       </form>

//                       {/* Suggested Searches */}
//                       {currentInput && (
//                         <div className="pr-4">
//                           <div
//                             onClick={(e) =>
//                               handleCurrentInputClick(e, currentInput)
//                             }
//                             ref={currentInputRef}
//                             className="flex items-center space-x-2.5 border-l-4 border-blue-500 text-start h-[45px] bg-gray-100 hover:bg-gray-100 transition-all duration-200 px-[13px] text-gray-700 z-20 rounded-r-full"
//                           >
//                             <IoMdSearch className="md:text-base text-sm" />
//                             <p>{currentInput}</p>
//                           </div>

//                           <div
//                             onClick={(e) => handleCurrentInputClick(e, "news")}
//                             ref={currentInputRef}
//                             className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
//                           >
//                             <IoMdSearch className="md:text-base text-sm" />
//                             <p>news</p>
//                           </div>

//                           <div
//                             onClick={(e) =>
//                               handleCurrentInputClick(e, "you tube")
//                             }
//                             ref={currentInputRef}
//                             className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
//                           >
//                             <IoMdSearch className="md:text-base text-sm" />
//                             <p>you tube</p>
//                           </div>

//                           <div
//                             onClick={(e) =>
//                               handleCurrentInputClick(e, "face book")
//                             }
//                             ref={currentInputRef}
//                             className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
//                           >
//                             <IoMdSearch className="md:text-base text-sm" />
//                             <p>face book</p>
//                           </div>

//                           <div
//                             onClick={(e) =>
//                               handleCurrentInputClick(e, "tik tok")
//                             }
//                             ref={currentInputRef}
//                             className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
//                           >
//                             <IoMdSearch className="text-lg" />
//                             <p>tik tok</p>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;








import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Weather from "@/API/weather";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";

function Header(props) {
  const { background } = props;

  // Initialize AOS animations
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Search state variables
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [currentInput, setCurrentInput] = useState("");
  const currentInputRef = useRef(null); // Reference for the input field
  const apiKey = "AIzaSyA1eMrgzTydKpL3JNrOUn6nKi7mEyzYZQ8";
  const searchEngineId = "f44f9e7fe832f4377";

  // Function to perform search
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

  // Handle input changes
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    setCurrentInput(inputValue);

    if (inputValue.trim() === "") {
      setSearchResults([]);
    } else if (inputValue.trim().length > 1) {
      if (typingTimeout) clearTimeout(typingTimeout);

      setTypingTimeout(
        setTimeout(() => {
          performSearch();
        }, 500)
      );
    }
  };

  // Handle search on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (currentInput) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
          currentInput
        )}`;
        window.open(searchUrl, "_blank");
        setCurrentInput("");
        setQuery("");
        setSearchResults([]);
      }
    }
  };

  // Handle click for suggestions
  const handleCurrentInputClick = (e, val) => {
    e.preventDefault();
    if (val) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        val
      )}`;
      window.open(searchUrl);
      setCurrentInput("");
      setQuery("");
    }
  };

  // Clear input focus when scroll occurs
  useEffect(() => {
    const handleScroll = () => {
      if (currentInputRef.current) {
        currentInputRef.current.blur(); // Remove focus on scroll, but keep the input value
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${background?.bgurl})` }}
        className="bg-center bg-no-repeat bg-cover relative flex justify-center items-center inset-0 transition-all duration-1000"
      >
        <div className="h-full inset-0 bg-opacity-40 bg-gray-700 absolute"></div>

        <div className="h-screen w-full pt-20 md:pt-36 xl:pt-36 lg:pt-32">
          <div className="w-full flex flex-col justify-center md:space-y-12 space-y-6">
            <div className="cursor-pointer w-full flex justify-center items-center">
              <div
                className="w-64 md:w-5/12 lg:w-4/12 xl:w-3/12 2xl:w-1/5 h-16 md:h-20 lg:h-28 2xl:h-24 rounded bg-opacity-70 bg-gray-800"
                data-aos="zoom-in"
              >
                <Weather />
              </div>
            </div>

            <div className="w-full">
              <div className="w-full h-full flex justify-center">
                <div className="w-full flex flex-col justify-start items-center space-y-1">
                  <div
                    className={`bg-white z-20 sticky rounded-3xl sm:w-9/12 w-10/12 lg:w-7/12 xl:w-2/6 shadow-md outline-none overflow-hidden ${
                      currentInput === "" ? "pb-0" : "pb-3"
                    }`}
                  >
                    <form className="w-full z-10 form relative">
                      <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1 focus:outline-none">
                        <Image
                          src={`/images/google.png`}
                          alt=""
                          width={300}
                          height={300}
                          className="rounded-full w-7"
                        />
                      </button>

                      <div className="bg-white w-full md:text-base text-sm h-[47.20px] text-gray-500 rounded-full px-11 border-2 border-transparent placeholder-gray-400 transition-all duration-300">
                        <input
                          type="text"
                          value={query}
                          onKeyDown={handleKeyDown}
                          autoComplete="off"
                          onChange={handleInputChange}
                          className="input focus:outline-none w-full h-full"
                          placeholder="Enter search"
                          ref={currentInputRef} // Ref attached to input field
                        />
                      </div>
                    </form>

                    {/* Suggestions rendering */}
                    {currentInput && (
                      <div className="pr-4">
                        {/* Current input suggestion */}
                        <div
                          onClick={(e) =>
                            handleCurrentInputClick(e, currentInput)
                          }
                          className="flex items-center space-x-2.5 border-l-4 border-blue-500 text-start h-[45px] bg-gray-100 hover:bg-gray-100 transition-all duration-200 px-[13px] text-gray-700 z-20 rounded-r-full"
                        >
                          <IoMdSearch className="md:text-base text-sm" />
                          <p>{currentInput}</p>
                        </div>

                        {/* Additional suggestions */}
                        <div
                          onClick={(e) => handleCurrentInputClick(e, "news")}
                          className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                        >
                          <IoMdSearch className="md:text-base text-sm" />
                          <p>news</p>
                        </div>

                        <div
                          onClick={(e) =>
                            handleCurrentInputClick(e, "you tube")
                          }
                          className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                        >
                          <IoMdSearch className="md:text-base text-sm" />
                          <p>you tube</p>
                        </div>

                        <div
                          onClick={(e) =>
                            handleCurrentInputClick(e, "face book")
                          }
                          className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                        >
                          <IoMdSearch className="md:text-base text-sm" />
                          <p>face book</p>
                        </div>

                        <div
                          onClick={(e) => handleCurrentInputClick(e, "tik tok")}
                          className="flex items-center space-x-2.5 border-blue-500 text-start h-[45px] hover:bg-gray-100 transition-all duration-200 px-[18px] text-gray-700 z-20 rounded-r-full"
                        >
                          <IoMdSearch className="text-lg" />
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
    </div>
  );
}

export default Header;


