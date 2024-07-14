import 'server-only';

import { getConnection } from '@/lib/sol-connection';
import { PublicKey } from '@solana/web3.js';

export async function getAccount(id: string) {
  const connection = getConnection();
  const pub = new PublicKey(id);

  const { value } = await connection.getParsedAccountInfo(pub);

  if (!value) {
    throw new Error('The signature does not exist');
  }

  const { lamports, data, executable, owner } = value;
  if ('parsed' in data) {
    return {
      space: data.space,
      executable: executable,
      owner: owner.toBase58(),
      program: data.program,
      parsed: data.parsed,
      pubKey: pub.toBase58(),
      lamports,
    };
  } else {
    return {
      space: data.length,
      executable: executable,
      owner: owner.toBase58(),
      pubKey: pub.toBase58(),
      lamports,
    };
  }
}

export async function getAccountHistory(id: string) {
  const connection = getConnection();
  const pub = new PublicKey(id);

  const signatures = await connection.getSignaturesForAddress(pub, {
    limit: 25
  });

  return signatures;
}
