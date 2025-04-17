import { createContext, useContext, useState } from "react";

/**
 * @typedef {Object} SearchContextValue
 * @property {string} searchQuery - The current search query
 * @property {Function} setSearchQuery - Function to update the search query
 * @property {boolean} isSearching - Whether the user is currently in search mode
 * @property {Function} setIsSearching - Function to toggle search mode
 */

const SearchContext = createContext();

/**
 * Custom hook to access the search context
 * @returns {SearchContextValue}
 * @throws {Error} If used outside of SearchProvider
 */
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

/**
 * Provider component that makes search state available to its children
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components that need access to search context
 */
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(true);
    setSearchQuery("");
  };

  const handleBackClick = () => {
    setIsSearching(false);
    setSearchQuery("");
  };

  const value = {
    searchQuery,
    setSearchQuery,
    isSearching,
    setIsSearching,
    handleSearchClick,
    handleBackClick,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
