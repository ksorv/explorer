import { Coin } from "@/types/coingecko/coin";
import "server-only"

enum CoinId {
  Solana = 'solana'
}

async function getCoinData(coinId = CoinId.Solana) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coin/${coinId}`, { next: { revalidate: 3600 }});

  if (!res.ok) {
    throw new Error(`Failed to get ${coinId} data`)
  }

  return res.json().then((data: Coin) => ({
    price: data.market_data.current_price.usd,
    volume24h: data.market_data.total_volume.usd,
    marketCap: data.market_data.market_cap.usd,
    marketCapRank: data.market_data.market_cap_rank,
    priceChange24h: data.market_data.price_change_24h_in_currency.usd,
    priceChange24hPer: data.market_data.price_change_percentage_24h_in_currency.usd,
  }));
}