import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPage } from "../services/api";
import { useMemo } from "react";

export const useMovies = (searchQuery) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["movies"],
      queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
      getNextPageParam: (lastPage) => {
        if (!lastPage?.page) return undefined;
        const currentPage = parseInt(lastPage.page["page-num-requested"]);
        const totalItems = parseInt(lastPage.page["total-content-items"]);
        const pageSize = parseInt(lastPage.page["page-size-requested"]);
        const totalPages = Math.ceil(totalItems / pageSize);

        return currentPage < totalPages ? currentPage + 1 : undefined;
      },
      initialPageParam: 1,
    });

  const allMovies = useMemo(() => {
    if (!data?.pages?.length) return [];
    return data.pages.flatMap(
      (pageData) => pageData?.page?.["content-items"]?.content || []
    );
  }, [data]);

  const filteredMovies = useMemo(() => {
    if (!searchQuery) return allMovies;
    const query = searchQuery.toLowerCase();
    return allMovies.filter((movie) =>
      movie?.name?.toLowerCase().includes(query)
    );
  }, [allMovies, searchQuery]);

  return {
    movies: filteredMovies,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  };
};
