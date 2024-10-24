"use client";
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const https = `http://localhost:5051`;
  // const https = `https://manage-news-server134.vercel.app`;
  const [news, setNews] = useState([]);
  const [LoadingCards, setLoadingCards] = useState(true);
  const [LoadingCardsPageTechnology, setLoadingCardsPageTechnology] =
    useState(true);
  const [LoadingCardsPageHome, setLoadingCardsPageHome] = useState(true);
  const [LoadingCardsPageSports, setLoadingCardsPageSports] = useState(true);
  const [LoadingCardsPageHealth, setLoadingCardsPageHealth] = useState(true);
  const [newsTechnology, setNewsTechnology] = useState([]);
  const [newsSports, setNewsSports] = useState([]);
  const [newsHealth, setNewsHealth] = useState([]);
  const [background, setBackground] = useState(null);
  const [loading, setLoading] = useState({ news: true, background: true });
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [offsetTechnology, setOffsetTechnology] = useState(0);
  const [offsetSports, setOffsetSports] = useState(0);
  const [offsetHealth, setOffsetHealth] = useState(0);

  // Create a Set outside of the component to keep track of all fetched IDs
  // const fetchedNewsIds = new Set(); // Global Set to track unique IDs

  // const fetchNews = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${https}/user-get-all/?offset=${offset}&limit=10`
  //     );

  //     if (response.status === 200) {
  //       const newFetchedNews = response.data.news;

  //       // Create a Set to track titles that have already been added
  //       const existingTitles = new Set();

  //       // Filter out duplicates using the globally tracked Set for IDs and the new Set for titles
  //       const uniqueFetchedNews = newFetchedNews.filter((newItem) => {
  //         const isIdUnique = !fetchedNewsIds.has(newItem._id);
  //         const isTitleUnique = !existingTitles.has(newItem.title);

  //         // If both ID and title are unique, track them
  //         if (isIdUnique && isTitleUnique) {
  //           fetchedNewsIds.add(newItem._id); // Track the ID to prevent future duplicates
  //           existingTitles.add(newItem.title); // Track the title to prevent future duplicates
  //           return true; // Keep this item
  //         }

  //         return false; // Discard this item
  //       });

  //       // Only update state if there are new unique items
  //       if (uniqueFetchedNews.length > 0) {
  //         setNews((prevNews) => [...prevNews, ...uniqueFetchedNews]);
  //       } else {
  //         setLoadingCardsPageHome(false); // Stop loading if no new items
  //         console.log("set false page home")
  //       }
  //     }

  //     // setOffset((prev) => prev + 10); // Increase the offset for pagination
  //   } catch (err) {
  //     setError(err.message); // Handle any errors that occur
  //   }
  // };

  // Ensure these Sets are declared outside the component or function scope to persist between requests.
  const fetchedNewsIds = new Set(); // Track unique IDs globally
  const fetchedNewsTitles = new Set(); // Track unique titles globally

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${https}/user-get-all/?offset=${offset}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Filter out duplicates based on IDs and Titles
        const uniqueFetchedNews = newFetchedNews.filter((newItem) => {
          const isIdUnique = !fetchedNewsIds.has(newItem._id.trim()); // Trim in case of extra spaces
          const isTitleUnique = !fetchedNewsTitles.has(newItem.title.trim()); // Ensure titles are consistent

          if (isIdUnique && isTitleUnique) {
            // Track the new unique items
            fetchedNewsIds.add(newItem._id.trim());
            fetchedNewsTitles.add(newItem.title.trim());
            return true;
          }
          return false;
        });

        // Update the state if there are new unique items
        if (uniqueFetchedNews.length > 0) {
          setNews((prevNews) => [...prevNews, ...uniqueFetchedNews]);
        }

        // If fewer items than the limit are returned, stop loading
        if (newFetchedNews.length < 1) {
          setLoadingCardsPageHome(false); // No more items to fetch, stop loading
        }
      } 
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchedTechnologyNewsIds = new Set(); // Global Set to track unique IDs
  const fetchNewsTechnology = async () => {
    try {
      const response = await axios.get(
        `${https}/user-get-all-by-technology/?offset=${offsetTechnology}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Create a Set to track existing titles for the current state
        const existingTitles = new Set(
          newsTechnology.map((item) => item.title)
        );

        // Filter out duplicates using both the globally tracked Set for IDs and the local Set for titles
        const uniqueFetchedNews = newFetchedNews.filter((newItem) => {
          const isIdUnique = !fetchedTechnologyNewsIds.has(newItem._id);
          const isTitleUnique = !existingTitles.has(newItem.title);

          if (isIdUnique) {
            fetchedTechnologyNewsIds.add(newItem._id); // Track the ID to prevent future duplicates
          }

          return isIdUnique && isTitleUnique; // Keep this item if both conditions are true
        });

        // Only update state if there are new unique items
        if (uniqueFetchedNews.length > 0) {
          setNewsTechnology((prevNews) => [...prevNews, ...uniqueFetchedNews]);
        } else {
          setLoadingCardsPageTechnology(false); // Stop loading if no new items
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
    }
  };

  // const fetchNewsTechnology = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${https}/user-get-all-by-technology/?offset=${offsetTechnology}&limit=10`
  //     );

  //     console.log(offsetTechnology);
  //     if (response.status === 200) {
  //       const newFetchedNews = response.data.news;

  //       // Create a Set to track titles that already exist
  //       const newsTitles = new Set(newsTechnology.map((item) => item.title));

  //       // Filter out new items by title (you can change to '_id' if available)
  //       const uniqueFetchedNews = newFetchedNews.filter(
  //         (newItem) => !newsTitles.has(newItem.title)
  //       );

  //       if (uniqueFetchedNews.length > 0) {
  //         // Update state only if there are unique items
  //         setNewsTechnology((prevNews) => [...prevNews, ...uniqueFetchedNews]);

  //       } else {
  //         setLoadingCardsPageTechnology(false); // Stop loading if no new items
  //       }
  //     }
  //   } catch (err) {
  //     setError(err.message); // Handle error
  //   }
  // };

  const fetchedSportsNewsIds = new Set(); // Global Set to track unique IDs

  const fetchNewsSports = async () => {
    try {
      const response = await axios.get(
        `${https}/user-get-all-by-sports/?offset=${offsetSports}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Create a Set to track existing titles for the current state
        const existingTitles = new Set(newsSports.map((item) => item.title));

        // Filter out duplicates using both the globally tracked Set for IDs and the local Set for titles
        const uniqueFetchedNews = newFetchedNews.filter((newItem) => {
          const isIdUnique = !fetchedSportsNewsIds.has(newItem._id);
          const isTitleUnique = !existingTitles.has(newItem.title);

          if (isIdUnique) {
            fetchedSportsNewsIds.add(newItem._id); // Track the ID to prevent future duplicates
          }

          return isIdUnique && isTitleUnique; // Keep this item if both conditions are true
        });

        // Only update state if there are new unique items
        if (uniqueFetchedNews.length > 0) {
          setNewsSports((prevNews) => [...prevNews, ...uniqueFetchedNews]);
        } else {
          setLoadingCardsPageSports(false); // Stop loading if no new items
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
    }
  };

  const fetchedHealthNewsIds = new Set(); // Global Set to track unique IDs

  const fetchNewsHealth = async () => {
    try {
      const response = await axios.get(
        `${https}/user-get-all-by-health/?offset=${offsetHealth}&limit=10`
      );

      if (response.status === 200) {
        const newFetchedNews = response.data.news;

        // Create a Set to track existing titles for the current state
        const existingTitles = new Set(newsHealth.map((item) => item.title));

        // Filter out duplicates using both the globally tracked Set for IDs and the local Set for titles
        const uniqueFetchedNews = newFetchedNews.filter((newItem) => {
          const isIdUnique = !fetchedHealthNewsIds.has(newItem._id);
          const isTitleUnique = !existingTitles.has(newItem.title);

          if (isIdUnique) {
            fetchedHealthNewsIds.add(newItem._id); // Track the ID to prevent future duplicates
          }

          return isIdUnique && isTitleUnique; // Keep this item if both conditions are true
        });

        // Only update state if there are new unique items
        if (uniqueFetchedNews.length > 0) {
          setNewsHealth((prevNews) => [...prevNews, ...uniqueFetchedNews]);
        } else {
          setLoadingCardsPageHealth(false); // Stop loading if no new items
        }
      }
    } catch (err) {
      setError(err.message); // Handle error
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

  // useEffect(() => {
  //   if (offset || offsetSports || offsetHealth || offsetTechnology) {
  //     setLoadingCards(true);
  //   }
  // }, [offset, offsetSports, offsetHealth, offsetTechnology]);

  useEffect(() => {
    if (newsTechnology) {
      handleStoreAllTechnologyNews();
    } else if (newsHealth) {
      handleStoreAllHealthNews();
    } else if (newsSports) {
      handleStoreAllSportsNews();
    } else if (
      news &&
      newsTechnology === false &&
      newsHealth === false &&
      newsSports === false
    ) {
      handleStoreTechnologyNews(news);
      handleStoreHealthNews(news);
      handleStoreSportsNews(news);
    }
  }, [newsTechnology, newsHealth, newsSports, news]);

  useEffect(() => {
    fetchBackground(); // Initial background fetch
  }, []); // Empty dependency array to run this only once

  return (
    <NewsContext.Provider
      value={{
        LoadingCards,
        background,
        loading,
        news,
        newsTechnology,
        newsHealth,
        newsSports,
        loadMoreNews,
        loadMoreNewsTechnology,
        loadMoreNewsSports,
        loadMoreNewsHealth,
        LoadingCardsPageTechnology,
        LoadingCardsPageHome,
        LoadingCardsPageHealth,
        LoadingCardsPageSports,
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
