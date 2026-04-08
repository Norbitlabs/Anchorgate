"use client";

import { useAnchors } from "@/hooks/useAnchors";
import AnchorGrid from "@/components/AnchorGrid";
import FilterBar from "@/components/FilterBar";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const { anchors } = useAnchors();

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Anchorgate</h1>
          <p className="text-lg text-gray-600">
            A community-maintained explorer for Stellar Anchors, browse,
            compare, and monitor fiat on/off ramps.
          </p>
        </header>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchInput />
            </div>
            <FilterBar />
          </div>

          <div className="bg-black p-6 rounded-xl shadow-sm border border-gray-700">
            <h2 className="text-xl font-semibold mb-6">Anchor Directory</h2>
            <AnchorGrid anchors={anchors} />
          </div>
        </section>
      </div>
    </main>
  );
}
