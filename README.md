# Magic2U-Design-System
final draft

<div align="center">

<img src="apps/demo-app/public/logo.svg" alt="Magic2U Logo" width="72" height="72" />

# Magic2U Design System

**Enterprise-grade design infrastructure — tokens, components, observability, and governance at scale.**

[![CI](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/ci.yml/badge.svg)](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/ci.yml)
[![Accessibility Check](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/accessibility-check.yml/badge.svg)](https://github.com/healthearth/Magic2U-Design-System/actions/workflows/accessibility-check.yml)
[![Release](https://img.shields.io/badge/version-0.1.0--beta-3BFFC8?style=flat-square&logo=npm)](https://github.com/healthearth/Magic2U-Design-System/releases)
[![License: Apache2.0](https://img.shields.io/badge/license-Apache2.0-63C4FF?style=flat-square)](./LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-workspace-orange?style=flat-square&logo=pnpm)](https://pnpm.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

[Live Showcase →](https://healthearth.github.io/Magic2U-Design-System) · [View Roadmap](./ROADMAP.md) · [Report a Bug](./.github/ISSUE_TEMPLATE/bug_report.yml) · [Propose a Component](./.github/ISSUE_TEMPLATE/design-system-proposal.yml)

</div>

---

## What Is Magic2U Design System?

Magic2U DS is a production-ready cloud based design system platform built to serve enterprise-scale healthcare digital products. It is not just a component library — it is a **full-stack design infrastructure** that unifies token governance, multi-theme architecture, accessibility automation, component telemetry, and performance observability across every team and surface that touches the product.

Built for the scale of organizations serving **51 million+ members**, Magic2U DS reduces engineering duplication, enforces consistent UX, and gives leadership real data on design system adoption and ROI.

---

## Monorepo Structure

```
Magic2U-Design-System/
├── apps/                     # Deployable applications
│   └── demo-app/             # Enterprise metrics & component showcase
├── packages/                 # Shared, published libraries
│   ├── ui/                   # React component library
│   ├── tokens/               # Design token JSON + CSS variables
│   └── web-components/       # Shadow DOM Web Components
├── tooling/                  # Internal dev tools & scripts
│   ├── style-dictionary/     # Token transformation pipeline
│   ├── eslint-config/        # Shared ESLint rules
│   └── tsconfig/             # Shared TypeScript configs
├── public/                   # Static assets & generated metrics
├── .github/                  # Workflows, issue templates, PR templates
└── .changeset/               # Versioning & changelog config
```

> Each directory has its own README. Navigate to any folder for detailed documentation.

---

## Who is this process for? 

> Companies without design systems yet and may include teams with multiple digital products and inconsistent UI that seek governance, speed, and consistency.

## Quick Start

### Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | ≥ 18.x | [nodejs.org](https://nodejs.org) |
| pnpm | ≥ 8.x | `npm install -g pnpm` |
| Git | ≥ 2.x | [git-scm.com](https://git-scm.com) |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/healthearth/Magic2U-Design-System.git
cd Magic2U-Design-System

# 2. Install all workspace dependencies
pnpm install

# 3. Build all packages
pnpm build

# 4. Start the demo app locally
pnpm --filter demo-app dev
```

Open [http://localhost:5173](http://localhost:5173) to see the enterprise dashboard running live.

### Using Components in Your App

```bash
# Install the UI package
pnpm add magic2u-design-system
```

```tsx
import 'magic2u-design-system/ui/styles/reset.css';
import 'magic2u-design-system/ui/styles/base.css';
import { Button, Card, StatCard } from 'magic2u-design-system/ui/react';

export function MyPage() {
  return (
    <Card>
      <StatCard label="Members" value="51M" trend="up" delta="+3.2%" />
      <Button variant="primary" onClick={() => {}}>
        Get Started
      </Button>
    </Card>
  );
}
```

---

## System at a Glance

| Metric | Value |
|--------|-------|
| 👥 Members Covered | 51,000,000 |
| 📱 Digital Users | 32,000,000 |
| ⏱ Engineering Hours Saved | 240,000 hrs |
| 💰 Estimated Engineering Savings | $7,200,000 |
| ✅ CI/CD Pipelines | 4 active workflows |
| 📋 Governance Templates | 6 (3 issue + 1 PR + CODEOWNERS + changesets) |

---

## Core Pillars

### 🎨 Token-Driven Design
Every visual decision — color, spacing, border radius, typography, shadow — is a design token. Tokens are defined once in JSON, transformed by Style Dictionary, and consumed as CSS custom properties, JS constants, or platform-native values. Change a token; everything updates in sync.

### ⚛️ React Component Library
A typed, accessible, tree-shakeable React 18 component library. Every component is built against the token system, documented in Storybook, and tested for WCAG 2.1 AA compliance before merge.

### 🌐 Web Components (Shadow DOM)
Framework-agnostic Web Components built with Shadow DOM allow any tech stack — Vue, Angular, plain HTML, legacy CMS — to consume the design system without adopting React.

### 📡 Telemetry & Observability
The `useTelemetry` and `useMetrics` hooks give teams real-time insight into component render performance, adoption rates per team, and error surfaces. Data is aggregated into the enterprise metrics dashboard.

### ♿ Accessibility Automation
Every PR triggers an automated accessibility check workflow. The PR checklist enforces manual a11y review before merge. Accessibility score targets are tracked as a first-class metric.

### 🔐 Governance at Scale
Structured issue templates (bug, feature, design proposal), PR checklists, CODEOWNERS, and Changeset-based semantic versioning ensure that contributions from any team member follow the same process.

---

## Roadmap

| Phase | Status | Focus |
|-------|--------|-------|
| Phase 1 — Foundation | ✅ Complete | Monorepo, tokens, React library, Web Components, Storybook, CI |
| Phase 2 — Observability | 🔄 In Progress | Telemetry hooks, metrics dashboard, a11y automation, adoption tracking |
| Phase 3 — Intelligence | 🗓 Planned | ROI calculator, forecast modeling, bundle size governance |
| Phase 4 — Hardening | 🗓 Planned | Versioned releases, performance regression CI, plugin architecture |
| Long-Term | 🔭 Vision | Vue/Angular adapters, token registry, enterprise SaaS analytics |

[View the full ROADMAP →](./ROADMAP.md)

---

## Sub-Directory Documentation

| Directory | Description |
|-----------|-------------|
| [`apps/`](./apps/README.md) | Deployable applications — demo app, Storybook, metrics site |
| [`packages/`](./packages/README.md) | Published npm packages — UI, tokens, web components |
| [`tooling/`](./tooling/README.md) | Internal build tooling — Style Dictionary, ESLint, TypeScript configs |
| [`public/`](./public/README.md) | Static assets and generated metrics output |
| [`.github/`](./.github/README.md) | CI/CD workflows, issue templates, PR standards |
| [`.changeset/`](./.changeset/README.md) | Semantic versioning, changelog generation, release process |

---

## Contributing

We welcome contributions from any team member. Before opening a PR, please:

1. Read the relevant sub-directory README for the area you're modifying
2. Use the appropriate issue template to describe your change
3. Follow the PR checklist — tests, Storybook, a11y, and documentation are all required
4. Assign the CODEOWNERS group `@healthearth` for review

```bash
# Create a new changeset before your PR
pnpm changeset

# Verify your change builds and tests pass
pnpm build && pnpm test && pnpm lint
```

[Open a Bug Report](./.github/ISSUE_TEMPLATE/bug_report.yml) · [Request a Feature](./.github/ISSUE_TEMPLATE/feature_request.yml) · [Propose a Component](./.github/ISSUE_TEMPLATE/design-system-proposal.yml)

---

## License

[MIT](./LICENSE) © HealthEarth / Magic2U — Built with intent for enterprise scale.
