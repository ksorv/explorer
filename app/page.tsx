import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Component() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card>
          <CardContent className='p-6'>
            <CardDescription>Circulating Supply</CardDescription>
            <CardTitle className='text-2xl font-bold py-2'>
              <span className='text-green-600'>464.1M</span> / 580.1M
            </CardTitle>
            <p>
              <span className='text-green-600'>80.0%</span> is circulating
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='p-6'>
            <CardDescription>Active Stake</CardDescription>
            <CardTitle className='text-2xl font-bold  py-2'>
              <span className='text-green-600'>377.5M</span> / 580.1M
            </CardTitle>
            <p>
              Delinquent stake: <span className='text-green-600'>0.1%</span>
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
              <p>277,510,378</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Block height</p>
              <p>256,799,581</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Cluster time</p>
              <p>Jul 14, 2024 at 13:55:11</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Slot time (1min average)</p>
              <p>488ms</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Slot time (1hr average)</p>
              <p>465ms</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Epoch</p>
              <p>642</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Epoch progress</p>
              <p>38.5%</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Epoch time remaining (approx.)</p>
              <p>~1d 10h 19m</p>
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
              <p>303,623,109,612</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Transactions per second (TPS)</p>
              <p>3,342</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <h3 className='text-md font-semibold'>TPS history</h3>
              {/* <LinechartChart className='w-full h-[200px]' /> */}
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <h3 className='text-md font-semibold'>Average Ping Time</h3>
              {/* <LinechartChart className='w-full h-[200px]' /> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
