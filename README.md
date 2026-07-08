# Mini Counter — Full CI/CD Demo

A deliberately tiny app used to demonstrate a complete CI/CD pipeline:
unit-tested logic → GitHub Actions → auto-deployed live site.

## Live app
https://<your-username>.github.io/mini-counter-cicd/

## Tech Stack
- Vanilla HTML/CSS/JS (no framework, kept intentionally simple)
- Jest (unit tests for counter logic)
- GitHub Actions (CI test job + CD deploy job)
- GitHub Pages (hosting)

## Project Structure
```
├── src/            # the actual deployed app
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── counter.js  # pure logic, unit tested
├── tests/
│   └── counter.test.js
└── .github/workflows/ci-cd.yml
```

## Pipeline stages
1. **ci-test** — installs dependencies, runs Jest unit tests
2. **cd-deploy** — only runs if ci-test passes; publishes `src/` to GitHub Pages

## Run locally
```bash
npm install
npm test
```

## Why this project
Demonstrates the difference between CI (verifying code is correct) and CD
(automatically shipping it) using a `needs:` dependency between two GitHub
Actions jobs — the deploy job cannot run unless the test job succeeds first.
