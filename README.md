# X-one

> Build modern web projects with zero config

X-one is a TypeScript CLI tool that scaffolds modern web applications with **zero configuration**. Choose your framework, get a fully functional project, and start coding immediately.

## Features

✨ **Zero Configuration** - No complex config files, sensible defaults out of the box

🚀 **Fast Setup** - Scaffold projects in seconds

📦 **Multiple Frameworks** - React, Next.js, and Vite templates included

🎯 **SPA Focused** - Optimized for Single Page Applications

📝 **TypeScript Ready** - Full TypeScript support in all templates

🔥 **Hot Module Replacement** - Instant feedback during development

## Supported Frameworks

- **React** - Modern React SPAs with Vite
- **Next.js** - Full-featured React framework
- **Vite** - Lightweight vanilla TypeScript projects

## Quick Start

### Installation

```bash
npm install -g x-one
```

Or use with npx:

```bash
npx x-one create my-app
```

### Create a New Project

```bash
x-one create my-app
```

You'll be prompted to choose a template:

```
? Which framework would you like to use?
❯ ⚛️  React (Vite)
  ▲ Next.js
  ⚡ Vanilla TypeScript (Vite)
```

### Get Started

```bash
cd my-app
npm install
npm run dev
```

That's it! Your development server is running.

## Available Commands

### `x-one create [projectName]`

Create a new project with zero config.

**Options:**
- `-t, --template <template>` - Choose template (react, nextjs, vite)
- `--typescript` - Use TypeScript (default: true)
- `--skip-git` - Skip git initialization

**Example:**
```bash
x-one create my-app --template nextjs
```

### `x-one dev`

Start development server with automatic configuration detection.

**Options:**
- `-p, --port <port>` - Port to run on (default: 5173)
- `--host <host>` - Host to bind to (default: localhost)

### `x-one build`

Build your project for production with optimizations.

**Options:**
- `--outdir <dir>` - Output directory (default: dist)
- `--minify <type>` - Minification type (esbuild, terser)

## Project Structure

After creating a project, you'll get:

```
my-app/
├── src/                  # Source files
├── public/               # Static assets
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # (React/Vite only)
├── next.config.js        # (Next.js only)
└── README.md            # Project documentation
```

## Configuration

X-one uses **zero configuration** by default, but you can customize:

- **vite.config.ts** - Vite configuration
- **next.config.js** - Next.js configuration
- **tsconfig.json** - TypeScript settings
- **package.json** - Dependencies and scripts

## Development

### Setup

```bash
git clone https://github.com/yourusername/x-one
cd x-one
npm install
npm run dev
```

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

### v0.2.0
- [ ] Add Vue support
- [ ] Add Svelte support
- [ ] Config file override system

### v0.3.0
- [ ] Testing framework integration (Vitest, Jest)
- [ ] Linting configuration (ESLint, Prettier)
- [ ] Styling preprocessor support (Tailwind, SCSS)

### v0.4.0
- [ ] E2E testing setup (Cypress, Playwright)
- [ ] Environment variable management
- [ ] Build optimization presets

## License

MIT License - see LICENSE file for details

## Support

- 📖 [Documentation](./docs)
- 🐛 [Issue Tracker](https://github.com/yourusername/x-one/issues)
- 💬 [Discussions](https://github.com/yourusername/x-one/discussions)

## Inspiration

X-one is inspired by tools like Create React App, Vite, and Next.js, but with a focus on simplicity and zero configuration for modern web development.

---

**Made with ❤️ by the X-one team**
