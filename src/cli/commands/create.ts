import { Command } from 'commander';
import { prompt } from 'enquirer';
import chalk from 'chalk';
import ora from 'ora';
import { createProject } from '../generators/projectGenerator.js';
import type { FrameworkType } from '../generators/types.js';

export const createCommand = new Command()
  .name('create')
  .argument('[projectName]', 'Name of the project')
  .description('Create a new X-one project')
  .option('-t, --template <template>', 'Template to use (react, nextjs, vite)')
  .option('--typescript', 'Use TypeScript (default: true)', true)
  .option('--skip-git', 'Skip git initialization')
  .action(async (projectName: string | undefined, options) => {
    try {
      let name = projectName;

      // Prompt for project name if not provided
      if (!name) {
        const answers = await prompt<{ projectName: string }>({
          type: 'input',
          name: 'projectName',
          message: 'What is your project name?',
          initial: 'my-app',
        });
        name = answers.projectName;
      }

      // Prompt for template if not provided
      let template: FrameworkType = (options.template as FrameworkType) || 'react';
      if (!options.template) {
        const answers = await prompt<{ template: FrameworkType }>({
          type: 'select',
          name: 'template',
          message: 'Which framework would you like to use?',
          choices: [
            { name: 'react', message: '⚛️  React (Vite)' },
            { name: 'nextjs', message: '▲ Next.js' },
            { name: 'vite', message: '⚡ Vanilla TypeScript (Vite)' },
          ],
        });
        template = answers.template;
      }

      const spinner = ora('Creating your project...').start();

      await createProject({
        name,
        template,
        typescript: options.typescript,
        skipGit: options.skipGit,
      });

      spinner.succeed(
        chalk.green.bold(`✓ Project created successfully!\n`)
      );

      console.log(chalk.gray('Next steps:\n'));
      console.log(chalk.cyan(`  cd ${name}`));
      console.log(chalk.cyan(`  npm install`));
      console.log(chalk.cyan(`  npm run dev\n`));
      console.log(chalk.gray('Happy coding! 🚀\n'));
    } catch (error) {
      console.error(chalk.red('Error creating project:'), error);
      process.exit(1);
    }
  });
