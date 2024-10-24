import React from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function LoadingCardsComponent() {
  return (
    <ul>
      {cards.length > 0 &&
        cards.map((ele, i) => (
          <li
            data-aos="fade-up"
            data-aos-delay={100}
            className="w-full h-full rounded-lg"
            key={i + ele}
          >
            <a
              href={ele.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full rounded-lg group outline-none focus:outline-none"
            >
              <div className="isHoverStyle cursor-pointer bg-gray-800 h-full overflow-hidden w-full border-gray-900 rounded-lg shadow-gray-600 transition-all duration-500 ease-in-out">
                <div>
                  <div className="lg:h-48 md:h-52 h-56 relative">
                    {/* Fallback background pulse animation */}
                    <div className="h-full w-full absolute z-20 top-0 left-0 transition-opacity duration-300 ease-in-out opacity-100 bg-gray-600 animate-pulse"></div>
                  </div>
                </div>

                <div className="p-3 space-y-3 transition-all duration-500 ease-in-out">
                  <div className="cursor-pointer transition-opacity duration-500 ease-in-out">
                    <p className="bg-gray-600 py-[5px] w-24 rounded animate-pulse"></p>
                  </div>

                  <div className="transition-opacity duration-500 ease-in-out">
                    <div className="space-y-2.5">
                      <p className="bg-gray-600 py-[5px] w-11/12 rounded animate-pulse"></p>
                      <p className="bg-gray-600 py-[5px] w-8/12 rounded animate-pulse"></p>
                    </div>
                  </div>

                  <div className="text-gray-400 flex justify-between items-center">
                    <div>
                      <p className="bg-gray-600 py-[5px] w-16 rounded animate-pulse"></p>
                    </div>

                    <div>
                      <p className="bg-gray-600 py-[5px] w-12 rounded animate-pulse"></p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
    </ul>
  );
}

export default LoadingCardsComponent;
