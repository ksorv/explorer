import { clusterApiUrl, Connection } from "@solana/web3.js";

let connection: Connection;

export function getConnection() {
  if (connection) {return connection;}

  let url = process.env.RPC_URL;

  if (!url) {
    url = clusterApiUrl('devnet').replace('api', 'explorer-api');
  }

  connection = new Connection(url, 'finalized');
  return connection;
}