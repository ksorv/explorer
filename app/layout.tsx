import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { ThemeProvider } from '@/components/theme/provider';
import Header from '@/components/header/header';
import { Search } from '@/components/search/search';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Solana Explorer',
  description: 'Explore solana with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('font-sans antialiased', inter.variable)}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <body className={cn(inter.variable)}>
            <Header />
            <main className='py-6 px-4 md:p-8 space-y-4 max-w-[1120px] mx-auto'>
              <Search />
              {children}
            </main>
          </body>
        </ThemeProvider>
      </body>
    </html>
  );
}
