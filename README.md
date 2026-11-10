# vue-example-app

A small example application built with **Vue 3**, **Vue Router**, **Pinia**, and **Tailwind CSS**. It demonstrates a clean multi-page setup with animated route transitions, an active-state navbar, a global loading bar, and a data-driven About page that fetches its content from an API.

## Features

- **Two pages** — Home and About, with client-side routing.
- **Active navbar** — the current page is highlighted automatically.
- **Route transitions** — pages fade/slide in and out when navigating.
- **Global loading bar** — appears during route changes and API requests.
- **API-driven About page** — all content, including the contact email, comes from `GET /about`.
- **Loading, error, and retry states** — a skeleton while fetching and a friendly error card with a **Try again** button when the API is unreachable.
- **Tailwind CSS** — dark, responsive UI with no component library required.

## Tech stack

| Tool         | Purpose                          |
| ------------ | -------------------------------- |
| Vue 3        | UI framework (Composition API)   |
| Vue Router 5 | Client-side routing              |
| Pinia        | State management (installed)     |
| Tailwind CSS | Styling                          |
| Axios        | HTTP client with interceptors    |
| Vite         | Dev server and build tool        |

## Requirements

- Node.js `^22.18.0` or `>=24.12.0`
- npm

## Getting started

```sh
npm install
cp .env.example .env
npm run dev
```

Open the URL printed in the terminal (usually <http://localhost:5173>).

## Environment variables

| Variable       | Default | Description                              |
| -------------- | ------- | ---------------------------------------- |
| `VITE_API_URL` | `/api`  | Base URL of the backend API.             |

Example `.env`:

```env
VITE_API_URL=http://localhost:8000/api
```

## API

The About page calls:

```
GET {VITE_API_URL}/about
```

Expected response (`api.json` in the repository is a ready-to-use mock):

```json
{
  "data": {
    "meta": { "title": "About us — Example" },
    "hero": { "...": "..." },
    "stats": [],
    "mission": { "...": "..." },
    "valuesSection": { "...": "..." },
    "values": [],
    "timelineSection": { "...": "..." },
    "timeline": [],
    "teamSection": { "...": "..." },
    "team": [],
    "cta": { "...": "..." },
    "contact": { "email": "hello@example.com", "footerNote": "..." }
  }
}
```

- A bare object without the `data` wrapper is also accepted.
- On failure, return a non-2xx status with a JSON body like `{ "message": "..." }`.
- `values[].icon` must be one of `bolt`, `clock`, `users`, `shield`.
- `team[].avatarColor` must be one of `rose`, `sky`, `emerald`, `violet`.

See [`api.json`](./api.json) for the complete example response.

## Project structure

```
.
├── api.json                  # Mock API response for GET /about
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.vue               # Navbar, loading bar, route transitions
    ├── main.js               # App bootstrap
    ├── assets
    │   └── main.css          # Tailwind entry + route transition styles
    ├── components
    │   └── RouteLoadingBar.vue
    ├── composables
    │   └── useLoading.js     # Shared loading state
    ├── lib
    │   └── api.js            # Axios instance + loading interceptors
    ├── router
    │   └── index.js          # Routes, scroll behavior, loading hooks
    └── views
        ├── HomeView.vue
        └── AboutView.vue     # API-driven page with loading/error/retry
```

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the development server      |
| `npm run build`   | Build for production into `dist/` |
| `npm run preview` | Preview the production build      |
| `npm run format`  | Format `src/` with Prettier       |

## Recommended IDE setup

- [VS Code](https://code.visualstudio.com/) with the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension (and Vetur disabled).
- [Vue.js devtools](https://devtools.vuejs.org/) in your browser.

## Customization

- **Page transition speed** — `.page-enter-active` / `.page-leave-active` in `src/assets/main.css`.
- **Loading bar timing** — `MIN_VISIBLE_TIME` and `HIDE_DELAY` in `src/composables/useLoading.js`.
- **API base URL** — `VITE_API_URL` in `.env`.
- **About page content** — served by the backend, shaped like `api.json`.
