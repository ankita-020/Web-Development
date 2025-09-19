# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Netflix GPT

- Vite
- Configured TailwindCSS
- Header
- Routing of App
- Login form
- Sign up form
- Form validation
- useRef hook
- Firebase setup
- Deploying app to prod
- Created Sign up user account
- Implement Sign In in user api
- Created Redux store
- Implemented Sign out
- Fetch from TMDB movies
- Bug fix
  - If the user is not logged in redirect to login page else redirect to browse page
  - Display name of user
- Unsubscribed to onAuthStateChanged callback
- Register TMDB api and create an app & get access token
- Get data from TMDB movie list api
- Custom hook for Now Playing Movies
- Create a movie slice
- Planning for main container and secondary container
- Fetch data for trailer video
- Updated store for trailer video
- Embedded youtube video and made it autoplay and mute

# Features

- Login/Sign up page
  - Sign in / Sign up page
  - Form Validation
  - useRef hook
  - redirect to browse page
- Browse page (after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Movie title and description
    - Movie suggestions
      - Movie list \* N
- NetflixGPT
  - Search Bar
  - Movie suggestions
