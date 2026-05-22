#!/bin/bash
# X-ONE GITHUB PUSH SCRIPT - Copy and customize this!

# ============================================================================
# STEP 1: Create repository on GitHub
# ============================================================================
# 1. Go to: https://github.com/new
# 2. Repository name: x-one
# 3. Description: Build modern web projects with zero config
# 4. Public or Private: Choose one
# 5. Do NOT initialize with files (we already have them)
# 6. Click "Create repository"

# ============================================================================
# STEP 2: Configure remote and push (CUSTOMIZE YOUR USERNAME!)
# ============================================================================

# Using HTTPS (easier, but requires token for private repos)
cd /home/claude/x-one
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/x-one.git
git push -u origin main

# OR using SSH (recommended if you have SSH keys set up)
# cd /home/claude/x-one
# git branch -M main
# git remote add origin git@github.com:YOUR_USERNAME/x-one.git
# git push -u origin main

# ============================================================================
# STEP 3: Verify success
# ============================================================================
# Visit: https://github.com/YOUR_USERNAME/x-one
# You should see all your files!

# ============================================================================
# OPTIONAL: Configure as default remote tracking
# ============================================================================
# git branch --set-upstream-to=origin/main main

# ============================================================================
# FUTURE COMMITS (after initial push)
# ============================================================================
# git add .
# git commit -m "Your message"
# git push

echo "✅ Instructions created!"
echo ""
echo "Replace YOUR_USERNAME with your GitHub username and run the commands above."
