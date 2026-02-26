# hackernews-vinext

A [Hacker News](https://news.ycombinator.com/) clone built with [React Server Components](https://react.dev/reference/rsc/server-components), [Vite](https://vite.dev/), [Vinext](https://www.npmjs.com/package/vinext), and deployed on [Cloudflare Workers](https://workers.cloudflare.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)
- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (for deployment)

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Cloudflare Workers

1. **Log in to Cloudflare** via the Wrangler CLI:

   ```bash
   npx wrangler login
   ```

2. **Build and deploy**:

   ```bash
   npm run build
   npx wrangler deploy
   ```

   Wrangler reads the configuration from [`wrangler.jsonc`](./wrangler.jsonc) and deploys the worker named `hackernews` to your Cloudflare account.

3. Once deployed, Wrangler will print the URL where the app is live (e.g. `https://hackernews.<your-subdomain>.workers.dev`).

## Project Structure

```
app/            → App Router pages and layouts
components/     → React components (server & client)
lib/            → Server-side data fetching utilities
worker/         → Cloudflare Worker entry point
vite.config.ts  → Vite configuration with Vinext and Cloudflare plugins
wrangler.jsonc  → Cloudflare Workers deployment configuration
```

## Tech Stack

- **React 19** – UI with Server Components
- **Vite 7** – Build tool
- **Vinext** – React Server Components framework
- **Cloudflare Workers** – Edge deployment runtime