# Quick Start Guide

Get up and running with X-one in 5 minutes!

## Installation

Choose one of these methods to install X-one:

### Global Installation

```bash
npm install -g x-one
```

Then use it anywhere:

```bash
x-one create my-app
```

### Using npx (No Installation Required)

```bash
npx x-one create my-app
```

## Creating Your First Project

### Step 1: Run the Create Command

```bash
x-one create my-first-app
```

### Step 2: Choose Your Framework

You'll be presented with options:

```
? Which framework would you like to use?
❯ ⚛️  React (Vite)
  ▲ Next.js
  ⚡ Vanilla TypeScript (Vite)
```

Select your preferred framework and press Enter.

### Step 3: Navigate to Your Project

```bash
cd my-first-app
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start Development

```bash
npm run dev
```

Your browser should automatically open with your new application running on `http://localhost:5173`.

## What You Get

Each template includes:

- ✅ Pre-configured build setup (Vite or Next.js)
- ✅ Hot Module Replacement for instant updates
- ✅ TypeScript configuration
- ✅ ESM-based project structure
- ✅ Essential styles and components
- ✅ Git initialization
- ✅ README with helpful information

## Next Steps

### Start Developing

Edit `src/App.tsx` (React/Vite) or `app/page.tsx` (Next.js) to customize your app. Changes will automatically refresh!

### Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

This serves your production build locally for testing.

## File Structure

### React/Vite Template

```
my-app/
├── src/
│   ├── main.tsx       # Entry point
│   ├── App.tsx        # Main component
│   ├── App.css        # Component styles
│   └── index.css      # Global styles
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript settings
└── package.json       # Dependencies
```

### Next.js Template

```
my-app/
├── app/
│   ├── page.tsx       # Home page
│   ├── layout.tsx     # Root layout
│   ├── globals.css    # Global styles
│   └── page.module.css # Page styles
├── public/            # Static files
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript settings
└── package.json       # Dependencies
```

### Vite Template

```
my-app/
├── src/
│   ├── main.ts        # Entry point
│   ├── counter.ts     # Example logic
│   └── style.css      # Styles
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tsconfig.json      # TypeScript settings
└── package.json       # Dependencies
```

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting (if configured)
npm run lint

# Run tests (if configured)
npm test
```

## Tips & Tricks

### Using a Different Port

```bash
npm run dev -- --port 3000
```

### Building with Custom Output

```bash
npm run build -- --outdir custom-dist
```

### Accessing on Network

```bash
npm run dev -- --host
```

This allows access from other machines on your network.

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, you can specify a different port:

```bash
npm run dev -- --port 3000
```

### Module Not Found Errors

Make sure all dependencies are installed:

```bash
npm install
```

### Build Fails

Clear the cache and rebuild:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Next Resources

- 📖 Read the full [README](../README.md)
- 🤝 Check out [Contributing Guidelines](../CONTRIBUTING.md)
- 🐛 Found a bug? [Open an issue](https://github.com/yourusername/x-one/issues)
- 💬 Have questions? [Start a discussion](https://github.com/yourusername/x-one/discussions)

## Need Help?

- Check the [FAQ](./faq.md)
- Visit the [Documentation](./README.md)
- Search [existing issues](https://github.com/yourusername/x-one/issues)
- Open a [new discussion](https://github.com/yourusername/x-one/discussions)

Happy coding! 🚀
