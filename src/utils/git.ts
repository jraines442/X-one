import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

export async function initGit(projectPath: string): Promise<void> {
  try {
    // Check if git is available
    if (!isGitAvailable()) {
      return;
    }

    // Check if already a git repo
    if (existsSync(join(projectPath, '.git'))) {
      return;
    }

    // Initialize git repo
    execSync('git init', { cwd: projectPath, stdio: 'pipe' });
    execSync('git add .', { cwd: projectPath, stdio: 'pipe' });
    execSync('git commit -m "Initial commit from X-one"', {
      cwd: projectPath,
      stdio: 'pipe',
    });
  } catch (error) {
    // Silently fail if git is not available or initialization fails
  }
}

function isGitAvailable(): boolean {
  try {
    execSync('git --version', { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}
