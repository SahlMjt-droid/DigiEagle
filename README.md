# DigiEagle - React Web Application

This project has been converted from React Native/Expo to a pure React web application that runs only in web browsers.

## Project Structure

```
DigiEagle/
├── public/              # Static assets served by Vite
│   └── assets/          # Images and other static files
├── src/                 # Source code
│   ├── pages/          # Page components (Home, About, Career)
│   ├── App.tsx         # Main app component with routing
│   ├── App.css         # App-level styles
│   ├── main.tsx        # React entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS** - Styling with CSS files
- **ESLint** - Code linting

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Changes from React Native

1. **Components**: Converted from React Native components (`View`, `Text`) to HTML elements (`div`, `span`, etc.)
2. **Styling**: Replaced React Native StyleSheet with CSS files
3. **Navigation**: Changed from Expo Router to React Router
4. **Assets**: Images now served from `public/assets/` directory
5. **Build System**: Using Vite instead of Expo CLI
6. **Platform**: Web-only, no mobile app compilation

## Features

- ✅ Responsive web design
- ✅ Light/dark mode support
- ✅ TypeScript for type safety
- ✅ Modern React hooks
- ✅ Client-side routing
- ✅ Fast development with Vite
- ✅ ESLint for code quality

## Browser Support

This application runs in all modern web browsers and is responsive for both desktop and mobile viewing.