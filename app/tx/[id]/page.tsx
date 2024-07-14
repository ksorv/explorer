import { getTxn } from '@/api/transaction';
import { Search } from '@/components/search/search';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TxnProps {
  params: {
    id: string;
  };
}

export default async function TxnPage({ params }: TxnProps) {
  const id = params.id || '';
  const [{ confirmations, result, slot, status = "Unknown", timestamp }] =
    await Promise.all([getTxn(id)]);

  const finalResult = result.err ? 'failed' : 'success';
  return (
    <main className='py-6 px-4 md:p-8 space-y-4 max-w-[1120px] mx-auto'>
      <Search />
      <Card className='text-md'>
        <CardHeader className='border-b'>
          <CardDescription className='text-base'>Transaction</CardDescription>
        </CardHeader>
        <CardContent className='p-0 py-2'>
          <div className='space-y-2 divide-y'>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Signature</p>
              <p>{id.slice(0, 20)}...</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Result</p>
              <p
                className={cn(
                  'capitalize text-green-600',
                  finalResult === 'success' && 'text-green-600'
                )}
              >
                {finalResult}
              </p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Timestamp</p>
              <p>{typeof timestamp === 'number' ? timestamp : 'N/A'}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Confirmation Status</p>
              <p className='capitalize'>{status}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Confirmations</p>
              <p>{confirmations}</p>
            </div>
            <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
              <p>Block</p>
              <p>{slot}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
