# Blackdoll Winery

Premium React/Vite website for Blackdoll Winery.

## Deploy to Netlify

This project includes `netlify.toml` with the build configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20

### Local

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Before launch

Replace the placeholder contact details in `src/data/site.ts` with the winery's verified phone number, email, location and hours. Newsletter submission is intentionally not connected to a backend yet.

The supplied Blackdoll Winery product and brand photographs are stored in `src/assets/`.
