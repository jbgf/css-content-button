# CSS Content Button

A React component library for SEO-friendly buttons that use CSS `content` property to display text without affecting keyword density. Perfect for websites with many repeated button texts that could interfere with SEO optimization.

## 🚀 Live Demo

See this package in action at **[Embed Code](https://embed-code.com/)** - a tool that uses our CSS content button technique to avoid keyword density issues with repeated button text.

## 🎯 Problem Solved

When you have multiple buttons with the same text (like "Play", "Download", "Subscribe") on a page, these repeated words can negatively impact your SEO keyword density. This package solves that by using CSS `::before` pseudo-elements with the `content` property to display button text, keeping the actual text out of your HTML.

## 🚀 Key Benefits

- 📈 **SEO Optimized**: Button text doesn't affect keyword density
- 🎨 **Modern Design**: Beautiful, customizable button styles
- 📱 **Responsive**: Mobile-friendly design
- ♿ **Accessible**: Proper ARIA labels for screen readers
- 🔧 **TypeScript**: Full TypeScript support
- 🎭 **Flexible**: Multiple variants, sizes, and customization options
- ⚡ **Lightweight**: No external dependencies

## 📦 Installation

```bash
# Using npm
npm install css-content-button

# Using yarn
yarn add css-content-button

# Using pnpm
pnpm add css-content-button
```

## 🔧 Usage

### Basic Usage

```tsx
import React from 'react';
import { CssContentButton } from 'css-content-button';

function App() {
  return (
    <div>
      <CssContentButton 
        content="Play Video" 
        onClick={() => console.log('Playing video')}
      />
    </div>
  );
}
```

### Advanced Usage with All Props

```tsx
import React from 'react';
import { CssContentButton } from 'css-content-button';

function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <CssContentButton
        content="Subscribe Now"
        variant="primary"
        size="large"
        onClick={handleClick}
        aria-label="Subscribe to our newsletter"
        className="my-custom-class"
        style={{ '--primary-color': '#ff6b6b' }}
      />
    </div>
  );
}
```

## 📋 API Reference

### CssContentButton Props

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `content` | `string` | - | ✅ | The text to display (rendered via CSS) |
| `variant` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info'` | `'primary'` | ❌ | Button color variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | ❌ | Button size |
| `disabled` | `boolean` | `false` | ❌ | Whether button is disabled |
| `onClick` | `() => void` | - | ❌ | Click handler function |
| `className` | `string` | `''` | ❌ | Additional CSS class |
| `style` | `React.CSSProperties` | - | ❌ | Custom inline styles |
| `aria-label` | `string` | `content` | ❌ | Accessibility label |

## 🎨 Variants

### Color Variants

```tsx
<CssContentButton content="Primary" variant="primary" />
<CssContentButton content="Secondary" variant="secondary" />
<CssContentButton content="Success" variant="success" />
<CssContentButton content="Danger" variant="danger" />
<CssContentButton content="Warning" variant="warning" />
<CssContentButton content="Info" variant="info" />
```

### Size Variants

```tsx
<CssContentButton content="Small" size="small" />
<CssContentButton content="Medium" size="medium" />
<CssContentButton content="Large" size="large" />
```

## 🎨 Customization

### CSS Variables

You can customize the appearance using CSS variables:

```css
:root {
  --primary-color: #your-color;
  --primary-hover: #your-hover-color;
  --border-radius: 8px;
  --font-family: 'Your Font', sans-serif;
}
```

### Custom Styles

```tsx
<CssContentButton
  content="Custom Button"
  style={{
    '--primary-color': '#ff6b6b',
    '--border-radius': '20px'
  }}
/>
```

### CSS Classes

```css
/* Override specific button styles */
.my-custom-button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
}

.my-custom-button:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
```

Package defaults are kept in a low-priority cascade layer with zero-specificity
selectors, so consumer classes and Tailwind utility classes can override them
without `!important`. Inline `style` values still have higher priority.

## 🔍 SEO Benefits Example

**Traditional buttons (affects keyword density):**
```html
<!-- This HTML contains 40 instances of "Play" -->
<button>Play</button>
<button>Play</button>
<button>Play</button>
<!-- ... 37 more buttons -->
```

**CSS Content buttons (SEO-friendly):**
```html
<!-- This HTML contains 0 instances of "Play" in text content -->
<button class="css-content-button" style="--button-content: 'Play'"></button>
<button class="css-content-button" style="--button-content: 'Play'"></button>
<button class="css-content-button" style="--button-content: 'Play'"></button>
<!-- ... 37 more buttons -->
```

The text "Play" is displayed via CSS `content` property, keeping it out of your HTML and preserving your keyword density for SEO.

## ♿ Accessibility

The component maintains full accessibility:

- Proper ARIA labels (uses `content` as fallback)
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility

```tsx
<CssContentButton
  content="Play Video"
  aria-label="Play the promotional video about our product"
/>
```

## 🌐 Browser Support

The override-friendly stylesheet uses CSS cascade layers and `:where()`. Use a
modern browser that supports both features for predictable external style
overrides.

- Chrome ≥ 51
- Firefox ≥ 54
- Safari ≥ 10
- Edge ≥ 79

## 🛠️ Development

### Local Development

```bash
# Clone the repository
git clone https://github.com/jbgf/css-content-button.git
cd css-content-button

# Install dependencies
pnpm install

# Development mode
pnpm run dev

# Build
pnpm run build

# Run tests
pnpm test

# Lint code
pnpm run lint
```

### Project Structure

```
css-content-button/
├── src/
│   ├── index.tsx              # Main component
│   ├── css-content-button.css # Styles
│   └── index.test.tsx         # Tests
├── dist/                      # Build output
├── package.json
├── tsconfig.json
├── rollup.config.js
└── README.md
```

## 📝 Examples

### E-commerce Site

```tsx
// Product listing with many "Add to Cart" buttons
function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <CssContentButton
            content="Add to Cart"
            variant="primary"
            onClick={() => addToCart(product.id)}
            aria-label={`Add ${product.name} to cart`}
          />
        </div>
      ))}
    </div>
  );
}
```

### Video Platform

```tsx
// Video thumbnails with many "Play" buttons
function VideoThumbnail({ video }) {
  return (
    <div className="video-thumbnail">
      <img src={video.thumbnail} alt={video.title} />
      <CssContentButton
        content="Play"
        variant="primary"
        size="large"
        onClick={() => playVideo(video.id)}
        aria-label={`Play ${video.title}`}
        className="play-button-overlay"
      />
    </div>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

Inspired by the SEO optimization technique of using CSS `content` property to avoid keyword density issues, as discussed in various SEO communities.

**Made with ❤️ for better SEO and cleaner HTML** 
