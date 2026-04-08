# Anchorgate 🌍

> A community-maintained explorer for Stellar Anchors — browse, compare, and monitor fiat on/off ramps across the Stellar network.

[![Built on Stellar](https://img.shields.io/badge/Built%20on-Stellar-1D9E75?style=flat-square)](https://stellar.org)
[![Open Source](https://img.shields.io/badge/Open%20Source-MIT-blue?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](./CONTRIBUTING.md)

---

## What is Anchorgate?

Anchors are the bridges between fiat money and the Stellar blockchain. They hold real currency and issue equivalent tokens on-chain. Anchorgate makes it easy to:

- **Discover** Anchors by country, currency, or supported SEP standard
- **Compare** fees, KYC requirements, and supported assets
- **Monitor** Anchor health via SEP-1 polling (active / degraded / offline)
- **Contribute** by submitting new Anchors via pull request

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js 15 (App Router) + TypeScript + Tailwind CSS |
| **Backend** | Node.js + Express + TypeScript |
| **Contracts** | Soroban (Rust) |
| **Blockchain** | Stellar Horizon API + @stellar/stellar-sdk |
| **Data** | Static JSON (`/frontend/data/anchors.json`) |

---

## Project Structure

```
anchorgate/
├── frontend/             # Next.js Application
│   ├── app/              # App Router pages
│   ├── components/       # UI Components
│   ├── hooks/            # Custom React Hooks
│   ├── lib/              # Frontend utilities
│   └── data/             # Anchor data (anchors.json)
├── backend/              # Express API Service
│   ├── src/              # Server logic
│   └── dist/             # Compiled JS
├── contracts/            # Soroban Smart Contracts
│   └── src/              # Rust contract code
└── .github/              # Issue & PR Templates
```

---

## Development Setup

You can manage the entire project from the root directory using the following commands:

### Prerequisites
- Node.js & npm
- Rust & Cargo (for contracts)

### Installation
```bash
# Install all dependencies
npm install
cd frontend && npm install
cd ../backend && npm install
```

### Running Services
```bash
# Start the Frontend (http://localhost:3000)
npm run dev

# Start the Backend (http://localhost:3001)
npm run backend

# Build the Smart Contracts (to Wasm)
npm run contract:build
```

---

## Contributing

We love contributions! Whether you're adding a new anchor or fixing a bug, please check our **[Contributing Guide](./CONTRIBUTING.md)** first.

### Adding an Anchor
1. Fork the repo.
2. Add your anchor to `frontend/data/anchors.json`.
3. Open a PR with the title `feat: add [Anchor Name]`.

---

## Roadmap

- [x] Static anchor directory with filtering
- [x] Multi-layer architecture (Frontend, Backend, Contracts)
- [ ] SEP-1 TOML live health polling
- [ ] Anchor detail pages with full asset list
- [ ] Side-by-side anchor comparison
- [ ] Fee calculator (send X NGN → receive Y KES)
- [ ] Anchor submission form (no-code)

---

## License

MIT — free to use, fork, and build on.

---

Built with ❤️ for the Stellar ecosystem
