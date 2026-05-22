# GitHub Setup Guide for X-one

Your X-one project is ready for GitHub! Here's how to push it.

## Prerequisites

- A GitHub account
- Git installed on your machine
- The X-one project at `/home/claude/x-one`

## Step 1: Create a Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `x-one`
   - **Description**: `Build modern web projects with zero config`
   - **Public or Private**: Your choice
   - **Initialize with**: Do NOT check any boxes (we already have files)
3. Click "Create repository"

## Step 2: Add Remote and Push

Copy the commands from GitHub (they'll look like this):

```bash
cd /home/claude/x-one
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/x-one.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Using SSH (Recommended)

If you have SSH configured:

```bash
cd /home/claude/x-one
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/x-one.git
git push -u origin main
```

## Step 3: Verify on GitHub

Visit `https://github.com/YOUR_USERNAME/x-one` and you should see all your files!

## Current Project Status

### Commit Information
- **Commit Hash**: b1e71c4
- **Commit Message**: "Initial commit: X-one - Build modern web projects with zero config"
- **Files Committed**: 24
- **Lines of Code**: 1,959
- **Project Size**: ~580 KB

### What's Included

✅ Complete TypeScript CLI application
✅ Three framework templates (React, Next.js, Vite)
✅ Comprehensive documentation
✅ Contributing guidelines
✅ Issue templates
✅ MIT License
✅ ESLint configuration
✅ Git initialized and ready

## Next Steps After Pushing

### 1. Update Links in Documentation

Replace `yourusername` with your actual GitHub username in:
- `README.md` - Links to issues, discussions, etc.
- `CONTRIBUTING.md` - Links to contribution guidelines
- `docs/QUICK_START.md` - Help links

### 2. Set Up GitHub Pages (Optional)

To host documentation:
1. Go to Settings → Pages
2. Select "main" branch as source
3. Choose `/docs` folder
4. Save

### 3. Enable Discussions (Optional)

1. Go to Settings → Features
2. Check "Discussions"
3. Use for community questions

### 4. Create Branch Protection (Recommended)

For main/master branch:
1. Settings → Branches
2. Add rule for "main"
3. Require PR reviews before merging
4. Require status checks to pass

### 5. Set Up GitHub Actions (Optional)

For CI/CD, create `.github/workflows/test.yml`:

```yaml
name: Test

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

### 6. Configure NPM Publishing (Optional)

To publish to npm.js:
1. Create account at https://npmjs.com
2. Run `npm login` locally
3. Run `npm publish` when ready

### 7. Add Topics to Repository

Go to Settings and add topics:
- typescript
- cli
- scaffolding
- vite
- react
- nextjs
- zero-config
- spa

## Useful Git Commands

### View commit log
```bash
cd /home/claude/x-one
git log --oneline
```

### Check remote
```bash
git remote -v
```

### Make changes and commit
```bash
git add .
git commit -m "Your message here"
git push
```

### Create a new branch
```bash
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

## Sharing Your Project

Once on GitHub, you can share:
- Direct link: `https://github.com/YOUR_USERNAME/x-one`
- Raw file links: `https://raw.githubusercontent.com/YOUR_USERNAME/x-one/main/README.md`
- Clone command: `git clone https://github.com/YOUR_USERNAME/x-one.git`

## Commands Reference

### Quick Setup
```bash
cd /home/claude/x-one
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/x-one.git
git push -u origin main
```

### Check Status
```bash
git status
git remote -v
git log --oneline -5
```

### For Future Updates
```bash
git add .
git commit -m "Your message"
git push
```

## Troubleshooting

### Error: "Could not read from remote repository"
- Check your GitHub authentication (SSH keys or personal access tokens)
- Verify the repository URL is correct

### Error: "Updates were rejected"
- Pull the latest changes: `git pull origin main`
- Resolve conflicts if any
- Push again: `git push`

### Wrong Username in Commits?
Configure globally:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Or for this repo only:
```bash
cd /home/claude/x-one
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Need Help?

- GitHub Docs: https://docs.github.com
- Git Docs: https://git-scm.com/doc
- Troubleshooting: https://docs.github.com/en/get-started/using-git

---

**Your X-one project is ready for the world! 🚀**

Once you push to GitHub, update the repository links in your documentation and you're all set!
