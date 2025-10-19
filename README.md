# Portfolio Angular

A modern, themeable personal portfolio built with Angular standalone components and routing.

## Features

- Angular 18+ with standalone components
- Responsive design
- Section navigation (Home, About, Skills, Experience, Education, Contact)
- Theme dropdown in navbar (6 themes: Default, Dark, Light, Ocean, Forest, Sunset)
- Smooth scrolling and animated transitions
- SVG icons for social/contact links

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Angular CLI (optional, for development)

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

Or, if using Angular CLI:

```bash
ng serve
```

Visit `http://localhost:4200` in your browser.

## Project Structure

```
project/
  src/
    app/
      components/
        ... (feature components)
      app.component.*
      app.routes.ts
    global_styles.css
  angular.json
  package.json
  tsconfig.json
```

## Theming

- Use the theme dropdown in the navbar to instantly switch between color schemes.
- Themes update global CSS variables for seamless style changes.

## Customization

- Edit `src/app/components/` to update content or add new sections.
- Add or modify themes in the `applyTheme` method in `navbar.component.ts`.
- Update global styles in `src/global_styles.css`.

## License

MIT
