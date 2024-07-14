import 'server-only';

import { lamportsToSol } from '@/utils/convert';
import { getConnection } from '@/lib/sol-connection';

export async function getSupply() {
 const connection = getConnection();

  const supply = await connection.getSupply();

  const { circulating, nonCirculating, total } = supply.value;

  return {
    circulating: lamportsToSol(circulating),
    nonCirculating: lamportsToSol(nonCirculating),
    total: lamportsToSol(total),
  };
}
