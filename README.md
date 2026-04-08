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
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Blockchain | Stellar Horizon API + stellar-sdk |
| Data | Static JSON (`/data/anchors.json`) |
| SEP Polling | Edge functions (Vercel) |
| Testing | Vitest + Playwright |

---

## Project Structure

```
anchorgate/
├── app/
│   ├── page.tsx                  # Home — anchor directory
│   ├── anchor/[id]/page.tsx      # Anchor detail page
│   ├── compare/page.tsx          # Side-by-side comparison
│   └── layout.tsx
├── components/
│   ├── AnchorCard.tsx
│   ├── AnchorGrid.tsx
│   ├── FilterBar.tsx
│   ├── StatusBadge.tsx
│   └── SearchInput.tsx
├── data/
│   └── anchors.json              # Community-maintained anchor data
├── lib/
│   ├── stellar.ts                # Horizon API helpers
│   ├── sep1.ts                   # SEP-1 TOML parser
│   └── types.ts                  # Shared TypeScript types
├── hooks/
│   ├── useAnchors.ts
│   └── useAnchorStatus.ts
└── public/
```

---

## Anchor Data Schema

Each anchor entry in `data/anchors.json` follows this shape:

```ts
{
  id: string;                     // Unique slug e.g. "cowrie-exchange"
  name: string;
  country: string;
  region: string;                 // "West Africa" | "East Africa" | "Latin America" | ...
  currencies: string[];           // e.g. ["NGN", "USDC"]
  seps: string[];                 // ["SEP-6", "SEP-24", "SEP-31"]
  homeDomain: string;             // For SEP-1 TOML polling
  depositFee: string;             // e.g. "0.5%"
  withdrawFee: string;
  minDeposit: number | null;
  kycRequired: boolean;
  website: string;
  twitter?: string;
  verified: boolean;              // Verified by a maintainer
}
```

---

## Contributing

### Adding an Anchor

1. Fork the repo
2. Add your anchor to `data/anchors.json` following the schema above
3. Open a PR with the title `feat: add [Anchor Name]`
4. A maintainer will verify the SEP-1 TOML and merge

### Development Setup

```bash
git clone https://github.com/YOUR_ORG/anchorgate
cd anchorgate
npm install
npm run dev
```

---

## Roadmap

- [x] Static anchor directory with filtering
- [x] SEP standard badges
- [ ] SEP-1 TOML live health polling
- [ ] Anchor detail pages with full asset list
- [ ] Side-by-side anchor comparison
- [ ] Fee calculator (send X NGN → receive Y KES)
- [ ] Anchor submission form (no-code)
- [ ] Email/webhook alerts for Anchor downtime
- [ ] Africa region leaderboard by liquidity

---

## License

MIT — free to use, fork, and build on.

---

## Built with ❤️ for the Stellar ecosystem
