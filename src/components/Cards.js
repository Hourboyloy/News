// "use client";
// import React, { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
// // import { arrayImage } from "@/database/arrayImage";
// // import Image from "next/image";

// function Cards(props) {
//   const { news } = props;
//   // const [currentIndex, setCurrentIndex] = useState(0);
//   // var handleChangeCurrentIndex = (value) => {
//   //   setCurrentIndex(value);
//   // };

//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     if (currentIndex === 3) {
//   //       setCurrentIndex(0);
//   //     } else {
//   //       setCurrentIndex(currentIndex + 1);
//   //     }
//   //   }, 5000);
//   //   return () => clearTimeout(timer);
//   // }, [currentIndex]);

//   return (
//     <div className=" bg-gray-900  p-4 space-y-3 mx-auto max-w-[1520px]">
//       <div>
//         <ul className=" grid  gap-3  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
//           {/* <div
//             data-aos="fade-up"
//             className="isHoverStyle w-full col sm:col-span-2 h-72 overflow-hidden rounded-lg relative"
//           >
//             <Image
//               src={`/images/slide/${arrayImage[currentIndex]}`}
//               alt=""
//               width={500} // Set the width of the image
//               height={300} // Set the height of the image
//               className="w-full h-72 object-cover object-center transition-all duration-75"
//             />
//             <div className=" absolute bottom-0 text-slate-300 px-3 py-1 space-y-1">
//               <div className="flex cursor-pointer space-x-2">
//                 <div>
//                   <Image
//                     src={`/images/logo7.png`}
//                     alt=""
//                     width={500} // Set the width of the image
//                     height={300} // Set the height of the image
//                     className=" w-5 border h-5 rounded-full"
//                   />
//                 </div>
//                 <div className=" text-gray-300 text-sm">
//                   Business Insider - 17h
//                 </div>
//               </div>
//               <div>
//                 <p className=" text-lg">
//                   Procedure of submitting a statement to such conditions.
//                   Procedure of submitting
//                 </p>
//               </div>
//               <div>
//                 <div className="text-gray-400 flex justify-between items-center">
//                   <div className=" flex items-center space-x-3">
//                     <div className="cursor-pointer flex space-x-1 items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-5 "
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
//                         />
//                       </svg>
//                       <span>1k</span>
//                     </div>
//                     <div className="cursor-pointer flex space-x-1 items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-5 "
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
//                         />
//                       </svg>
//                       <span></span>
//                     </div>
//                     <div className="cursor-pointer flex space-x-1 items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-5 "
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
//                         />
//                       </svg>
//                       <span></span>
//                     </div>
//                   </div>
//                   <div>
//                     <ul className="md:-mr-20 mr-14 lg:mr-6 flex items-center space-x-2 rounded-full bg-gray-800 py-1 px-2">
//                       {arrayImage.length > 0 &&
//                         arrayImage.map((e, i) => (
//                           <li
//                             onClick={() => handleChangeCurrentIndex(i)}
//                             key={e + i}
//                           >
//                             <div
//                               className={`${
//                                 i === currentIndex
//                                   ? "cursor-pointer w-4 h-2 rounded-full bg-white"
//                                   : "cursor-pointer w-2 h-2 rounded-full bg-gray-400"
//                               }`}
//                             ></div>
//                           </li>
//                         ))}
//                     </ul>
//                   </div>
//                   <div className="cursor-pointer justify-center items-center space-x-1 flex">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="w-5 text-gray-300"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
//                       />
//                     </svg>
//                     <span className=" text-sm">Trending</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}

//           {/* <div
//             data-aos="fade-up"
//             className="isHoverStyle w-full h-72 cursor-pointer items-center space-x-1 flex flex-col text-white space-y-3 py-3 px-2 bg-gray-800 rounded-lg"
//           >
//             <div className="w-full flex justify-between items-center">
//               <div className=" flex items-center space-x-2">
//                 <Image
//                   src={`/images/logo9.jpg`}
//                   alt=""
//                   width={500} // Set the width of the image
//                   height={300} // Set the height of the image
//                   className=" w-5 border h-5 rounded-full"
//                 />
//                 <span>Shopping</span>
//               </div>
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className=" h-52 overflow-hidden relative">
//               <Image
//                 src={`/images/photo12.avif`}
//                 alt=""
//                 width={500}
//                 height={300}
//                 className=" rounded-lg object-bottom object-cover"
//               />
//               <p className=" absolute  text-white font-semibold pl-3 bottom-2">
//                 DICK&apos;S Shopping Goods
//               </p>
//             </div>
//             <div className=" flex space-x-2 items-center">
//               <p className=" w-3 h-3 rounded-full bg-gray-400"></p>
//               <p className=" w-2 h-2 p-px rounded-full bg-gray-400"></p>
//               <p className=" w-2 h-2 rounded-full bg-gray-400"></p>
//               <p className=" w-1 h-1 p-px rounded-full bg-gray-400"></p>
//               <p className=" w-1 h-1 rounded-full bg-gray-400"></p>
//             </div>
//           </div> */}

//           {news?.length > 0 &&
//             news.map((ele, i) => (
//               <li
//                 data-aos="fade-up"
//                 className="w-full h-full rounded-lg"
//                 key={i + ele}
//               >
//                 <a
//                   href={`${ele.articleUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full h-full rounded-lg group outline-none focus:outline-none"
//                 >
//                   <div className=" isHoverStyle cursor-pointer bg-gray-800 h-full overflow-hidden  w-full border-gray-900 rounded-lg  shadow-gray-600">
//                     <div className="h-44 overflow-hidden relative flex items-center justify-center">
//                       {ele.breakingnews === 1 && (
//                         <div className=" absolute z-10 top-1.5 rounded-sm right-0 bg-orange-600 text-xs font-semibold text-white px-1 py-0.5">
//                           Breaking News
//                         </div>
//                       )}
//                       {/* <Image
//                       src={ele.photo}
//                       className="h-full rounded-t-lg shadow-gray-600"
//                       width={500}
//                       height={300}
//                       alt=""
//                     /> */}

//                       <img
//                         src={`${ele.photo}`}
//                         className="h-full rounded-t-lg shadow-gray-600"
//                         width={500}
//                         height={300}
//                         alt="Image description"
//                       />

//                       <div className="responsiveforlaptop hidden w-full h-full rounded-t-lg transition-all duration-500 ease-in-out items-center absolute group-hover:inset-0  group-hover:bg-gray-800  group-hover:bg-opacity-50 z-20 top-0 group-hover:opacity-100  opacity-0">
//                         <div
//                           className={`
//                           flex justify-center items-center mt-2 space-x-2 mr-48 duration-75 transition-all`}
//                         >
//                           <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6 "
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6 18 18 6M6 6l12 12"
//                               />
//                             </svg>
//                           </div>
//                           <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className=" p-3 space-y-2">
//                       <div className="flex cursor-pointer space-x-2">
//                         {/* <div>
//                         <Image
//                           src={
//                             ele.logo.startsWith("http")
//                               ? ele.logo
//                               : `https://manage-news-server134.vercel.app/${ele.logo}`
//                           }
//                           alt=""
//                           width={500}
//                           height={300}
//                           className="w-5 border h-5 rounded-full"
//                         />
//                       </div> */}

//                         <div className="flex flex-wrap items-center">
//                           {ele.category !== null && (
//                             <p className="pr-1 capitalize text-sm text-gray-300 font-semibold">
//                               {ele.category}
//                             </p>
//                           )}
//                           <p className="text-gray-300 text-[12px]">
//                             {`. ${(() => {
//                               const timeDifference =
//                                 Date.now() - new Date(ele.createdAt).getTime();
//                               const seconds = Math.floor(timeDifference / 1000);
//                               const minutes = Math.floor(seconds / 60);
//                               const hours = Math.floor(minutes / 60);
//                               const days = Math.floor(hours / 24);
//                               const weeks = Math.floor(days / 7);

//                               if (weeks > 0) {
//                                 return `${weeks} week${
//                                   weeks > 1 ? "s" : ""
//                                 } ago`;
//                               } else if (days > 0) {
//                                 return `${days}day${days > 1 ? "s" : ""} ago`;
//                               } else if (hours > 0) {
//                                 return `${hours}h${hours > 1 ? "" : ""} ago`;
//                               } else if (minutes > 0) {
//                                 return `${minutes}min${
//                                   minutes > 1 ? "" : ""
//                                 } ago`;
//                               } else {
//                                 return `just now`;
//                               }
//                             })()}`}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <div className=" font-normal text-sm text-white">
//                           {ele.title.length > 64 ? (
//                             <p>{ele.title.slice(0, 63)}...</p>
//                           ) : (
//                             ele.title
//                           )}
//                         </div>
//                       </div>

//                       <div className="text-gray-400 flex justify-between items-center ">
//                         {/* <div className=" flex items-center space-x-3">
//                           <div className="cursor-pointer flex space-x-1 items-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-[18px]"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
//                             />
//                           </svg>
//                           <div
//                             className={`${
//                               ele.likes > 0
//                                 ? "text-sm block text-nowrap"
//                                 : "hidden"
//                             }`}
//                           >
//                             {ele.likes < 1000
//                               ? ele.likes
//                               : `
//                               ${(ele.likes / 1000).toFixed(1)}k
//                               `}
//                           </div>
//                         </div>

//                           <div className="cursor-pointer flex space-x-1 items-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-5 "
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
//                             />
//                           </svg>
//                           <span
//                             className={`${
//                               ele.noLikes > 0 ? "text-sm block" : "hidden"
//                             }`}
//                           >
//                             {ele.noLikes < 1000
//                               ? ele.noLikes
//                               : `
//                               ${(ele.noLikes / 1000).toFixed(1)}k
//                               `}
//                           </span>
//                         </div>

//                           <div className="cursor-pointer flex space-x-1 items-center">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-[18px] "
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
//                             />
//                           </svg>
//                           <span
//                             className={`${
//                               ele.commant > 0 ? "block text-sm" : "hidden"
//                             }`}
//                           >
//                             {ele.commant < 1000
//                               ? ele.commant
//                               : `
//                               ${(ele.commant / 1000).toFixed(1)}k
//                               `}
//                           </span>
//                         </div>
//                         </div> */}

//                         <div className="text-xs">{ele.createdAt.split("T")[0]}</div>

//                         <div
//                           className={`${
//                             ele.trending
//                               ? "cursor-pointer justify-center items-center space-x-1 flex"
//                               : " w-0 h-0 overflow-hidden"
//                           }`}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-[18px] text-gray-300"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
//                             />
//                           </svg>
//                           <span className=" text-xs">Trending</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Cards;

// "use client";
// import React, { useEffect, useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// function Cards(props) {
//   const { news } = props;
//   const [newsRender, setNewsRender] = useState([]);
//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);

// useEffect(() => {
//   const element = []
//   news?.forEach((ele,i) => {
//     if(i>=offset && i<offset+10){
//       element.push(ele);
//     }
//     setNewsRender(prev=>[...prev,...element]);
//   });
// }, [offset]);

//   useEffect(() => {
//     const handleScroll = (e) => {
//       const scrollHeight = e.target.documentElement.scrollHeight;
//       const currentHeight =
//         e.target.documentElement.scrollTop + window.innerHeight;
//       if (currentHeight + 1 >= scrollHeight) {
//         setOffset(offset + 10);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.addEventListener("scroll", handleScroll);
//   }, [offset]);

//   return (
//     <div className=" bg-gray-900  p-4 space-y-3 mx-auto max-w-[1520px]">
//       <div>
//         <ul className=" grid  gap-3  2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
//           {newsRender?.length > 0 &&
//             newsRender.map((ele, i) => (
//               <li
//                 data-aos="fade-up"
//                 className="w-full h-full rounded-lg"
//                 key={i + ele}
//               >
//                 <a
//                   href={`${ele.articleUrl}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="w-full h-full rounded-lg group outline-none focus:outline-none"
//                 >
//                   <div className=" isHoverStyle cursor-pointer bg-gray-800 h-full overflow-hidden  w-full border-gray-900 rounded-lg  shadow-gray-600">
//                     <div className="h-44 overflow-hidden relative flex items-center justify-center">
//                       {ele.breakingnews === 1 && (
//                         <div className=" absolute z-10 top-1.5 rounded-sm right-0 bg-orange-600 text-xs font-semibold text-white px-1 py-0.5">
//                           Breaking News
//                         </div>
//                       )}

//                       <img
//                         src={`${ele.photo}`}
//                         className="h-full rounded-t-lg shadow-gray-600"
//                         width={500}
//                         height={300}
//                         alt="Image description"
//                       />

//                       <div className="responsiveforlaptop hidden w-full h-full rounded-t-lg transition-all duration-500 ease-in-out items-center absolute group-hover:inset-0  group-hover:bg-gray-800  group-hover:bg-opacity-50 z-20 top-0 group-hover:opacity-100  opacity-0">
//                         <div
//                           className={`
//                           flex justify-center items-center mt-2 space-x-2 mr-48 duration-75 transition-all`}
//                         >
//                           <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6 "
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6 18 18 6M6 6l12 12"
//                               />
//                             </svg>
//                           </div>
//                           <div className=" w-8 h-8 bg-white flex justify-center items-center rounded-full shadow-slate-400 shadow cursor-pointer">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className=" p-3 space-y-2">
//                       <div className="flex cursor-pointer space-x-2">
//                         <div className="flex flex-wrap items-center">
//                           {ele.category !== null && (
//                             <p className="pr-1 capitalize text-sm text-gray-300 font-semibold">
//                               {ele.category}
//                             </p>
//                           )}
//                           <p className="text-gray-300 text-[12px]">
//                             {`. ${(() => {
//                               const timeDifference =
//                                 Date.now() - new Date(ele.createdAt).getTime();
//                               const seconds = Math.floor(timeDifference / 1000);
//                               const minutes = Math.floor(seconds / 60);
//                               const hours = Math.floor(minutes / 60);
//                               const days = Math.floor(hours / 24);
//                               const weeks = Math.floor(days / 7);

//                               if (weeks > 0) {
//                                 return `${weeks} week${
//                                   weeks > 1 ? "s" : ""
//                                 } ago`;
//                               } else if (days > 0) {
//                                 return `${days}day${days > 1 ? "s" : ""} ago`;
//                               } else if (hours > 0) {
//                                 return `${hours}h${hours > 1 ? "" : ""} ago`;
//                               } else if (minutes > 0) {
//                                 return `${minutes}min${
//                                   minutes > 1 ? "" : ""
//                                 } ago`;
//                               } else {
//                                 return `just now`;
//                               }
//                             })()}`}
//                           </p>
//                         </div>
//                       </div>
//                       <div>
//                         <div className=" font-normal text-sm text-white">
//                           {ele.title.length > 64 ? (
//                             <p>{ele.title.slice(0, 63)}...</p>
//                           ) : (
//                             ele.title
//                           )}
//                         </div>
//                       </div>

//                       <div className="text-gray-400 flex justify-between items-center ">
//                         <div className="text-xs">
//                           {ele.createdAt.split("T")[0]}
//                         </div>

//                         <div
//                           className={`${
//                             ele.trending
//                               ? "cursor-pointer justify-center items-center space-x-1 flex"
//                               : " w-0 h-0 overflow-hidden"
//                           }`}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-[18px] text-gray-300"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
//                             />
//                           </svg>
//                           <span className=" text-xs">Trending</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Cards;

"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards(props) {
  const { news } = props;
  const [newsRender, setNewsRender] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMoreNews, setHasMoreNews] = useState(true);
  const [CardsDelays, setCardDelays] = useState({});
  const delaytime = newsRender.length <= 0 ? 0 : 500;

  // Initialize AOS for animations
  useEffect(() => {
    Aos.init({ duration: newsRender.length <= 0 ? 0 : 500, once: true });
  }, [newsRender]);

  // Function to load news items based on the current offset
  const loadNews = () => {
    if (!hasMoreNews || loading) return;

    const newItems = news.slice(offset, offset + 5);
    if (newItems.length > 0) {
      setLoading(true);

      // Simulate loading delay
      setTimeout(() => {
        setNewsRender((prev) => [...prev, ...newItems]);
        setLoading(false);

        // Set delay for each card rendering
        newItems.forEach((newsItem) => {
          if (newsItem._id) {
            setTimeout(() => {
              setCardDelays((prevDelays) => ({
                ...prevDelays,
                [newsItem._id]: true,
              }));
            }, 2500); // 2.5 seconds delay for the image
          }
        });
      }, delaytime); // 1 second loading delay
    } else {
      setHasMoreNews(false);
    }
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const currentHeight =
      window.innerHeight + document.documentElement.scrollTop;

    if (currentHeight + 1 >= scrollHeight && hasMoreNews) {
      setOffset((prevOffset) => prevOffset + 5);
    }
  };

  // Add scroll event listener with debounce
  useEffect(() => {
    const debounceScroll = () => {
      let timeout;
      return () => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 200); // 200ms debounce
      };
    };

    const debouncedHandleScroll = debounceScroll();
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [hasMoreNews]);

  // Load more news whenever the offset changes
  useEffect(() => {
    loadNews();
  }, [offset]);

  return (
    <div className="bg-gray-900 space-y-2 mx-auto max-w-[1520px] p-2 min-h-[20vh]">
      <div className="">
        <ul className="grid gap-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 pb-5">
          {newsRender.length > 0 &&
            newsRender.map((ele, i) => (
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
                        {/* Image Display */}
                        {CardsDelays[ele._id] ? (
                          <div className="lg:h-48 md:h-52 h-56 relative flex items-center justify-center transition-all duration-700 ease-in-out">
                            {/* Breaking News Label */}
                            {ele.breakingnews === 1 && (
                              <div className="absolute z-10 top-1.5 right-0 bg-orange-600 text-xs font-semibold text-white px-2 py-1 rounded-md shadow-md transition-transform duration-300 ease-in-out">
                                Breaking News
                              </div>
                            )}

                            {/* Image with Smooth Transition */}
                            <img
                              src={ele.photo}
                              className="h-full rounded-t-lg shadow-lg opacity-0 transform transition-transform duration-700 ease-in-out"
                              width={500}
                              height={300}
                              alt="Image description"
                              onLoad={(e) => {
                                e.target.classList.remove("opacity-0");
                                e.target.classList.add(
                                  "opacity-100",
                                  "scale-100"
                                );
                              }}
                            />

                            {/* Hover Overlay */}
                            <div className="responsiveforlaptop hidden w-full h-full rounded-t-lg transition-opacity duration-500 ease-in-out items-center absolute group-hover:inset-0 group-hover:bg-gray-800 group-hover:bg-opacity-50 z-20 top-0 group-hover:opacity-100 opacity-0">
                              <div className="flex justify-center items-center mt-2 space-x-4 mr-44 duration-75 transition-all ease-in-out">
                                {/* Close Button */}
                                <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
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

                                {/* Action Button */}
                                <div className="w-10 h-10 bg-white flex justify-center items-center rounded-full shadow-md cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600">
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
                                      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        {/* Fallback background pulse animation */}
                        <div
                          className={`h-full w-full absolute z-20 top-0 left-0 transition-opacity duration-300 ease-in-out ${
                            CardsDelays[ele._id]
                              ? "opacity-0"
                              : "opacity-100 bg-gray-600 animate-pulse"
                          }`}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={`p-3 ${
                        CardsDelays[ele._id] ? "space-y-2" : "space-y-3"
                      } transition-all duration-500 ease-in-out`}
                    >
                      <div className="cursor-pointer transition-opacity duration-500 ease-in-out">
                        {CardsDelays[ele._id] === true ? (
                          <div className="flex flex-wrap items-center">
                            {ele.category && (
                              <p className="pr-1 capitalize text-sm text-gray-300 font-semibold transition-opacity duration-300 ease-in-out">
                                {ele.category}
                              </p>
                            )}
                            <p className="text-gray-300 text-[12px] transition-opacity duration-300 ease-in-out">
                              {`. ${(() => {
                                const timeDifference =
                                  Date.now() -
                                  new Date(ele.createdAt).getTime();
                                const seconds = Math.floor(
                                  timeDifference / 1000
                                );
                                const minutes = Math.floor(seconds / 60);
                                const hours = Math.floor(minutes / 60);
                                const days = Math.floor(hours / 24);
                                const weeks = Math.floor(days / 7);

                                if (weeks > 0) {
                                  return `${weeks} week${
                                    weeks > 1 ? "s" : ""
                                  } ago`;
                                } else if (days > 0) {
                                  return `${days} day${
                                    days > 1 ? "s" : ""
                                  } ago`;
                                } else if (hours > 0) {
                                  return `${hours}h ago`;
                                } else if (minutes > 0) {
                                  return `${minutes} min ago`;
                                } else {
                                  return `just now`;
                                }
                              })()}`}
                            </p>
                          </div>
                        ) : (
                          <p className="bg-gray-600 py-[5px] w-24 rounded animate-pulse"></p>
                        )}
                      </div>

                      <div className="transition-opacity duration-500 ease-in-out">
                        {CardsDelays[ele._id] === true ? (
                          <div className="font-normal text-sm text-white">
                            {ele.title.length > 64 ? (
                              <p>{ele.title.slice(0, 63)}...</p>
                            ) : (
                              ele.title
                            )}
                          </div>
                        ) : (
                          <div className="space-y-2.5">
                            <p className="bg-gray-600 py-[5px] w-11/12 rounded animate-pulse"></p>
                            <p className="bg-gray-600 py-[5px] w-8/12 rounded animate-pulse"></p>
                          </div>
                        )}
                      </div>

                      <div className="text-gray-400 flex justify-between items-center">
                        <div className="">
                          {CardsDelays[ele._id] === true ? (
                            <p className="text-xs">
                              {ele.createdAt.split("T")[0]}
                            </p>
                          ) : (
                            <p className="bg-gray-600 py-[5px] w-16 rounded animate-pulse"></p>
                          )}
                        </div>

                        <div className="">
                          {CardsDelays[ele._id] === true ? (
                            ele.trending === 1 && (
                              <div className="cursor-pointer flex justify-center items-center space-x-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-[18px] text-gray-300"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                                  />
                                </svg>
                                <span className="text-xs">Trending</span>
                              </div>
                            )
                          ) : (
                            <p className="bg-gray-600 py-[5px] w-12 rounded animate-pulse"></p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
