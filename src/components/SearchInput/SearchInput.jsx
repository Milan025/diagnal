import { useSearch } from '../../contexts/SearchContext';
import { STRINGS } from '../../constants/strings';
import { SearchInput as StyledSearchInput } from './styles';

/**
 * Search input component with integrated search state management
 * @returns {JSX.Element}
 */
export const SearchInput = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  /**
   * Handles changes to the search input
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event
   * @returns {void}
   */
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <StyledSearchInput
      type="text"
      placeholder={STRINGS.HEADER.SEARCH_PLACEHOLDER}
      value={searchQuery}
      onChange={handleChange}
      autoFocus
    />
  );
}; 