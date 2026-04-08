import { Anchor } from '@/lib/types';
import AnchorCard from './AnchorCard';

export default function AnchorGrid({ anchors }: { anchors: Anchor[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {anchors.map(anchor => (
        <AnchorCard key={anchor.id} anchor={anchor} />
      ))}
    </div>
  );
}
