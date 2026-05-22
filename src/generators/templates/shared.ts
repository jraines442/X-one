import { writeFileSync } from 'fs';
import { join } from 'path';

interface PackageJsonConfig {
  name: string;
  description: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
}

export function createPackageJson(
  projectPath: string,
  config: PackageJsonConfig
): void {
  const packageJson = {
    name: config.name,
    version: '0.1.0',
    description: config.description,
    type: 'module',
    scripts: config.scripts,
    dependencies: config.dependencies,
    devDependencies: config.devDependencies,
    keywords: ['x-one', 'vite', 'spa'],
    author: '',
    license: 'MIT',
  };

  writeFileSync(
    join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
}

export function createViteConfig(projectPath: string): void {
  const content = `import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
  },
})`;

  writeFileSync(join(projectPath, 'vite.config.ts'), content);
}

interface TsConfigOptions {
  jsx?: string;
  jsxImportSource?: string;
}

export function createTsConfig(
  projectPath: string,
  options?: TsConfigOptions
): void {
  const baseConfig = {
    compilerOptions: {
      target: 'ES2020',
      useDefineForClassFields: true,
      lib: ['ES2020', 'DOM', 'DOM.Iterable'],
      module: 'ESNext',
      skipLibCheck: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,

      // Bundler mode
      moduleResolution: 'bundler',
      allowImportingTsExtensions: true,
      resolveJsonModule: true,
      isolatedModules: true,
      noEmit: true,
      strict: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      noFallthroughCasesInSwitch: true,
      forceConsistentCasingInFileNames: true,
      ...options,
    },
    include: ['src'],
    references: [{ path: './tsconfig.node.json' }],
  };

  writeFileSync(
    join(projectPath, 'tsconfig.json'),
    JSON.stringify(baseConfig, null, 2)
  );

  // Create tsconfig.node.json
  const nodeConfig = {
    compilerOptions: {
      composite: true,
      skipLibCheck: true,
      module: 'ESNext',
      moduleResolution: 'bundler',
      allowSyntheticDefaultImports: true,
    },
    include: ['vite.config.ts', 'next.config.js'],
  };

  writeFileSync(
    join(projectPath, 'tsconfig.node.json'),
    JSON.stringify(nodeConfig, null, 2)
  );
}
