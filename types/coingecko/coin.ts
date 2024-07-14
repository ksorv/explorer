export interface Coin {
  id: string
  symbol: string
  name: string
  web_slug: string
  asset_platform_id: any
  platforms: Platforms
  detail_platforms: DetailPlatforms
  block_time_in_minutes: number
  hashing_algorithm: any
  categories: string[]
  preview_listing: boolean
  public_notice: any
  additional_notices: any[]
  localization: Localization
  description: Description
  links: Links
  image: Image
  country_origin: string
  genesis_date: any
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  ico_data: IcoData
  watchlist_portfolio_users: number
  market_cap_rank: number
  market_data: MarketData
  community_data: CommunityData
  developer_data: DeveloperData
  status_updates: any[]
  last_updated: string
  tickers: Ticker[]
}

export interface Platforms {
  "": string
}

export interface DetailPlatforms {
  "": GeneratedType
}

export interface GeneratedType {
  decimal_place: any
  contract_address: string
}

export interface Localization {
  en: string
}

export interface Description {
  en: string
}

export interface Links {
  homepage: string[]
  whitepaper: string
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: any
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: ReposUrl
}

export interface ReposUrl {
  github: string[]
  bitbucket: any[]
}

export interface Image {
  thumb: string
  small: string
  large: string
}

export interface IcoData {
  ico_start_date: any
  ico_end_date: any
  short_desc: string
  description: any
  links: Links2
  softcap_currency: string
  hardcap_currency: string
  total_raised_currency: string
  softcap_amount: any
  hardcap_amount: any
  total_raised: any
  quote_pre_sale_currency: string
  base_pre_sale_amount: any
  quote_pre_sale_amount: any
  quote_public_sale_currency: string
  base_public_sale_amount: number
  quote_public_sale_amount: number
  accepting_currencies: string
  country_origin: string
  pre_sale_start_date: any
  pre_sale_end_date: any
  whitelist_url: string
  whitelist_start_date: any
  whitelist_end_date: any
  bounty_detail_url: string
  amount_for_sale: any
  kyc_required: boolean
  whitelist_available: boolean
  pre_sale_available: any
  pre_sale_ended: boolean
}

export interface Links2 {}

export interface MarketData {
  current_price: CurrentPrice
  total_value_locked: any
  mcap_to_tvl_ratio: any
  fdv_to_tvl_ratio: any
  roi: any
  ath: Ath
  ath_change_percentage: AthChangePercentage
  ath_date: AthDate
  atl: Atl
  atl_change_percentage: AtlChangePercentage
  atl_date: AtlDate
  market_cap: MarketCap
  market_cap_rank: number
  fully_diluted_valuation: FullyDilutedValuation
  market_cap_fdv_ratio: number
  total_volume: TotalVolume
  high_24h: High24h
  low_24h: Low24h
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  price_change_percentage_14d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  price_change_24h_in_currency: PriceChange24hInCurrency
  price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency
  price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency
  price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency
  price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency
  price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency
  price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency
  price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency
  price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency
  market_cap_change_24h_in_currency: MarketCapChange24hInCurrency
  market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency
  total_supply: number
  max_supply: any
  circulating_supply: number
  last_updated: string
}

export interface CurrentPrice {
  usd: number
}

export interface Ath {
  usd: number
}

export interface AthChangePercentage {
  usd: number
}

export interface AthDate {
  usd: string
}

export interface Atl {
  usd: number
}

export interface AtlChangePercentage {
  usd: number
}

export interface AtlDate {
  usd: string
}

export interface MarketCap {
  usd: number
}

export interface FullyDilutedValuation {
  usd: number
}

export interface TotalVolume {
  usd: number
}

export interface High24h {
  usd: number
}

export interface Low24h {
  usd: number
}

export interface PriceChange24hInCurrency {
  usd: number
}

export interface PriceChangePercentage1hInCurrency {
  usd: number
}

export interface PriceChangePercentage24hInCurrency {
  usd: number
}

export interface PriceChangePercentage7dInCurrency {
  usd: number
}

export interface PriceChangePercentage14dInCurrency {
  usd: number
}

export interface PriceChangePercentage30dInCurrency {
  usd: number
}

export interface PriceChangePercentage60dInCurrency {
  usd: number
}

export interface PriceChangePercentage200dInCurrency {
  usd: number
}

export interface PriceChangePercentage1yInCurrency {
  usd: number
}

export interface MarketCapChange24hInCurrency {
  usd: number
}

export interface MarketCapChangePercentage24hInCurrency {
  usd: number
}

export interface CommunityData {
  facebook_likes: any
  twitter_followers: number
  reddit_average_posts_48h: number
  reddit_average_comments_48h: number
  reddit_subscribers: number
  reddit_accounts_active_48h: number
  telegram_channel_user_count: number
}

export interface DeveloperData {
  forks: number
  stars: number
  subscribers: number
  total_issues: number
  closed_issues: number
  pull_requests_merged: number
  pull_request_contributors: number
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks
  commit_count_4_weeks: number
  last_4_weeks_commit_activity_series: any[]
}

export interface CodeAdditionsDeletions4Weeks {
  additions: number
  deletions: number
}

export interface Ticker {
  base: string
  target: string
  market: Market
  last: number
  volume: number
  converted_last: ConvertedLast
  converted_volume: ConvertedVolume
  trust_score: string
  bid_ask_spread_percentage: number
  timestamp: string
  last_traded_at: string
  last_fetch_at: string
  is_anomaly: boolean
  is_stale: boolean
  trade_url?: string
  token_info_url: any
  coin_id: string
  target_coin_id?: string
}

export interface Market {
  name: string
  identifier: string
  has_trading_incentive: boolean
}

export interface ConvertedLast {
  btc: number
  eth: number
  usd: number
}

export interface ConvertedVolume {
  btc: number
  eth: number
  usd: number
}
