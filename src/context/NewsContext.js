// src/context/NewsContext.js
"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create a context for news and background
const NewsContext = createContext();

// Create a provider component to fetch news and background data
export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]); // Initialize with an empty array for news
  const [background, setBackground] = useState(null); // Initialize with null for background
  const [loading, setLoading] = useState({ news: true, background: true }); // Track loading state
  const [error, setError] = useState(null); // Track any error

  // Fetch news data
  useEffect(() => {
    // http://localhost:5051
    // https://manage-news-server134.vercel.app
    const fetchNews = async () => {
      try {
        setLoading(true); // Set loading to true while fetching
        const response = await axios.get("https://manage-news-server134.vercel.app/user-get-all");
        if (response.status === 200) {
          setNews(response.data.news.reverse()); // Reverse directly while setting news
          setLoading((prev) => ({ ...prev, news: false }));
        }
      } catch (err) {
        setError(err.message); // Set error if something goes wrong
      }
    };

    fetchNews();
  }, []); // Empty dependency array to run this only once

  // Fetch background data
  useEffect(() => {
    const fetchBackground = async () => {
      try {
        setLoading(true); // Set loading to true while fetching
        const response = await axios.get(
          "https://manage-news-server134.vercel.app/background-seted"
        );
        if (response.status === 200) {
          if (response.data.message !== "No document with seted=true found") {
            setBackground(response.data.seted); // Set background if found
          }
          setLoading((prev) => ({ ...prev, background: false }));
        } else {
          setBackground(null); // If no background found, set null
        }
      } catch (err) {
        setError(err.message); // Set error if something goes wrong
      }
    };

    fetchBackground();
  }, []); // Empty dependency array to run this only once

  return (
    <NewsContext.Provider value={{ news, background, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook to use the news and background context easily in any component
export const useNewsWeb = () => {
  return useContext(NewsContext);
};
