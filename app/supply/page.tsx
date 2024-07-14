import { getSupply } from '@/api/supply';
import { Search } from '@/components/search/search';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';

export default async function SupplyPage() {
  const [{ circulating, total, nonCirculating }] = await Promise.all([getSupply()]);

  return (
    <main className='py-6 px-4 md:p-8 space-y-4 max-w-[1120px] mx-auto'>
      <Search />
      <Card className='text-md'>
        <CardHeader className='border-b'>
          <CardDescription className='text-base'>
            Supply Overview
          </CardDescription>
        </CardHeader>
        <CardContent className='p-0 py-2'>
          <div className='space-y-2 divide-y'>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Total Supply (SOL)</p>
              <p>{total.toLocaleString('en-US')}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Circulating Supply (SOL)</p>
              <p>{circulating.toLocaleString('en-US')}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Non-Circulating Supply (SOL)</p>
              <p>{nonCirculating.toLocaleString('en-US')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
