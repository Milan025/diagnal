import { useSearch } from "../../contexts/SearchContext";
import {
  HeaderContainer,
  BackButton,
  Title,
  SearchButton,
} from "./styles";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { SearchInput } from "../SearchInput/SearchInput";

/**
 * Header component that displays the title and search functionality
 * @param {Object} props
 * @param {string} props.title - The title to display in the header
 */
export const Header = ({ title }) => {
  const { isSearching, setIsSearching, setSearchQuery } = useSearch();

  /**
   * Handles the search button click
   * @returns {void}
   */
  const handleSearchClick = () => {
    setIsSearching(true);
  };

  /**
   * Handles the back button click
   * @returns {void}
   */
  const handleBackClick = () => {
    setIsSearching(false);
    setSearchQuery('');
  };

  return (
    <HeaderContainer>
      {isSearching ? (
        <>
          <BackButton onClick={handleBackClick}>
            <FaArrowLeft />
          </BackButton>
          <SearchInput />
        </>
      ) : (
        <>
          <BackButton>
            <FaArrowLeft />
          </BackButton>
          <Title>{title}</Title>
          <SearchButton onClick={handleSearchClick}>
            <FaSearch />
          </SearchButton>
        </>
      )}
    </HeaderContainer>
  );
};
