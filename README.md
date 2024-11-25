# Jeliq-App-Template

This is a template for a full-stack web application using [Jeliq](https://jeliq.ai/).

## Overview

This template composed of the following technologies:
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

Prerequisites are the following:
- Node.js 20.x or higher
- Docker (to run supabase locally)

1. Install pnpm globally using npm:
```
$ npm install -g pnpm@latest
```

2. Install dependencies using pnpm:
```
$ pnpm install
```

## Run

### Run storybook

```
$ pnpm run:storybook
```

### Run supabase locally

1. Run supabase locally

**Note:** Ensure Docker daemon is running before starting Supabase.

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

**Note:** Make a note of the API URL and anon key for later use.

2. Reset & Migrate the database:

```
$ supabase db reset
```

Verify the database migration by accessing the [Supabase Studio](http://localhost:54323).

### Build & Run backend API: 

1. Set environment variables:

```
$ export PORT=6001 # Set running port of the API
$ export SUPABASE_URL=http://localhost:54321 # Set the supabase url in the message above
$ export SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... # Set the supabase anon key in the message above
```

2. Build the API:

```
$ pnpm build:api
```

3. Run the API:

```
$ pnpm run:api
```

### Build & Run web front-end (Next.js):

1. Set environment variables:

```
$ export NEXT_PUBLIC_API_ENDPOINT=http://localhost:6001/ # Set API endpoint
```

2. Build the web:

```
$ pnpm build:web
```

**Note:** This command will automatically generate the Next.js App Router (in `app/`) from the Jeliq routing directory (`src/routing`).

3. Run the web:

```
$ pnpm run:web
```

## Directory Structure

```
.
├── docs/                                # Specification documents
│   ├── components/                      # Specification documents for components
│   │   └── (ComponentName).md           
│   ├── data/                            # Specification documents for data models
│   │   └── (data_model_name).md         
│   ├── locales/                         # Specification documents for locales
│   │   └── (locale-name).md             
│   ├── routes/                          # Specification documents for routes
│   │   └── (RouteName).md               
│   ├── routing/                         # Specification documents for routing
│   │   └── (RoutingName).md             
│   └── themeColors/                     
│       └── index.md                     # Specification document for default theme colors
│
├── src/
│   ├── components/                      # Components directory
│   │   └── (ComponentName)/             
│   │       ├── index.tsx                # Main component export file
│   │       ├── index.stories.tsx        # Storybook configuration for the component
│   │       ├── useViewModel.tsx         # View model hook for the component
│   │       └── view.tsx                 # View for the component
│   │
│   ├── config/
│   │   └── themeColors.ts               # Theme colors configuration
│   │
│   ├── data/                            # Data models
│   │   └── (data_model_name)/           
│   │        ├── repository/             
│   │        │   └── (methodName).ts     # Repository method implementation
│   │        ├── schema.ts               # Data schema definition
│   │
│   ├── locales/                         # Internationalization
│   │   └── (locale-name).ts             
│   │
│   ├── routing/                         # Jeliq routing directory
│   │   └── (RoutingName)/               
│   │       ├── layouts/                 # Layouts for the routing
│   │       │   └── (LayoutName).ts      
│   │       ├── routes/                  # Routes for the routing
│   │       │   └── (RouteName)/         
│   │       │       ├── index.ts         # A route component
│   │       │       └── index.stories.tsx # Storybook configuration for the route
│   │       └── config.ts                # A routing configuration
│   │
│   └── services/                        # Service layer
│       ├── api/                         # Backend API
│       │   ├── operations/              # API operations
│       │   │   └── (operationName).ts   
│       │   ├── docs.html                # Generated API documentation for development reference
│       │   ├── schema.json              # OpenAPI schema file
│       │   └── schema.d.ts              # Generated TypeScript definitions for the API
│       │
│       └── client/                      # API client generated by gen:api:cli
│
├── supabase/                            # Supabase directory
│   ├── migrations/                      # DB migration files
│   ├── config.toml                      # Supabase config file
│   └── seed.sql                         # Database seed file
│
├── api/                                 # API directory
│   ├── index.ts                         # API entry point
│   ├── nodemon.json                     # Nodemon configuration for dev:api
│   └── openapi-config.json              # OpenAPI configuration using for gen:api:cli
│
├── web/                                 # Web front-end (Next.js) directory
│   ├── BaseLayout.tsx                   # Base layout component
│   ├── Providers.tsx                    # Providers
│   └── globals.css                      # Global styles (tailwind CSS)
│
├── app/                                 # Next.js app directory auto-generated from Jeliq routing configurations
│
├── public/                              # Public assets
│
├── __screenshots__/                     # Screenshots of components and routes
```

# License
MIT

# Related Links
[Jeliq Official Website](https://jeliq.ai/)

