# PixelPerfection

The ultimate challenge for detail-oriented developers. Spot differences, correct code, and achieve pixel-perfect results through interactive coding challenges.

PixelPerfection helps you master frontend precision through a systematic approach of hands-on challenges that test your ability to identify design inconsistencies and correct them in real-time.

## How It Works

1. **Choose Your Challenge:** Select from a curated collection of challenges ranging from basic HTML/CSS to advanced components. Each challenge is designed to test specific skills and help you develop a keen eye for detail.

2. **Spot the Differences:** Use your detective skills to identify inconsistencies between the target design and current implementation. Is it a color that's off? Maybe the spacing isn't quite right? Every pixel matters.

3. **Code the Solution:** Dive into our professional code editor and fix the issues in real-time. Watch as your changes instantly update the preview, bringing you closer to pixel perfection with every keystroke.

4. **Achieve Perfection:** Use our advanced comparison tools to validate your solution. Get instant feedback and achieve that satisfying moment when your design perfectly matches the target.

5. **Level Up & Compete:** Earn XP, climb the leaderboard, and unlock new challenges. Track your progress and compete with developers worldwide to become a PixelPerfection champion.

## Visit the Site

You can access PixelPerfection online at [pixel-perfection.keeghan.io](https://pixel-perfection.keeghan.io)

## Project Structure

```
src/
├── app/                    # SolidJS Application
│   ├── _store.ts          # Global state management
│   ├── app.tsx            # Main app component
│   ├── Challenges.ts      # Challenge definitions
│   └── components/        # Interactive components
├── components/            # Static Astro Components
│   ├── hero/              # Landing page hero
│   ├── features/          # Feature showcase
│   └── ui/                # Reusable UI components
├── pages/                 # Astro routes
│   ├── index.astro        # Landing page
│   └── app.astro          # Main application
├── layouts/               # Page layouts
└── styles/                # Global styling
```

## Architecture

### Frontend Framework

- **Astro**: Multi-page application framework with islands architecture
- **SolidJS**: Reactive UI library for the interactive app components
- **SCSS**: CSS preprocessor for styling with BEM-like naming convention

### Key Design Patterns

- **Component Composition**: Reusable UI components with TypeScript interfaces
- **Island Architecture**: Static pages with interactive SolidJS islands
- **State Management**: Centralized store using SolidJS signals
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## Naming Conventions

### Files and Folders

- **kebab-case**: All file and folder names (e.g., `app-bar.tsx`, `design-panel/`)
- **Components**: Component files match their folder name
- **TypeScript Interfaces**: Prefixed with `T` (e.g., `TButton.ts`, `TAppBar.ts`)
- **Styles**: SCSS files match component names (e.g., `button.scss`)

### CSS Classes

- **BEM-inspired**: Block Element Modifier pattern with double underscores and double hyphens
  ```scss
  .app-bar                    // Block
  .app-bar__left-section     // Element
  .app-bar__logo--active     // Modifier
  ```

### TypeScript

- **PascalCase**: Component names and types
- **camelCase**: Variables, functions, and properties
- **Interface Prefix**: `T` prefix for type definitions (e.g., `TButton`, `TEditor`)

## Code Guidelines

### Component Structure

```tsx
// Standard SolidJS component structure
import type { TComponentType } from './TComponentType'
import './component.scss'

export default function Component(props: TComponentType) {
  // Component logic
  return <div class='component'>{/* JSX content */}</div>
}
```

### Astro Components

```astro
---
// Script section for logic
interface Props {
  title: string
  optional?: boolean
}
const { title, optional = false } = Astro.props
---

<!-- Template section -->
<section class='component'>
  <h2>{title}</h2>
  <slot />
</section>

<style lang='scss'>
  /* Component styles */
</style>
```

### SCSS Structure

```scss
// Component base
.component {
  // Base styles

  // Elements
  &__element {
    // Element styles
  }

  // Modifiers
  &--modifier {
    // Modifier styles
  }

  // Responsive
  @media (min-width: 768px) {
    // Desktop styles
  }
}
```

### State Management

- **Centralized Store**: Global state in `_store.ts` using SolidJS signals
- **Derived State**: Computed values using SolidJS reactivity
- **Local State**: Component-level state for UI interactions only

### TypeScript Rules

- **Strict Mode**: All TypeScript strict checks enabled
- **Type Safety**: No `any` types, explicit typing required
- **Interface Definitions**: Separate files for reusable types
- **Props Validation**: Interfaces for all component props

### Styling Guidelines

- **CSS Custom Properties**: Use CSS variables for theming
- **Mobile First**: Write mobile styles first, then desktop
- **Component Isolation**: Styles scoped to component level
- **Design System**: Consistent spacing, colors, and typography tokens

### Performance Considerations

- **Code Splitting**: Astro islands for interactive components only
- **Image Optimization**: SVGs for icons, optimized assets
- **Bundle Size**: Tree-shaking enabled, minimal JavaScript footprint
- **Lazy Loading**: Progressive enhancement where possible

## Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Technology Stack

PixelPerfection is built using:

- **[Astro](https://astro.build/)** - Multi-page application framework with islands architecture
- **[SolidJS](https://www.solidjs.com/)** - Reactive JavaScript library for building user interfaces
- **[SCSS](https://sass-lang.com/)** - CSS preprocessor for enhanced styling capabilities
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript development

### Key Libraries

- **[CodeMirror](https://codemirror.net/)** - Code editor with syntax highlighting and themes
- **[html-to-image](https://www.npmjs.com/package/html-to-image)** - DOM to image conversion for comparisons

## Contributing

When contributing to this project, please follow these guidelines:

1. **Code Style**: Follow the established naming conventions and code structure
2. **TypeScript**: Maintain strict type safety, no `any` types
3. **Components**: Create reusable components with proper TypeScript interfaces
4. **Styling**: Use BEM-inspired class naming and component-scoped SCSS
5. **Testing**: Test components in both light and dark themes
6. **Performance**: Consider bundle size and runtime performance

### Adding New Components

1. Create component folder with kebab-case name
2. Include TypeScript interface file (`TComponentName.ts`)
3. Create component file (`component-name.tsx` or `.astro`)
4. Add corresponding SCSS file (`component-name.scss`)
5. Export from parent directory if reusable

### Challenges System

New challenges should be added to `src/app/Challenges.ts` following this structure:

```typescript
{
  id: number,
  name: string,
  description: string,
  HTML: string,           // Target HTML structure
  generalCSS: string,     // Base styles
  correctCSS: string,     // Target CSS for comparison
  wrongCSS: string        // Starting point with issues
}
```

## License

This project is open source and available under the MIT License.

## Contact

Keeghan McGarry - hello@keeghan.io

---

_Built with ❤️ for the developer community_
