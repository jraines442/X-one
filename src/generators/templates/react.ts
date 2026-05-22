import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { GeneratorConfig } from '../types.js';
import { createPackageJson, createViteConfig, createTsConfig } from './shared.js';

export async function generateReactTemplate(config: GeneratorConfig): Promise<void> {
  const { projectPath, name, typescript } = config;

  // Create directories
  const srcDir = join(projectPath, 'src');
  const publicDir = join(projectPath, 'public');
  mkdirSync(srcDir, { recursive: true });
  mkdirSync(publicDir, { recursive: true });

  // Create package.json
  const dependencies = {
    react: '^18.2.0',
    'react-dom': '^18.2.0',
  };

  const devDependencies = {
    '@types/react': '^18.2.0',
    '@types/react-dom': '^18.2.0',
    '@vitejs/plugin-react': '^4.2.0',
    vite: '^5.0.0',
  };

  if (typescript) {
    devDependencies['typescript'] = '^5.3.0';
  }

  createPackageJson(projectPath, {
    name,
    description: 'A modern React SPA built with X-one',
    dependencies,
    devDependencies,
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
  });

  // Create vite.config.ts
  const viteConfigContent = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
  },
})`;

  writeFileSync(
    join(projectPath, 'vite.config.ts'),
    viteConfigContent
  );

  // Create tsconfig.json
  createTsConfig(projectPath, {
    jsx: 'react-jsx',
    jsxImportSource: 'react',
  });

  // Create index.html
  const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${name}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  writeFileSync(join(projectPath, 'index.html'), htmlContent);

  // Create main.tsx
  const mainContent = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;

  writeFileSync(
    join(srcDir, 'main.tsx'),
    mainContent
  );

  // Create App.tsx
  const appContent = `import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <h1>Welcome to X-one</h1>
      <p>Modern React SPA with zero config</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App`;

  writeFileSync(join(srcDir, 'App.tsx'), appContent);

  // Create App.css
  const appCss = `.card {
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

  writeFileSync(join(srcDir, 'App.css'), appCss);

  // Create index.css
  const indexCss = `:root {
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

#root {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}`;

  writeFileSync(join(srcDir, 'index.css'), indexCss);

  // Create .gitignore
  const gitignore = `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`;

  writeFileSync(join(projectPath, '.gitignore'), gitignore);

  // Create README.md
  const readmeContent = `# ${name}

A modern React SPA built with [X-one](https://github.com/yourusername/x-one).

## Features

- ⚛️ React 18
- ⚡ Vite for fast development
- 🔧 Zero configuration
- 📦 TypeScript support
- 🎨 CSS support out of the box
- 🔥 Hot Module Replacement (HMR)

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run preview\` - Preview production build

## License

MIT`;

  writeFileSync(join(projectPath, 'README.md'), readmeContent);
}
