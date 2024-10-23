"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  // const https = `http://localhost:5051`;
  const https = `https://manage-news-server134.vercel.app`;
  const [news, setNews] = useState([]); // Initialize with an empty array for news
  const [newsTechnology, setNewsTechnology] = useState([]); // Initialize with an empty array for technology news
  const [newsSports, setNewsSports] = useState([]); // Initialize with an empty array for technology news
  const [newsHealth, setNewsHealth] = useState([]); // Initialize with an empty array for technology news
  const [background, setBackground] = useState(null); // Initialize with null for background
  const [loading, setLoading] = useState({ news: true, background: true }); // Track loading state for both news and background
  const [error, setError] = useState(null); // Track any error
  const [offset, setOffset] = useState(0); // Add offset to track pagination for general news
  const [offsetTechnology, setOffsetTechnology] = useState(0);
  const [offsetSports, setOffsetSports] = useState(0);
  const [offsetHealth, setOffsetHealth] = useState(0);

  const fetchNews = async () => {
    try {
      setLoading((prev) => ({ ...prev, news: true })); // Set loading for news
      const response = await axios.get(
        `${https}/user-get-all/?offset=${offset}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Combine existing news and newly fetched news
        const combinedNews = [...news, ...newFetchedNews];

        // Filter out duplicates by title
        const uniqueNews = combinedNews.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t._id === item._id) // Ensure you have unique IDs
        );
        // Update state with unique news
        if (uniqueNews.length > 0) {
          // Add delayCard field to each unique news item
          const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
            ...item,
          }));

          setNews(uniqueNewsWithDelayCard); // Update state with unique news
        }

        // Update the offset for the next fetch
        setOffset(() => news.length + 5); // Increment offset by 10 for the next batch

        // Set delayCard to true after 2 seconds for all items
        const timer = setTimeout(() => {
          setNews((prevNews) =>
            prevNews.map((item) => ({ ...item, delayCard: true }))
          );
        }, 2000);

        return () => clearTimeout(timer);
      }
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading((prev) => ({ ...prev, news: false })); // Stop loading
    }
  };

  const fetchNewsTechnology = async () => {
    try {
      setLoading((prev) => ({ ...prev, news: true })); // Set loading for news
      const response = await axios.get(
        `${https}/user-get-all-by-technology/?offset=${offsetTechnology}&limit=10`
      );

      console.log(offsetTechnology);
      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Combine existing technology news and newly fetched news
        const combinedTechnologyNews = [...newsTechnology, ...newFetchedNews];

        // Filter out duplicates by title
        const uniqueNews = combinedTechnologyNews.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.title === item.title)
        );

        // Check if there are unique news items to add
        if (uniqueNews.length > 0) {
          // Add delayCard field to each unique news item
          const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
            ...item,
          }));

          setNewsTechnology(uniqueNewsWithDelayCard); // Update state with unique news

          // Set delayCard to true after 2 seconds
          const timer = setTimeout(() => {
            setNewsTechnology((prevNews) =>
              prevNews.map((item) => ({ ...item, delayCard: true }))
            );
          }, 1000);

          return () => clearTimeout(timer);
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading((prev) => ({ ...prev, news: false })); // Stop loading
    }
  };

  const fetchNewsSports = async () => {
    try {
      setLoading((prev) => ({ ...prev, news: true })); // Set loading for news
      const response = await axios.get(
        `${https}/user-get-all-by-sports/?offset=${offsetSports}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Combine existing technology news and newly fetched news
        const combinedTechnologyNews = [...newsSports, ...newFetchedNews];

        // Filter out duplicates by title
        const uniqueNews = combinedTechnologyNews.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.title === item.title)
        );

        // Check if there are unique news items to add
        if (uniqueNews.length > 0) {
          // Add delayCard field to each unique news item
          const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
            ...item,
          }));

          setNewsSports(uniqueNewsWithDelayCard); // Update state with unique news

          // Set delayCard to true after 2 seconds
          const timer = setTimeout(() => {
            setNewsSports((prevNews) =>
              prevNews.map((item) => ({ ...item, delayCard: true }))
            );
          }, 2000);

          return () => clearTimeout(timer);
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading((prev) => ({ ...prev, news: false })); // Stop loading
    }
  };

  const fetchNewsHealth = async () => {
    try {
      setLoading((prev) => ({ ...prev, news: true })); // Set loading for news
      const response = await axios.get(
        `${https}/user-get-all-by-health/?offset=${offsetHealth}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Combine existing technology news and newly fetched news
        const combinedTechnologyNews = [...newsHealth, ...newFetchedNews];

        // Filter out duplicates by title
        const uniqueNews = combinedTechnologyNews.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.title === item.title)
        );

        // Check if there are unique news items to add
        if (uniqueNews.length > 0) {
          // Add delayCard field to each unique news item
          const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
            ...item,
          }));

          setNewsHealth(uniqueNewsWithDelayCard); // Update state with unique news

          // Set delayCard to true after 2 seconds
          const timer = setTimeout(() => {
            setNewsHealth((prevNews) =>
              prevNews.map((item) => ({ ...item, delayCard: true }))
            );
          }, 2000);

          return () => clearTimeout(timer);
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
    } finally {
      setLoading((prev) => ({ ...prev, news: false })); // Stop loading
    }
  };

  // store to the news state
  const handleStoreAllTechnologyNews = () => {
    const uniqueNews = newsTechnology.filter(
      (techItem) =>
        !news.some((existingItem) => existingItem.title === techItem.title)
    );

    if (uniqueNews.length > 0) {
      // Map unique news items to include delayCard property
      const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
        ...item, // Spread existing item properties
        delayCard: true, // Set delayCard to true for each item
      }));

      setNews((prevNews) => [...prevNews, ...uniqueNewsWithDelayCard]); // Append unique news
    }
  };

  const handleStoreAllSportsNews = () => {
    const uniqueNews = newsSports.filter(
      (techItem) =>
        !news.some((existingItem) => existingItem.title === techItem.title)
    );

    if (uniqueNews.length > 0) {
      // Map unique news items to include delayCard property
      const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
        ...item, // Spread existing item properties
        delayCard: true, // Set delayCard to true for each item
      }));

      setNews((prevNews) => [...prevNews, ...uniqueNewsWithDelayCard]); // Append unique news
    }
  };

  const handleStoreAllHealthNews = () => {
    const uniqueNews = newsHealth.filter(
      (techItem) =>
        !news.some((existingItem) => existingItem.title === techItem.title)
    );

    if (uniqueNews.length > 0) {
      // Map unique news items to include delayCard property
      const uniqueNewsWithDelayCard = uniqueNews.map((item) => ({
        ...item, // Spread existing item properties
        delayCard: true, // Set delayCard to true for each item
      }));

      setNews((prevNews) => [...prevNews, ...uniqueNewsWithDelayCard]); // Append unique news
    }
  };

  // store to the category state
  const handleStoreTechnologyNews = (fetchedNews) => {
    const techNews = fetchedNews.filter(
      (item) => item.category === "បច្ចេកវិទ្យា"
    );

    const uniqueTechNews = techNews.filter(
      (newItem) =>
        !newsTechnology.some(
          (existingItem) => existingItem.title === newItem.title
        ) // Check for duplicates by title
    );

    if (uniqueTechNews.length > 0) {
      // Map unique news items to include delayCard property
      const uniqueTechNewsWithDelayCard = uniqueTechNews.map((item) => ({
        ...item, // Spread existing item properties
        delayCard: true, // Initialize delayCard to false (or true if desired)
      }));

      setNewsTechnology((prevNewsTechnology) => [
        ...prevNewsTechnology,
        ...uniqueTechNewsWithDelayCard,
      ]); // Add unique technology news
    }
  };

  const handleStoreHealthNews = (fetchedNews) => {
    const healthNews = fetchedNews.filter((item) => item.category === "សុខភាព");

    const uniqueHealthNews = healthNews.filter(
      (newItem) =>
        !newsHealth.some((existingItem) => existingItem.title === newItem.title) // Check for duplicates by title
    );

    if (uniqueHealthNews.length > 0) {
      const uniqueHealthNewsWithDelayCard = uniqueHealthNews.map((item) => ({
        ...item,
        delayCard: true,
      }));

      setNewsHealth((prevNewsHealth) => [
        ...prevNewsHealth,
        ...uniqueHealthNewsWithDelayCard,
      ]);
    }
  };

  const handleStoreSportsNews = (fetchedNews) => {
    const sportsNews = fetchedNews.filter((item) => item.category === "កីឡា");

    const uniqueSportsNews = sportsNews.filter(
      (newItem) =>
        !newsSports.some((existingItem) => existingItem.title === newItem.title) // Check for duplicates by title
    );

    if (uniqueSportsNews.length > 0) {
      const uniqueSportsNewsWithDelayCard = uniqueSportsNews.map((item) => ({
        ...item,
        delayCard: true,
      }));

      setNewsSports((prevNewsSport) => [
        ...prevNewsSport,
        ...uniqueSportsNewsWithDelayCard,
      ]);
    }
  };

  // Function to load more general news
  const loadMoreNews = () => {
    setOffset(() => news.length + 10);
    fetchNews();
  };

  // Function to load more technology news
  const loadMoreNewsTechnology = () => {
    setOffsetTechnology(() => newsTechnology.length + 10);
    fetchNewsTechnology();
  };

  const loadMoreNewsSports = () => {
    setOffsetSports(() => newsSports.length + 10);
    fetchNewsSports();
  };

  const loadMoreNewsHealth = () => {
    setOffsetHealth(() => newsHealth.length + 10);
    fetchNewsHealth();
  };

  // Fetch background data
  const fetchBackground = async () => {
    try {
      setLoading((prev) => ({ ...prev, background: true })); // Set loading for background
      const response = await axios.get(`${https}/background-seted`);
      if (response.status === 200) {
        if (response.data.message !== "No document with seted=true found") {
          setBackground(response.data.seted); // Set background if found
        }
        setLoading((prev) => ({ ...prev, background: false })); // Background loaded
      } else {
        setBackground(null); // If no background found, set null
        setLoading((prev) => ({ ...prev, background: false })); // Stop loading
      }
    } catch (err) {
      setError(err.message); // Set error if something goes wrong
      setLoading((prev) => ({ ...prev, background: false })); // Stop loading on error
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    handleStoreAllTechnologyNews();
    handleStoreAllSportsNews();
    handleStoreAllHealthNews();
  }, [newsTechnology, newsHealth, newsSports]);

  useEffect(() => {
    handleStoreTechnologyNews(news);
    handleStoreHealthNews(news);
    handleStoreSportsNews(news);
  }, [news]);

  useEffect(() => {
    fetchBackground(); // Initial background fetch
  }, []); // Empty dependency array to run this only once

  return (
    <NewsContext.Provider
      value={{
        news,
        background,
        loading,
        error,
        fetchNews,
        loadMoreNews,
        fetchNewsTechnology,
        fetchNewsSports,
        fetchNewsHealth,
        newsTechnology,
        newsHealth,
        newsSports,
        loadMoreNewsTechnology,
        loadMoreNewsSports,
        loadMoreNewsHealth,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

// Custom hook to use the news and background context easily in any component
export const useNewsWeb = () => {
  return useContext(NewsContext);
};
