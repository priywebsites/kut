# replit.md

## Overview

This is a modern, ultra-premium barbershop website built with cutting-edge web technologies. The application serves as a luxury digital presence for Kut'n Up Barber Shop in Huntsville, AL, featuring sophisticated animations, minimalist design, and a seamless user experience. The site emphasizes premium grooming services through elegant visual presentation and smooth interactive elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom configuration restricted to grayscale palette (black, white, grays only)
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, professional components
- **Animation Engine**: Framer Motion for sophisticated page transitions, scroll animations, and micro-interactions
- **State Management**: TanStack React Query for server state management and data fetching
- **Typography**: Modern sans-serif fonts (Inter, Space Grotesk) for premium feel

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Build System**: Vite for fast development and optimized production builds
- **Language**: TypeScript throughout for type consistency
- **Session Management**: In-memory storage with extensible interface for future database integration
- **API Structure**: RESTful endpoints with `/api` prefix routing

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle Kit for migrations and schema changes
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple

### Development & Deployment
- **Development Server**: Vite with hot module replacement and custom middleware
- **Production Build**: esbuild for server bundling, Vite for client assets
- **Deployment Target**: Vercel with custom routing configuration
- **Asset Management**: Static file serving with cache optimization headers

### Animation Strategy
- **Scroll Animations**: Custom React hooks using Framer Motion's useInView for performance
- **Page Transitions**: Route-based animations with staggered component reveals
- **Micro-interactions**: Hover states, button animations, and form feedback
- **Mobile Optimization**: Touch-friendly animations with reduced motion support

### Content Architecture
- **Sections**: Hero, About, Services, Work Portfolio, Reviews, Contact
- **Component Structure**: Modular section components with reusable UI elements
- **Image Handling**: Fallback system for missing assets with optimized loading
- **SEO Optimization**: Meta tags, Open Graph integration, and semantic HTML

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React plugin for Vite build system
- **wouter**: Lightweight routing library for single-page applications
- **framer-motion**: Advanced animation library for React components

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Utility for conditional CSS class composition

### Database & ORM
- **drizzle-orm**: TypeScript ORM for SQL databases
- **drizzle-kit**: CLI tools for database migrations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL database driver
- **drizzle-zod**: Zod schema integration for Drizzle ORM

### Development Tools
- **tsx**: TypeScript execution engine for Node.js
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS transformation pipeline
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay

### Styling & Icons
- **lucide-react**: Modern icon library with consistent design
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **autoprefixer**: CSS vendor prefix automation

### Session & Security
- **connect-pg-simple**: PostgreSQL session store for Express
- **express**: Web application framework for Node.js
- **date-fns**: Modern date utility library

### Build & Deployment
- **esbuild**: Fast JavaScript bundler for production builds
- **vercel**: Cloud platform for static sites and serverless functions
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment