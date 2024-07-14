import { getStakes } from '@/api/stakes';
import { getClusterStats, getTxnCount } from '@/api/cluster-stats';
import { getPerformanceSamples } from '@/api/history';
import { getSupply } from '@/api/supply';
import { Search } from '@/components/search/search';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { formatSupply } from '@/utils/format';

export default async function StatsPage() {
  const [
    { activeStake, delinquentStakePer },
    { circulating, total },
    {
      absoluteSlot,
      blockHeight = 0,
      blockTime,
      currentEpoch,
      epochProgress,
      transactionCount = 0,
    },
    { avgTps },
  ] = await Promise.all([
    getStakes(),
    getSupply(),
    getClusterStats(),
    getPerformanceSamples(),
  ]);

  return (
    <main className='py-6 px-4 md:p-8 space-y-4 max-w-[1120px] mx-auto'>
      <Search />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardContent className='p-6'>
            <CardDescription>Circulating Supply</CardDescription>
            <CardTitle className='text-2xl font-bold py-2'>
              <span className='text-green-600'>
                {formatSupply(circulating)}M
              </span>{' '}
              / {formatSupply(total)}M
            </CardTitle>
            <p>
              <span className='text-green-600'>
                {((circulating * 100) / total).toFixed(2)}%
              </span>{' '}
              is circulating
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='p-6'>
            <CardDescription>Active Stake</CardDescription>
            <CardTitle className='text-2xl font-bold  py-2'>
              <span className='text-green-600'>
                {formatSupply(activeStake)}M
              </span>{' '}
              / {formatSupply(total)}M
            </CardTitle>
            <p>
              Delinquent stake:{' '}
              <span className='text-green-600'>
                {delinquentStakePer.toFixed(2)}%
              </span>
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className='text-md'>
        <CardHeader className='border-b'>
          <CardDescription className='text-base'>
            Live Cluster Stats
          </CardDescription>
        </CardHeader>
        <CardContent className='p-0 py-2'>
          <div className='space-y-2 divide-y'>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Slot</p>
              <p>{absoluteSlot.toLocaleString('en-US')}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Block height</p>
              <p>{blockHeight.toLocaleString('en-US')}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Cluster time</p>
              <p>
                {new Date(blockTime).toLocaleString('en-US', {
                  timeZoneName: 'short',
                })}
              </p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Epoch</p>
              <p>{currentEpoch}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Epoch progress</p>
              <p>{epochProgress}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className='text-md'>
        <CardHeader className='border-b'>
          <CardDescription className='text-base'>
            Live Transaction Stats
          </CardDescription>
        </CardHeader>
        <CardContent className='p-0 py-2'>
          <div className='space-y-2 divide-y'>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Transaction count</p>
              <p>{transactionCount.toLocaleString('en-US')}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Transactions per second (TPS)</p>
              <p>{avgTps.toFixed(2)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
