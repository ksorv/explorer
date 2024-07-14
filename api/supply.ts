import { lamportsToSol } from '@/utils/convert';
import { clusterApiUrl, Connection } from '@solana/web3.js';

const rpc = process.env.RPC_URL || '';

export async function getSupply() {
  let url = rpc;
  if (!url) {
    url = clusterApiUrl('devnet').replace('api', 'explorer-api');
  }

  const connection = new Connection(url, 'finalized');

  const supply = await connection.getSupply();

  const { circulating, nonCirculating, total } = supply.value;

  return {
    circulating: lamportsToSol(circulating),
    nonCirculating: lamportsToSol(nonCirculating),
    total: lamportsToSol(total),
  };
}
