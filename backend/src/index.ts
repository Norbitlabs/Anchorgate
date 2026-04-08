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

// Anchor status polling endpoint (placeholder)
app.get('/api/poll', async (req: Request, res: Response) => {
  const { domain } = req.query;

  if (!domain || typeof domain !== 'string') {
    return res.status(400).json({ error: 'Domain parameter is required' });
  }

  try {
    // Simple health check by resolving TOML
    await StellarToml.Resolver.resolve(domain);
    res.json({ status: 'active', domain });
  } catch (error) {
    res.json({ status: 'offline', domain, error: 'Could not resolve stellar.toml' });
  }
});

// App startup
app.listen(PORT, () => {
  console.log(`🚀 Anchorgate Backend running on http://localhost:${PORT}`);
});
