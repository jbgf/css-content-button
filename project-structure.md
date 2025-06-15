# CSS Content Button - Project Structure

## 📁 Project Overview

This is a React component library that provides SEO-friendly buttons using CSS `content` property to display text without affecting keyword density.

## 🏗️ Directory Structure

```
css-content-button/
├── 📁 .git/                    # Git repository data
├── 📁 dist/                    # Build output directory
│   ├── index.js                # CommonJS build
│   ├── index.esm.js           # ES modules build
│   └── index.d.ts             # TypeScript declarations
├── 📁 node_modules/           # Dependencies
├── 📁 src/                    # Source code
│   ├── index.tsx              # Main component export
│   ├── css-content-button.css # Component styles
│   ├── index.test.tsx         # Component tests
│   └── setupTests.ts          # Test configuration
├── 📄 .eslintrc.js           # ESLint configuration
├── 📄 .gitignore             # Git ignore rules
├── 📄 .npmrc                 # NPM configuration
├── 📄 jest.config.js         # Jest test configuration
├── 📄 package.json           # Package configuration
├── 📄 pnpm-lock.yaml         # PNPM lock file
├── 📄 project-structure.md   # This file
├── 📄 README.md              # Package documentation
├── 📄 rollup.config.js       # Build configuration
└── 📄 tsconfig.json          # TypeScript configuration
```

## 📋 File Descriptions

### Core Source Files

#### `src/index.tsx`
- **Purpose**: Main component implementation
- **Exports**: `CssContentButton` component and `CssContentButtonProps` interface
- **Key Features**:
  - Uses CSS custom properties to pass content text
  - Supports multiple variants (primary, secondary, success, danger, warning, info)
  - Supports multiple sizes (small, medium, large)
  - Handles disabled state and click events
  - Provides accessibility support with ARIA labels
  - Escapes quotes in content for proper CSS rendering

#### `src/css-content-button.css`
- **Purpose**: Component styling using CSS content property
- **Key Features**:
  - CSS custom properties for theming
  - `::before` pseudo-element for content display
  - Responsive design with mobile breakpoints
  - Hover and focus states
  - Multiple color variants
  - Size variants
  - Disabled state styling

#### `src/index.test.tsx`
- **Purpose**: Comprehensive test suite for the component
- **Test Coverage**:
  - Basic rendering and CSS variable setting
  - Variant and size class application
  - Disabled state handling
  - Click event handling
  - Custom className and style application
  - ARIA label functionality
  - Quote escaping in content

#### `src/setupTests.ts`
- **Purpose**: Jest test environment setup
- **Configuration**: Imports `@testing-library/jest-dom` for additional matchers

### Configuration Files

#### `package.json`
- **Package Name**: `css-content-button`
- **Main Exports**: 
  - `main`: CommonJS build (`dist/index.js`)
  - `module`: ES modules build (`dist/index.esm.js`)
  - `types`: TypeScript declarations (`dist/index.d.ts`)
- **Scripts**: Build, dev, test, lint commands
- **Dependencies**: React peer dependencies
- **Keywords**: CSS, content, button, SEO, keyword-density

#### `tsconfig.json`
- **Purpose**: TypeScript compiler configuration
- **Target**: ES5 for broad compatibility
- **Module**: ESNext for tree-shaking
- **JSX**: React JSX transform
- **Strict Mode**: Enabled for type safety

#### `rollup.config.js`
- **Purpose**: Build configuration for creating distributable bundles
- **Outputs**: 
  - CommonJS bundle for Node.js compatibility
  - ES modules bundle for modern bundlers
- **Plugins**: TypeScript, PostCSS, external dependencies handling

#### `jest.config.js`
- **Purpose**: Test runner configuration
- **Environment**: jsdom for DOM testing
- **Setup**: Custom test setup file
- **Transform**: TypeScript and CSS handling

#### `.eslintrc.js`
- **Purpose**: Code linting rules
- **Extends**: TypeScript and React recommended rules
- **Rules**: Custom rules for code quality

### Documentation Files

#### `README.md`
- **Purpose**: Comprehensive package documentation
- **Sections**:
  - Problem explanation and benefits
  - Installation instructions
  - Usage examples
  - API reference
  - Customization guide
  - SEO benefits explanation
  - Accessibility information
  - Browser compatibility
  - Development guide

#### `project-structure.md`
- **Purpose**: This file - explains project organization
- **Content**: Directory structure and file descriptions

## 🔧 Build Process

### Development Workflow
1. **Source**: Write code in `src/` directory
2. **Testing**: Run tests with Jest
3. **Linting**: Check code quality with ESLint
4. **Building**: Bundle with Rollup
5. **Output**: Generate files in `dist/` directory

### Build Outputs
- **`dist/index.js`**: CommonJS bundle for Node.js
- **`dist/index.esm.js`**: ES modules bundle for modern bundlers
- **`dist/index.d.ts`**: TypeScript type definitions

## 🎯 Key Design Decisions

### CSS Content Strategy
- Uses CSS `::before` pseudo-element with `content` property
- Text is passed via CSS custom properties (`--button-content`)
- Keeps button text out of HTML to avoid SEO keyword density issues
- Maintains accessibility with proper ARIA labels

### Component Architecture
- Single component with multiple variants
- Props-based configuration
- CSS-in-JS approach for dynamic content
- TypeScript for type safety

### Styling Approach
- CSS custom properties for theming
- BEM-like class naming convention
- Responsive design with mobile-first approach
- No external CSS framework dependencies

## 📦 Package Distribution

### NPM Package Structure
```
css-content-button@1.0.0
├── dist/
│   ├── index.js      # CommonJS
│   ├── index.esm.js  # ES Modules
│   └── index.d.ts    # TypeScript
└── README.md         # Documentation
```

### Installation Methods
- NPM: `npm install css-content-button`
- Yarn: `yarn add css-content-button`
- PNPM: `pnpm add css-content-button`

## 🔄 Development Commands

- `pnpm run dev`: Development mode with watch
- `pnpm run build`: Production build
- `pnpm run test`: Run test suite
- `pnpm run lint`: Code linting
- `pnpm run lint:fix`: Auto-fix linting issues

## 🎨 Customization Points

### CSS Variables
- Color palette (primary, secondary, success, etc.)
- Typography (font-family, font-weight)
- Spacing (border-radius, padding)
- Transitions and animations

### Component Props
- Content text
- Visual variants
- Size options
- Event handlers
- Custom styling
- Accessibility labels

This structure provides a clean, maintainable, and extensible foundation for the CSS content button component library. 