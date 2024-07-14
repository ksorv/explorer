import Link from 'next/link';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon, TargetIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '../theme/toggle';

export default function Header() {
  return (
    <header className='bg-background border-b border-muted/20 shadow-sm'>
      <div className='container flex items-center justify-between h-16 px-4 md:px-6'>
        <Link href='/' className='flex items-center gap-2' prefetch={false}>
          <TargetIcon className='w-8 h-8' />
          <span className='font-bold text-lg'>Solana Explorer</span>
        </Link>
        <nav className='hidden md:flex items-center gap-8'>
          <Link
            href='/'
            className='text-md font-medium hover:text-primary transition-colors'
            prefetch={false}
          >
            Stats
          </Link>
          <ThemeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline' size='icon' className='md:hidden'>
              <HamburgerMenuIcon className='w-6 h-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-80'>
            <div className='flex flex-col gap-8 py-8'>
              <Link
                href='/'
                className='flex items-center gap-2 text-md font-medium hover:text-primary transition-colors'
                prefetch={false}
              >
                Stats
              </Link>
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
