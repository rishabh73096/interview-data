# My Next.js App

This is a simple Next.js application built with TypeScript, demonstrating the use of the App Router and various features of Next.js.

## Project Structure

```
my-next-app
├── src
│   ├── app
│   │   ├── layout.tsx        # Root layout of the application
│   │   ├── page.tsx          # Home page component
│   │   ├── globals.css       # Global styles
│   │   └── api
│   │       └── hello
│   │           └── route.ts  # API route returning a greeting
│   ├── components
│   │   ├── Header.tsx        # Header component
│   │   └── Footer.tsx        # Footer component
│   ├── lib
│   │   └── fetcher.ts        # Utility function for data fetching
│   ├── hooks
│   │   └── useUser.ts        # Custom hook for user management
│   └── types
│       └── index.d.ts        # TypeScript types
├── package.json               # NPM configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
├── next-env.d.ts              # Type definitions for Next.js
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd my-next-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Features

- **TypeScript Support:** The project is built with TypeScript for type safety.
- **API Routes:** A simple API route is provided to demonstrate server-side functionality.
- **Custom Hooks:** A custom hook for user management is included.
- **Reusable Components:** Header and Footer components are created for better code organization.

## License

This project is licensed under the MIT License.# interview-data
