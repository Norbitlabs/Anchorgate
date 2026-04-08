export type Region = 
  | "West Africa" 
  | "East Africa" 
  | "Latin America" 
  | "Europe" 
  | "North America" 
  | "Asia";

export interface Anchor {
  id: string;                     // Unique slug e.g. "cowrie-exchange"
  name: string;
  country: string;
  region: Region;                 // "West Africa" | "East Africa" | "Latin America" | ...
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
