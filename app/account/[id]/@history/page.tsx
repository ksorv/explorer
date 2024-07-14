import { getAccountHistory } from '@/api/account';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { FC } from 'react';

interface HistoryProps {
  params: {
    id: string;
  };
}

const HistoryPage: FC<HistoryProps> = async ({ params: { id = '' } }) => {
  const txns = await getAccountHistory(id);

  return (
    <div>
      <h1 className='text font-bold p-4'>History</h1>
      <div className='flex flex-col gap-8'>
        {txns.map((txn) => (
          <Card className='text-md' key={txn.signature}>
            <CardHeader className='border-b py-4 px-6'>
              <CardDescription className='text-base'>
                Transaction
              </CardDescription>
            </CardHeader>
            <CardContent className='p-0 py-2'>
              <div className='space-y-2 divide-y'>
                <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
                  <p>Address</p>
                  <p>{txn.signature.slice(0, 20)}...</p>
                </div>
                <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
                  <p>Block</p>
                  <p>{txn.slot}</p>
                </div>
                <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
                  <p>Status</p>
                  <p className='capitalize'>
                    {txn.confirmationStatus || 'N/A'}
                  </p>
                </div>
                <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
                  <p>Final Status</p>
                  <p>{txn.err ? 'Failed' : 'Success'}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className='text-md font-semibold p-4 text-center'>More txns hidden due to API limits</p>
    </div>
  );
};

export default HistoryPage;
