import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { useCallback } from "react";
import { useMovies } from "../../hooks/useMovies";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { getImageUrl } from "../../services/api";
import { Grid, LoadingSpinner } from "./styles";
import { useSearch } from "../../contexts/SearchContext";
import { EmptyState } from "../EmptyState/EmptyState";
import { STRINGS } from "../../constants/strings";
import Spinner from "../Spinner/Spinner";

/**
 * MovieGrid component that displays a grid of movies with infinite scroll
 * @returns {JSX.Element}
 */
export const MovieGrid = () => {
  const { searchQuery } = useSearch();
  const { movies, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useMovies(searchQuery);

  const handleIntersect = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  const intersectionRef = useIntersectionObserver(handleIntersect);

  if (status === "loading") {
    return (
      <LoadingSpinner>
        <Spinner />
      </LoadingSpinner>
    );
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
        <LoadingSpinner style={{ gridColumn: "1 / -1" }}>
          <Spinner />
        </LoadingSpinner>
      )}
    </Grid>
  );
};

export default MovieGrid;
