"use client";

import { Anchor } from "@/lib/types";
import { useAnchorStatus } from "@/hooks/useAnchorStatus";
import StatusBadge from "./StatusBadge";
import { Globe, Twitter, ArrowUpRight } from "lucide-react";

export default function AnchorCard({ anchor }: { anchor: Anchor }) {
  const { status } = useAnchorStatus(anchor.homeDomain);

  return (
    <div className="group relative bg-[#0A0A0A] border border-gray-800 p-6 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {anchor.name}
            </h3>
            {anchor.verified && (
              <span className="flex items-center justify-center h-4 w-4 bg-blue-500 rounded-full text-[10px] text-white">
                ✓
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 font-medium">{anchor.country}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {anchor.currencies.map((currency) => (
            <span
              key={currency}
              className="px-2 py-1 text-[11px] font-mono font-semibold bg-gray-900 text-gray-300 rounded-md border border-gray-800"
            >
              {currency}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-800/50">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
              Deposit Fee
            </p>
            <p className="text-sm text-white font-mono">{anchor.depositFee}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mb-1">
              Withdraw Fee
            </p>
            <p className="text-sm text-white font-mono">{anchor.withdrawFee}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-3">
            <a
              href={anchor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <Globe className="h-4 w-4" />
            </a>
            {anchor.twitter && (
              <a
                href={`https://twitter.com/${anchor.twitter.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
          </div>
          <button className="flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors group/btn">
            Details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
