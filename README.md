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
│   └── Skeleton/           # Skeleton component
│   └── Spinner/            # Spinner component
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

## Installation and Setup

1. **Prerequisites**
   - Node.js (v16 or higher)
   - npm (v8 or higher)

2. **Clone the repository**
```bash
git clone https://github.com/Milan025/diagnal.git
```

3. **Navigate to project directory**
```bash
cd diagnal
```

4. **Install dependencies**
```bash
npm install
```

5. **Start development server**
```bash
npm run dev
```

6. **Build for production**
```bash
npm run build
```

7. **Preview production build**
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

