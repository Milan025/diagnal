import { useCallback } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { getImageUrl } from "../../services/api";
import { Grid, LoadingText } from "./styles";
import { useSearch } from "../../contexts/SearchContext";
import { EmptyState } from "../EmptyState/EmptyState";
import { STRINGS } from "../../constants/strings";

/**
 * MovieGrid component that displays a grid of movies with infinite scroll
 * @returns {JSX.Element}
 */
export const MovieGrid = () => {
  const { searchQuery } = useSearch();
  const {
    movies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status
  } = useMovies(searchQuery);

  const handleIntersect = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  const intersectionRef = useIntersectionObserver(handleIntersect);

  if (status === "loading") {
    return <LoadingText>{STRINGS.LOADING.INITIAL}</LoadingText>;
  }

  if (status === "error") {
    return (
      <EmptyState
        title={STRINGS.EMPTY_STATE.ERROR.TITLE}
        description={STRINGS.EMPTY_STATE.ERROR.DESCRIPTION}
      />
    );
  }

  if (!movies.length) {
    return (
      <EmptyState
        title={
          searchQuery
            ? STRINGS.EMPTY_STATE.NO_SEARCH_RESULTS.TITLE
            : STRINGS.EMPTY_STATE.NO_MOVIES.TITLE
        }
        description={
          searchQuery
            ? STRINGS.EMPTY_STATE.NO_SEARCH_RESULTS.DESCRIPTION
            : STRINGS.EMPTY_STATE.NO_MOVIES.DESCRIPTION
        }
      />
    );
  }

  return (
    <Grid>
      {movies.map((movie, index) => (
        <MovieCard
          key={`${movie.name}-${index}`}
          name={movie.name}
          imageUrl={getImageUrl(movie["poster-image"])}
        />
      ))}
      {hasNextPage && (
        <div
          ref={intersectionRef}
          style={{
            gridColumn: "1 / -1",
            height: "20px",
            visibility: "hidden",
          }}
        />
      )}
      {isFetchingNextPage && (
        <LoadingText style={{ gridColumn: "1 / -1" }}>
          {STRINGS.LOADING.MORE}
        </LoadingText>
      )}
    </Grid>
  );
};
