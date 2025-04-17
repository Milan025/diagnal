## Project Structure

```
src/
├── components/
│   ├── EmptyState/         # Empty state component for various states
│   ├── ErrorBoundary/      # Global error boundary component
│   ├── Header/             # Header with search functionality
│   ├── MovieCard/          # Individual movie card component
│   ├── MovieGrid/          # Grid layout for movies
│   └── SearchInput/        # Reusable search input component
├── constants/
│   ├── strings.js          # String constants
│   └── theme.js            # Theme constants (colors, spacing, fonts)
├── contexts/
│   └── SearchContext.jsx   # Search state management
├── hooks/
│   ├── useMovies.js        # Movie data fetching hook
│   └── useIntersectionObserver.js  # Infinite scroll hook
├── services/
│   └── api.js              # API service functions
└── styles/
    └── GlobalStyles.js     # Global styles
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```
