import 'server-only';

import { getConnection } from '@/lib/sol-connection';

export async function getPerformanceSamples(hours = 1) {
  const connection = getConnection();

  const samples = await connection.getRecentPerformanceSamples(60 * hours);

  const filtered = samples.filter((s) => !!s.numTransactions);

  const avgTpsSum = filtered.reduce(
    (sum, sample) => sum + sample.numTransactions / sample.samplePeriodSecs,
    0
  );

  const avgTps = avgTpsSum / filtered.length;

  return {
    samples: filtered,
    avgTps,
  };
}
