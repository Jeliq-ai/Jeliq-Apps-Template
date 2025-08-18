# Jeliq-Apps-Template

A comprehensive full-stack web application template powered by [Jeliq](https://jeliq.ai/), an AI agent that automates app development designed to accelerate the development of modern web applications. This template and its accompanying SDKs serve as guardrails for AI development, providing a robust foundation with pre-configured authentication, API development, UI component library, and database integration, enabling safe and efficient application feature development.

## Overview

Jeliq-Apps-Template is a template for building scalable web applications in collaboration with AI. Built on the foundation of traditional development best practices, it provides a development environment optimized for AI development.

### Architecture Highlights

- **Specification/Documentation-first development**: Jeliq's core philosophy of putting specifications and documentation at the center of development, ensuring clear requirements and maintainable code
- **Type-safe from database to UI**: Full TypeScript support across all layers ensures type safety and excellent developer experience
- **API-first development**: OpenAPI-driven backend with automatic validation and documentation generation

### Technology Stack

This template integrates the following best-in-class technologies:

**Frontend Technologies:**
- [Next.js](https://nextjs.org/): React-based framework with App Router for server-side rendering, static generation, and optimal performance
- [React](https://react.dev/): UI library with concurrent features and improved rendering performance
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development
- [Storybook](https://storybook.js.org/): Component development environment for building and testing UI components in isolation

**Backend Technologies:**
- [Express.js](https://expressjs.com/): Minimalist web framework for Node.js
- [express-openapi](https://www.npmjs.com/package/express-openapi): OpenAPI 3.0 compliant API framework with automatic routing
- [express-openapi-validator](https://www.npmjs.com/package/express-openapi-validator): Request/response validation based on OpenAPI specification
- [Supabase](https://supabase.com/): Open source Firebase alternative providing PostgreSQL database, authentication, and storage

**Development Tools:**
- [TypeScript](https://www.typescriptlang.org/): Static typing for JavaScript with excellent IDE support
- [Mock Service Worker (MSW)](https://mswjs.io/): API mocking for development and testing
- [pnpm](https://pnpm.io/): Fast, disk space efficient package manager
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/): Code quality and formatting tools

### Jeliq SDK Ecosystem

This template leverages Jeliq's powerful SDK ecosystem to provide seamless integration between all technologies:

- **[@jeliq/app-sdk-core](https://www.npmjs.com/package/@jeliq/app-sdk-core)**: Foundation layer providing shared utilities, type definitions, and core abstractions used throughout the application
- **[@jeliq/app-sdk-backend-supabase](https://www.npmjs.com/package/@jeliq/app-sdk-backend-supabase)**: Simplified Supabase integration with type-safe database queries, authentication helpers, and storage management
- **[@jeliq/app-sdk-next-router](https://www.npmjs.com/package/@jeliq/app-sdk-next-router)**: Enhanced Next.js routing with automatic route generation, type-safe navigation, and middleware support
- **[@jeliq/app-sdk-llm](https://www.npmjs.com/package/@jeliq/app-sdk-llm)**: LLM integration utilities for building AI-powered features with support for various providers

## Getting Started

### Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Node.js 20.x or higher** - [Download from nodejs.org](https://nodejs.org/)
- **Docker Desktop** - [Download from docker.com](https://www.docker.com/products/docker-desktop/) (required for running Supabase locally)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Jeliq-Apps-Template
   ```

2. **Install pnpm package manager**
   ```bash
   npm install -g pnpm@latest
   ```

3. **Install project dependencies**
   ```bash
   pnpm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit the `.env` file with your specific configuration values (see [Environment Variables](#environment-variables) section below).

### Initial Setup Verification

After installation, verify your setup by running:

```bash
# Check if all dependencies are installed correctly
pnpm --version
node --version
docker --version

# Verify project structure
ls -la
```

## Running the Application

### Running Storybook

```
$ pnpm run:storybook
```

### Running Supabase Locally

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

### Building & Running the Backend API

1. Set environment variables:
   ```
   $ export PORT=6001               # API running port
   $ export SUPABASE_URL=http://localhost:54321  # Supabase URL
   $ export SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  # Supabase anon key
   ```

2. Ensure Supabase Storage Buckets Exist
   ```
   $ SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... pnpm ensure-buckets
   ```

3. Build the API:
   ```
   $ pnpm build:api
   ```

4. Run the API:
   ```
   $ pnpm run:api
   ```

### Building & Running the Web Front-end (Next.js)

1. Set environment variable:
   ```
   $ export NEXT_PUBLIC_API_ENDPOINT=http://localhost:6001/  # API endpoint
   ```

2. Build the web:
   ```
   $ pnpm build:web
   ```
   **Note:** This command automatically generates the Next.js App Router files (in `app/`) from the Jeliq routing directory (`src/routing`).

3. Run the web:
   ```
   $ pnpm run:web
   ```

## Project Layout

```
├── api/                    # Backend API (Express + OpenAPI)
├── app/                    # Next.js App Router (auto-generated)
├── docs/                   # Project documentation
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components with Storybook
│   ├── domain/             # Business logic and entities
│   ├── infra/              # External services integration
│   ├── locales/            # i18n translations
│   ├── routing/            # Page routing configuration
│   ├── services/           # Application services
│   └── usecases/           # Business use cases
├── supabase/               # Database schema and migrations
└── web/                    # Next.js configuration
```

### Key Configuration Files
- `package.json` - Dependencies and scripts
- `tsconfig.*.json` - TypeScript configurations
- `.env.example` - Environment variables template
- `next.config.js` - Next.js settings
- `tailwind.config.js` - Tailwind CSS settings

## License

MIT

## Related Links

[Jeliq Official Website](https://jeliq.ai/)
