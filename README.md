# Mondial Pack Website

A modern website for Mondial Pack built with React, Vite, and Sanity CMS.

## Project Structure

```
.
├─ apps/
│  ├─ web/        # React/Vite frontend
│  └─ studio/     # Sanity Studio
├─ packages/      # Shared packages
│  └─ eslint-config-custom/  # Shared ESLint config
├─ .github/       # GitHub Actions workflows
└─ package.json   # Root package.json with workspaces
```

## Prerequisites

- Node.js >= 20
- pnpm >= 8.15.4

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development servers:
   ```bash
   # Start the web app
   pnpm dev:web
   
   # Start the Sanity Studio
   pnpm dev:studio
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Development

- The web app runs on `http://localhost:8080`
- The Sanity Studio runs on `http://localhost:3333`

## Deployment

The project is automatically deployed to Azure Static Web Apps when changes are pushed to the `main` branch. The deployment process:

1. Lints and typechecks the code
2. Builds both the web app and Sanity Studio
3. Deploys to Azure SWA

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run `pnpm lint` and `pnpm typecheck` to ensure code quality
4. Submit a pull request

## License

UNLICENSED 