/**
 * String constants used throughout the application
 * @type {Object}
 */
export const STRINGS = {
  /** Header related strings */
  HEADER: {
    /** The main title of the application */
    TITLE: "Romantic Comedy",
    /** Placeholder text for the search input */
    SEARCH_PLACEHOLDER: "Search movies...",
  },
  /** Empty state related strings */
  EMPTY_STATE: {
    /** Error state strings */
    ERROR: {
      /** Title shown when there's an error */
      TITLE: "Something went wrong",
      /** Description shown when there's an error */
      DESCRIPTION: "We couldn't load the movies. Please try again later.",
    },
    /** No movies available state strings */
    NO_MOVIES: {
      /** Title shown when no movies are available */
      TITLE: "No movies available",
      /** Description shown when no movies are available */
      DESCRIPTION:
        "There are no movies available at the moment. Please check back later.",
    },
    /** No search results state strings */
    NO_SEARCH_RESULTS: {
      /** Title shown when no search results are found */
      TITLE: "No movies found",
      /** Description shown when no search results are found */
      DESCRIPTION:
        "We couldn't find any movies matching your search. Try a different search term.",
    },
  },
};
