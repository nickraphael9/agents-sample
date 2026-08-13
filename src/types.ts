export type CategoryType = 'US stocks' | 'World stocks' | 'Crypto' | 'Futures' | 'Bonds' | 'Forex' | 'ETFs';

export type TabType = 'products' | 'community' | 'markets' | 'brokers' | 'more';

export interface MarketSymbol {
  symbol: string;
  name: string;
  category: CategoryType;
  last: number;
  change: number;
  changePercent: number;
  volume: string;
  flagUrl?: string;
  high52w?: number;
  low52w?: number;
  dayHigh?: number;
  dayLow?: number;
  marketCap?: string;
  peRatio?: number;
  sparkline: number[];
  history1D: { time: string; price: number; volume: number }[];
  history1M: { time: string; price: number; volume: number }[];
  isPopular?: boolean;
  isHighestVolume?: boolean;
  communityTrend?: {
    sentiment: 'bullish' | 'bearish';
    percentage: number;
    ideasCount: number;
  };
}

export interface IndexCardData {
  symbol: string;
  name: string;
  code: string;
  value: number;
  change: number;
  changePercent: number;
  sparkline: number[];
}

export interface CommunityIdea {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  symbol: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  sentiment: 'Bullish' | 'Bearish';
}

export interface WatchlistItem {
  symbol: string;
  addedAt: string;
  targetPrice?: number;
}
