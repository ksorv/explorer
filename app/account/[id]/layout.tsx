import { Search } from '@/components/search/search';
import { FC, PropsWithChildren, ReactNode } from 'react';

interface AccountLayoutProps {
  history?: ReactNode;
}

const AccountLayout: FC<PropsWithChildren<AccountLayoutProps>> = ({
  history,
  children,
}) => {
  return (
    <main className='py-6 px-4 md:p-8 space-y-4 max-w-[1120px] mx-auto'>
      <Search />
      {children}
      {history}
    </main>
  );
};

export default AccountLayout;