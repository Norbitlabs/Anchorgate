import { AnchorStatus } from "@/hooks/useAnchorStatus";

export default function StatusBadge({ status }: { status: AnchorStatus }) {
  const colors = {
    active: "bg-green-950/30 text-green-400 border-green-800/50",
    degraded: "bg-yellow-950/30 text-yellow-400 border-yellow-800/50",
    offline: "bg-red-950/30 text-red-400 border-red-800/50",
    pending: "bg-gray-900 text-gray-500 border-gray-800 animate-pulse",
  };

  const dotColors = {
    active: "bg-green-500",
    degraded: "bg-yellow-500",
    offline: "bg-red-500",
    pending: "bg-gray-600",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border ${colors[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 mr-1.5 rounded-full ${dotColors[status]} ${
          status === "active" ? "shadow-[0_0_8px_rgba(34,197,94,0.6)]" : ""
        }`}
      />
      {status}
    </span>
  );
}
