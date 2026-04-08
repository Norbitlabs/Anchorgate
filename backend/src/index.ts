import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { StellarToml } from 'stellar-sdk';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'active', timestamp: new Date().toISOString() });
});

// Anchor status polling endpoint with timeout protection
app.get('/api/poll', async (req: Request, res: Response) => {
  const { domain } = req.query;

  if (!domain || typeof domain !== 'string') {
    return res.status(400).json({ error: 'Domain parameter is required' });
  }

  // Use a promise race to implement a 5-second timeout
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('TIMEOUT')), 5000)
  );

  try {
    await Promise.race([
      StellarToml.Resolver.resolve(domain),
      timeout
    ]);
    res.json({ status: 'active', domain });
  } catch (error: any) {
    console.error(`Status check failed for ${domain}:`, error.message);
    
    if (error.message === 'TIMEOUT') {
      res.json({ status: 'offline', domain, error: 'Connection timed out' });
    } else {
      res.json({ status: 'offline', domain, error: 'Could not resolve stellar.toml' });
    }
  }
});

// App startup
app.listen(PORT, () => {
  console.log(`🚀 Anchorgate Backend running on http://localhost:${PORT}`);
});
