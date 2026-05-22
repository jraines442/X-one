export type FrameworkType = 'react' | 'nextjs' | 'vite';

export interface ProjectConfig {
  name: string;
  template: FrameworkType;
  typescript: boolean;
  skipGit: boolean;
}

export interface GeneratorConfig extends ProjectConfig {
  projectPath: string;
}

export interface TemplateMetadata {
  name: string;
  description: string;
  framework: FrameworkType;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
}
