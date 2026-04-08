export default function StatusBadge({ status }: { status: 'active' | 'degraded' | 'offline' }) {
  const colors = {
    active: 'bg-green-100 text-green-800',
    degraded: 'bg-yellow-100 text-yellow-800',
    offline: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${colors[status]}`}>
      {status}
    </span>
  );
}
