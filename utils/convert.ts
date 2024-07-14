import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function lamportsToSol(lamports: number) {
  return Math.abs(lamports) / LAMPORTS_PER_SOL;
}