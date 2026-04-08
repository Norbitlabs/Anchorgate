import { useState, useEffect } from 'react';

export type AnchorStatus = 'active' | 'degraded' | 'offline' | 'pending';

export const useAnchorStatus = (domain: string) => {
  const [status, setStatus] = useState<AnchorStatus>('pending');

  useEffect(() => {
    const fetchStatus = async () => {
      if (!domain) {
        setStatus('offline');
        return;
      }

      setStatus('pending');
      try {
        const response = await fetch(`http://localhost:3001/api/poll?domain=${domain}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStatus(data.status);
      } catch (error) {
        console.error(`Failed to poll status for ${domain}:`, error);
        setStatus('offline');
      }
    };

    fetchStatus();
    
    // Optional: Refresh status every 5 minutes
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [domain]);

  return { status };
};
