# Contributing to X-one

Thank you for your interest in contributing to X-one! We welcome contributions of all kinds, including bug reports, feature requests, documentation improvements, and code contributions.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps which reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed after following the steps**
- **Explain which behavior you expected to see instead and why**
- **Include screenshots and animated GIFs if possible**
- **Include your environment details** (OS, Node version, npm version, X-one version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior** and **the expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Fill in the required template
- Follow the TypeScript styleguides
- Include appropriate test cases
- End all files with a newline
- Update documentation as needed

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/yourusername/x-one.git
   cd x-one
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Make your changes and test them:
   ```bash
   npm run build
   npm test
   ```

6. Commit your changes:
   ```bash
   git commit -m "Add your commit message"
   ```

7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a Pull Request

## Styleguides

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### TypeScript Styleguide

- Use `const` by default, `let` when needed, avoid `var`
- Use TypeScript types extensively
- Run `npm run lint` before submitting

### Documentation Styleguide

- Use Markdown
- Use code blocks for examples
- Keep line length to 80 characters or less
- Use clear, concise language

## Project Structure

```
x-one/
├── src/
│   ├── cli/           # CLI commands
│   ├── generators/    # Project generation logic
│   │   └── templates/ # Framework templates
│   ├── utils/         # Utility functions
│   └── index.ts       # Main export
├── dist/              # Compiled output
├── docs/              # Documentation
└── tests/             # Test files
```

## Testing

- Write tests for new features
- Ensure all tests pass before submitting a PR
- Run tests with `npm test`

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested
- `wontfix` - This will not be worked on

## Questions?

Feel free to open an issue with the `question` label or start a discussion. Our community is here to help!

---

Thank you for contributing to X-one! 🚀
