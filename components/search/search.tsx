'use client';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '../ui/input';
import {  useDeferredValue, useMemo, useState, useTransition } from 'react';
import { cn } from '@/lib/utils';
import base58 from 'bs58';
import { redirect } from 'next/navigation';

enum EntityTypes {
  Account,
  Signature,
}

type ValidatedValues =
  | {
      valid: true;
      value: string;
      type: EntityTypes;
    }
  | {
      valid: false;
    }
  | undefined;

const getLabel = (type: EntityTypes) => {
  switch (type) {
    case EntityTypes.Account:
      return 'Account';
    case EntityTypes.Signature:
      return 'Signature';
    default:
      return 'Unknown Type';
  }
};

export const Search = () => {
  const [isPending, startTransition] = useTransition()
  const [value, setValue] = useState('');
  const deferredState = useDeferredValue(value);

  const validated: ValidatedValues = useMemo(() => {
    if (!deferredState) return;

    const decoded = base58.decode(deferredState);
    console.log(decoded);
    // Account address
    if (decoded.length === 32) {
      return {
        valid: true,
        value: deferredState,
        type: EntityTypes.Account,
      };
    }

    // Signature
    else if (decoded.length === 64) {
      return {
        valid: true,
        value: deferredState,
        type: EntityTypes.Signature,
      };
    }

    return {
      valid: false,
    };
  }, [deferredState]);

  return (
    <div>
      <div className='relative'>
        <MagnifyingGlassIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          type='search'
          placeholder='Search for blocks, accounts, transactions, programs, and tokens'
          className={cn(
            'w-full pl-10 pr-4 py-2 rounded-md',
            deferredState && !validated?.valid && 'border-red-600'
          )}
          disabled={isPending}
          onChange={(e) => setValue(e.target.value)}
        />
        {deferredState && (
          <div className='absolute z-10 mt-2 w-full rounded-md border border-input bg-background py-2 shadow-lg'>
            <ul className='max-h-[200px] overflow-y-auto'>
              <li
                className={cn(
                  'cursor-pointer px-4 py-2 hover:bg-muted',
                  !validated?.valid || isPending && "pointer-events-none"
                )}
                onClick={() => {
                  startTransition(() => {
                    if (!validated?.valid) return;

                    if (validated.type === EntityTypes.Account) {
                      redirect(`/account/${validated.value}`)
                    }

                    if (validated.type === EntityTypes.Signature) {
                      redirect(`/tx/${validated.value}`);
                    }
                  })
                }}
              >
                {validated?.valid
                  ? `Go to ${getLabel(validated.type)}`
                  : 'No entity found'}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
