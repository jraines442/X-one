import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { GeneratorConfig } from '../types.js';
import { createPackageJson, createViteConfig, createTsConfig } from './shared.js';

export async function generateViteTemplate(config: GeneratorConfig): Promise<void> {
  const { projectPath, name } = config;

  // Create directories
  const srcDir = join(projectPath, 'src');
  mkdirSync(srcDir, { recursive: true });
  mkdirSync(join(projectPath, 'public'), { recursive: true });

  // Create package.json
  const dependencies: Record<string, string> = {};

  const devDependencies = {
    vite: '^5.0.0',
    typescript: '^5.3.0',
    '@types/node': '^20.0.0',
  };

  createPackageJson(projectPath, {
    name,
    description: 'A modern Vite SPA built with X-one',
    dependencies,
    devDependencies,
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
    },
  });

  // Create vite.config.ts
  createViteConfig(projectPath);

  // Create tsconfig.json
  createTsConfig(projectPath);

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
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;

  writeFileSync(join(projectPath, 'index.html'), htmlContent);

  // Create src/main.ts
  const mainContent = `import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = \`
  <div>
    <h1>Welcome to X-one</h1>
    <p>Modern Vite SPA with zero config</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the counter button above to get started
    </p>
  </div>
\`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)`;

  writeFileSync(join(srcDir, 'main.ts'), mainContent);

  // Create src/counter.ts
  const counterContent = `export function setupCounter(element: HTMLButtonElement) {
  let count = 0
  const setCount = (newCount: number) => {
    count = newCount
    element.innerHTML = \`count is \${count}\`
  }
  element.addEventListener('click', () => setCount(count + 1))
  setCount(0)
}`;

  writeFileSync(join(srcDir, 'counter.ts'), counterContent);

  // Create src/style.css
  const styleCss = `:root {
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
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
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.card {
  padding: 2em;
}`;

  writeFileSync(join(srcDir, 'style.css'), styleCss);

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

A modern Vite SPA built with [X-one](https://github.com/yourusername/x-one).

## Features

- ⚡ Vite for fast development
- 📦 TypeScript support
- 🔧 Zero configuration
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
