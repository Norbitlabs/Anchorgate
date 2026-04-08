# Contributing to Anchorgate 🌍

Thank you for your interest in contributing to Anchorgate! We welcome contributions of all kinds, from adding new anchors to improving the frontend, backend, or smart contracts.

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18 or newer
- **npm**: v9 or newer
- **Rust**: Latest stable version (for smart contracts)

### 2. Project Architecture
The project is organized into three main modules:
- `/frontend`: Next.js 14 App Router application.
- `/backend`: Express + TypeScript API service.
- `/contracts`: Soroban (Rust) smart contracts.

### 3. Installation
Clone the repository and install dependencies for all modules:

```bash
# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

---

## 🛠️ Contribution Workflows

### Adding a New Anchor
The easiest way to contribute is by adding a new Stellar Anchor to our community-maintained directory.

1. Fork the repository.
2. Navigate to `frontend/data/anchors.json`.
3. Add a new entry following the schema below:

```json
{
  "id": "slug-name",
  "name": "Anchor Name",
  "country": "Country",
  "region": "Region",
  "currencies": ["USD", "NGN"],
  "seps": ["SEP-6", "SEP-24"],
  "homeDomain": "example.com",
  "depositFee": "0.5%",
  "withdrawFee": "1.0%",
  "minDeposit": 10,
  "kycRequired": true,
  "website": "https://example.com",
  "verified": false
}
```

4. Open a Pull Request with the title `feat: add [Anchor Name]`.

### Technical Contributions
For code changes:
1. Create a new branch: `git checkout -b feature/your-feature-name`.
2. Make your changes and ensure they follow the project's coding standards.
3. Verify your changes locally (see "Local Development").
4. Commit your changes: `git commit -m "feat: your feature description"`.
5. Push to your fork and submit a PR.

---

## 💻 Local Development

### Running the Frontend
```bash
cd frontend
npm run dev
```

### Running the Backend
```bash
cd backend
npm run dev
```

### Building Smart Contracts
```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

---

## 📜 Pull Request Guidelines
- **Small PRs**: We prefer smaller, focused PRs over large, sweeping changes.
- **Documentation**: If you're adding a feature, please update the relevant documentation.
- **Testing**: Ensure that your changes don't break existing functionality.

## ⚖️ Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).
