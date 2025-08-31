# Portfolio Website - Devesh Kumar Gola

## Overview

This is a modern, professional single-page portfolio website for Devesh Kumar Gola, an AI Engineer and counseling psychology enthusiast. The application showcases his dual expertise in artificial intelligence and psychology through a clean, responsive interface built with React and TypeScript. The site features comprehensive sections including his journey, expertise, work experience, projects, research publications, and contact information, all designed to present a cohesive professional narrative.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, professional design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **UI Components**: Radix UI primitives wrapped in custom shadcn/ui components

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Development**: Vite for fast development and hot module replacement
- **API Design**: RESTful API endpoints for contact form submission and message retrieval
- **Data Storage**: In-memory storage with interface abstraction for future database integration
- **Build System**: ESBuild for production bundling

### Database Design
- **Schema Definition**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Tables**: Users table for authentication and contact_messages table for form submissions
- **Validation**: Zod schemas for runtime type validation and data integrity
- **Migration Strategy**: Drizzle Kit for database schema management

### Styling and Design System
- **Design Tokens**: CSS custom properties for consistent theming
- **Typography**: Inter for sans-serif, Playfair Display for serif headings
- **Color Scheme**: Professional blue and neutral palette with dark mode support
- **Component Variants**: Class Variance Authority for systematic component styling
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Development Experience
- **TypeScript Configuration**: Strict mode with path aliases for clean imports
- **Hot Reload**: Vite development server with instant updates
- **Error Handling**: Runtime error overlay for development debugging
- **Code Organization**: Clear separation between client, server, and shared code

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Consistent icon library for visual elements
- **Class Variance Authority**: Type-safe component variant management

### Data Management
- **TanStack Query**: Powerful data fetching and caching solution
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Date-fns**: Modern date utility library for time formatting

### Database Integration
- **Drizzle ORM**: Type-safe SQL toolkit and query builder
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Drizzle Kit**: Database migration and introspection tools

### Development Tools
- **Vite**: Next-generation frontend build tool
- **TSX**: TypeScript execution environment for Node.js
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility

### Replit Integration
- **Cartographer Plugin**: Enhanced development experience within Replit
- **Runtime Error Modal**: Development debugging assistance
- **Development Banner**: Replit environment integration