import { Anchor } from "@/lib/types";

export default function AnchorCard({ anchor }: { anchor: Anchor }) {
  return (
    <div className="p-4 border border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold">{anchor.name}</h3>
      <p className="text-sm text-gray-500">{anchor.country}</p>
      <div className="mt-2 flex gap-2">
        {anchor.seps.map((sep) => (
          <span
            key={sep}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded"
          >
            {sep}
          </span>
        ))}
      </div>
    </div>
  );
}
