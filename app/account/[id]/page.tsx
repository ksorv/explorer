import { getAccount } from '@/api/account';
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from '@/components/ui/card';

interface AccountProps {
  params: {
    id: string;
  };
}

export default async function AccountPage({ params }: AccountProps) {
  const id = params.id || '';
  const [{ executable, lamports, owner, pubKey, space, parsed, program }] =
    await Promise.all([getAccount(id)]);

  const isToken = program === 'spl-token' && parsed.type === 'mint';

  if (isToken) {
    <Card className='text-md'>
      <CardHeader className='border-b'>
        <CardDescription className='text-base'>Token Account</CardDescription>
      </CardHeader>
      <CardContent className='p-0 py-2'>
        <div className='space-y-2 divide-y'>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Address</p>
            <p>{pubKey}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Current Supply</p>
            <p>{parsed.info.supply}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Mint Authority</p>
            <p>{parsed.info.mintAuthority}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Decimals</p>
            <p>{parsed.info.decimals}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Owner</p>
            <p>{owner}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Lamports</p>
            <p>{lamports}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Space</p>
            <p>{space} bytes</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Executable</p>
            <p>{executable ? 'True' : 'False'}</p>
          </div>
        </div>
      </CardContent>
    </Card>;
  }

  return (
    <Card className='text-md'>
      <CardHeader className='border-b'>
        <CardDescription className='text-base'>Account</CardDescription>
      </CardHeader>
      <CardContent className='p-0 py-2'>
        <div className='space-y-2 divide-y'>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Address</p>
            <p>{pubKey}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Owner</p>
            <p>{owner}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Lamports</p>
            <p>{lamports}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Executable</p>
            <p>{executable ? 'True' : 'False'}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>State</p>
            <p>{parsed?.info?.state || 'N/A'}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Space</p>
            <p>{space} bytes</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Mint</p>
            <p>{parsed?.info?.mint || 'N/A'}</p>
          </div>
          <div className='flex gap-2 flex-col justify-between sm:flex-row sm:gap-0 py-2 px-6'>
            <p>Owner</p>
            <p>{parsed?.info?.owner || 'N/A'}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
