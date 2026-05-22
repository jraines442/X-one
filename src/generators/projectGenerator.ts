import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { ProjectConfig, GeneratorConfig } from './types.js';
import { generateReactTemplate } from './templates/react.js';
import { generateNextJsTemplate } from './templates/nextjs.js';
import { generateViteTemplate } from './templates/vite.js';
import { initGit } from '../utils/git.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function createProject(config: ProjectConfig): Promise<void> {
  const projectPath = join(process.cwd(), config.name);

  // Check if directory already exists
  if (existsSync(projectPath)) {
    throw new Error(`Directory ${config.name} already exists`);
  }

  // Create project directory
  mkdirSync(projectPath, { recursive: true });

  const generatorConfig: GeneratorConfig = {
    ...config,
    projectPath,
  };

  // Generate template based on framework
  switch (config.template) {
    case 'react':
      await generateReactTemplate(generatorConfig);
      break;
    case 'nextjs':
      await generateNextJsTemplate(generatorConfig);
      break;
    case 'vite':
      await generateViteTemplate(generatorConfig);
      break;
    default:
      throw new Error(`Unknown template: ${config.template}`);
  }

  // Initialize git if not skipped
  if (!config.skipGit) {
    await initGit(projectPath);
  }
}
