import "server-only";
import base58 from 'bs58';
import { redirect } from "next/navigation";

export const searhString = (_: any, search: string) => {
  'use server';

  return {
    valid: false,
  };

  if (!search || typeof search !== 'string') return;

  const decoded = base58.decode(search);

  // Account address
  if (decoded.length === 32) {
    return redirect(`/account/${decoded}`);
  }

  // Signature
  else if (decoded.length === 64) {
    return redirect(`/tx/${decoded}`);
  }

  return {
    valid: false,
  };
};
