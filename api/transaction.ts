import 'server-only';

import { getConnection } from '@/lib/sol-connection';

export async function getTxn(id: string) {
  const connection = getConnection();

  const { value } = await connection.getSignatureStatus(
    id,
    {
      searchTransactionHistory: true
    }
  );

  if (!value) {
    throw new Error("The signature does not exist");
  }

  const blockTime = await connection.getBlockTime(value.slot);

  return {
    status: value.confirmationStatus,
    confirmations: value.confirmations || 'max',
    timestamp: blockTime ? blockTime * 1000 : "N/A",
    result: { err: value.err },
    slot: value.slot
  };
}
