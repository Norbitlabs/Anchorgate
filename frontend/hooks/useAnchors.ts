import { useState, useEffect } from 'react';
import { Anchor } from '@/lib/types';
import anchorsData from '@/data/anchors.json';

export const useAnchors = () => {
  const [anchors, setAnchors] = useState<Anchor[]>([]);

  useEffect(() => {
    setAnchors(anchorsData as Anchor[]);
  }, []);

  return { anchors };
};
