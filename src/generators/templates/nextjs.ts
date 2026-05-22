import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { GeneratorConfig } from '../types.js';
import { createPackageJson, createTsConfig } from './shared.js';

export async function generateNextJsTemplate(config: GeneratorConfig): Promise<void> {
  const { projectPath, name } = config;

  // Create directories
  const appDir = join(projectPath, 'app');
  mkdirSync(appDir, { recursive: true });
  mkdirSync(join(projectPath, 'public'), { recursive: true });

  // Create package.json
  const dependencies = {
    next: '^14.0.0',
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  };

  const devDependencies = {
    '@types/node': '^20.0.0',
    '@types/react': '^18.2.0',
    '@types/react-dom': '^18.2.0',
    typescript: '^5.3.0',
  };

  createPackageJson(projectPath, {
    name,
    description: 'A modern Next.js SPA built with X-one',
    dependencies,
    devDependencies,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
    },
  });

  // Create tsconfig.json
  createTsConfig(projectPath);

  // Create next.config.js
  const nextConfigContent = `/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig`;

  writeFileSync(join(projectPath, 'next.config.js'), nextConfigContent);

  // Create app/layout.tsx
  const layoutContent = `import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '${name}',
  description: 'Built with X-one',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`;

  writeFileSync(join(appDir, 'layout.tsx'), layoutContent);

  // Create app/page.tsx
  const pageContent = `'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <h1>Welcome to X-one</h1>
        <p>Modern Next.js SPA with zero config</p>
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>app/page.tsx</code> and save to see changes
        </p>
      </div>
    </main>
  )
}`;

  writeFileSync(join(appDir, 'page.tsx'), pageContent);

  // Create app/globals.css
  const globalsCss = `:root {
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}`;

  writeFileSync(join(appDir, 'globals.css'), globalsCss);

  // Create app/page.module.css
  const pageModuleCss = `.main {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.card {
  padding: 2em;
  text-align: center;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  color: #646cff;
}

button:hover {
  border-color: #646cff;
}`;

  writeFileSync(join(appDir, 'page.module.css'), pageModuleCss);

  // Create .gitignore
  const gitignore = `# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts`;

  writeFileSync(join(projectPath, '.gitignore'), gitignore);

  // Create README.md
  const readmeContent = `# ${name}

A modern Next.js SPA built with [X-one](https://github.com/yourusername/x-one).

## Features

- ⚛️ React 18 with Next.js
- ⚡ Fast refresh during development
- 🔧 Zero configuration
- 📦 TypeScript support
- 🎨 CSS Modules support
- 🚀 Optimized for production

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [X-one Documentation](https://github.com/yourusername/x-one)

## License

MIT`;

  writeFileSync(join(projectPath, 'README.md'), readmeContent);
}
