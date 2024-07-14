import { lamportsToSol } from '@/utils/convert';
import { clusterApiUrl, Connection } from '@solana/web3.js';

const rpc = process.env.RPC_URL || '';

export async function getStakes() {
  let url = rpc;
  if (!url) {
    url = clusterApiUrl('devnet').replace('api', 'explorer-api');
  }

  const connection = new Connection(url, 'finalized');

  const { current, delinquent } = await connection.getVoteAccounts();

  const delinquentStake = delinquent.reduce(
    (sum, acc) => (sum += acc.activatedStake),
    0
  );

  const activeStake = current.reduce(
    (sum, acc) => (sum += acc.activatedStake),
    delinquentStake
  );

  return {
    activeStake: lamportsToSol(activeStake),
    delinquentStake: lamportsToSol(delinquentStake),
    delinquentStakePer: (delinquentStake * 100) / activeStake,
  };
}
