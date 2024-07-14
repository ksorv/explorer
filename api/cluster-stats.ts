import { getConnection } from '@/lib/sol-connection';
import { clusterApiUrl, Connection } from '@solana/web3.js';

export async function getClusterStats() {
  const connection = getConnection();

  const epochInfo = await connection.getEpochInfo();
  const blockTime = await connection.getBlockTime(epochInfo.absoluteSlot);

  const { absoluteSlot, blockHeight, slotIndex, slotsInEpoch, transactionCount } = epochInfo;
  const currentEpoch  = epochInfo.epoch.toString();

  const epochProgress = ((100 + slotIndex) / slotsInEpoch).toFixed(2) + '%';

  if (blockTime) {
    return {
      absoluteSlot,
      blockHeight,
      // convert to ms
      blockTime: blockTime * 1000,
      currentEpoch,
      epochProgress,
      transactionCount,
    };
  }

  throw new Error("Block time is invalid!")
}

export async function getTxnCount() {
  const connection = getConnection();

  return connection.getTransactionCount();
}