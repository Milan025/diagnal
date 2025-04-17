import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/Header/Header";
import { MovieGrid } from "./components/MovieGrid/MovieGrid";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SearchProvider } from "./contexts/SearchContext";
import { STRINGS } from "./constants/strings";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <GlobalStyles />
          <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
            <Header title={STRINGS.HEADER.TITLE} />
            <MovieGrid />
          </div>
        </SearchProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
