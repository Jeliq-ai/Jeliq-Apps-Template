# Jeliq-App-Template

This is a template for a full-stack web application using [Jeliq](https://jeliq.ai/).

## Overview

This template is composed of the following technologies:
- [Next.js](https://nextjs.org/): Web front-end framework
- [Supabase](https://supabase.com/): Backend database & user authentication
- [express-openapi](https://www.npmjs.com/package/express-openapi): Backend API framework
- [express-openapi-validator](https://www.npmjs.com/package/express-openapi-validator): API request validator
- [Storybook](https://storybook.js.org/): UI components catalog
- [Mock Service Worker](https://mswjs.io/): Mocking API responses

This template uses the following SDKs to integrate the above technologies seamlessly:
- [@jeliq/app-sdk-core](https://www.npmjs.com/package/@jeliq/app-sdk-core): Core modules and type definitions
- [@jeliq/app-sdk-backend-supabase](https://www.npmjs.com/package/@jeliq/app-sdk-backend-supabase): Supabase backend integration modules
- [@jeliq/app-sdk-next-router](https://www.npmjs.com/package/@jeliq/app-sdk-next-router): Next.js routing integration modules

## Setup

Prerequisites:
- Node.js 20.x or higher
- Docker (to run Supabase locally)

1. Install pnpm globally using npm:
   ```
   $ npm install -g pnpm@latest
   ```

2. Install dependencies using pnpm:
   ```
   $ pnpm install
   ```

## Run

### Run Storybook

```
$ pnpm run:storybook
```

### Run Supabase Locally

1. Ensure Docker daemon is running.

2. Start Supabase:
   ```
   $ supabase start
   ```
   You will see output similar to:
   ```
   Started supabase local development setup.
            API URL: http://localhost:54321
        GraphQL URL: http://localhost:54321/graphql/v1
             DB URL: postgresql://postgres:postgres@localhost:54322/postgres
         Studio URL: http://localhost:54323
       Inbucket URL: http://localhost:54324
         JWT secret: super-secret-jwt-token-with-at-least-32-characters
           anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

3. Reset & migrate the database:
   ```
   $ supabase db reset
   ```
   Verify the migration by accessing [Supabase Studio](http://localhost:54323).

### Build & Run Backend API

1. Set environment variables:
   ```
   $ export PORT=6001               # API running port
   $ export SUPABASE_URL=http://localhost:54321  # Supabase URL
   $ export SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  # Supabase anon key
   ```

2. Build the API:
   ```
   $ pnpm build:api
   ```

3. Run the API:
   ```
   $ pnpm run:api
   ```

### Build & Run Web Front-end (Next.js)

1. Set environment variable:
   ```
   $ export NEXT_PUBLIC_API_ENDPOINT=http://localhost:6001/  # API endpoint
   ```

2. Build the web:
   ```
   $ pnpm build:web
   ```
   **Note:** This command automatically generates the Next.js App Router (in `app/`) from the Jeliq routing directory (`src/routing`).

3. Run the web:
   ```
   $ pnpm run:web
   ```

## Directory Structure

```
.
├── .env.example                  # Environment variables sample
├── .eslintrc.js                  # ESLint configuration
├── .gitignore                    # Git ignore file
├── .prettierrc                   # Prettier configuration
├── next-env.d.ts                 # Next.js type declarations
├── next.config.js                # Next.js configuration
├── package.json                  # Project manifest
├── pnpm-lock.yaml                # Dependency lock file
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.api.json             # TypeScript configuration for API
├── tsconfig.json                 # Shared TypeScript configuration
├── tsconfig.web.json             # TypeScript configuration for web
├── vite.config.mjs               # Vite configuration
├── .storybook/                   # Storybook configuration
│   └── preview.ts
├── README.md                     # Project README
├── api/                          # API directory
│   ├── index.ts                  # API entry point
│   ├── nodemon.json              # Nodemon configuration
│   └── openapi-config.json       # OpenAPI configuration
├── app/                          # Next.js app directory (auto-generated from routing)
├── docs/                         # Documentation files
│   ├── components/               # Component specifications
│   ├── data/                     # Data model specifications
│   ├── locales/                  # Locale specifications
│   ├── routes/                   # Route specifications
│   ├── routing/                  # Routing specifications
│   └── themeColors/              # Theme color specifications
├── public/                       # Public assets
├── src/                          # Source code
│   ├── components/               # React components
│   │   └── (ComponentName)/      
│   │       ├── index.tsx         
│   │       ├── index.stories.tsx 
│   │       ├── useViewModel.tsx  
│   │       └── view.tsx          
│   ├── config/
│   │   └── themeColors.ts        # Theme colors definition
│   ├── domain/                   # Domain logic
│   │   ├── entities/             # Domain entities
│   │   └── repositories/         # Domain repositories
│   ├── infra/                    # Infrastructure layer
│   │   ├── api/                  
│   │   └── repositories/         
│   ├── locales/                  # Internationalization files
│   │   └── (locale-name).ts      
│   ├── routing/                  # Routing configuration
│   │   ├── config.ts             
│   │   ├── routes.ts             
│   │   └── (RoutingName)/        
│   │       ├── layouts/          
│   │       │   └── (LayoutName).ts
│   │       ├── routes/           
│   │       │   └── (RouteName)/   
│   │       │       ├── index.ts   
│   │       │       └── index.stories.tsx
│   │       └── config.ts         
│   ├── services/                 # Service layer
│   └── usecases/                 # Business use cases
├── supabase/                     # Supabase directory
│   ├── migrations/              
│   ├── config.toml              
│   └── seed.sql                 
└── web/                         # Web front-end (Next.js)
    └── Providers.tsx            
```

## License

MIT

## Related Links

[Jeliq Official Website](https://jeliq.ai/)
