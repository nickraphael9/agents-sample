import React, { useState } from 'react';
import { MarketSymbol } from '../types';

interface SymbolDetailModalProps {
  symbol: MarketSymbol | null;
  onClose: () => void;
  isWatchlisted: boolean;
  onToggleWatchlist: () => void;
}

export const SymbolDetailModal: React.FC<SymbolDetailModalProps> = ({
  symbol,
  onClose,
  isWatchlisted,
  onToggleWatchlist
}) => {
  if (!symbol) return null;

  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [shares, setShares] = useState(10);
  const [orderExecuted, setOrderExecuted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'analysis' | 'news'>('overview');

  const isPositive = symbol.change >= 0;
  const totalOrderValue = symbol.last * shares;

  const handleExecuteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderExecuted(true);
    setTimeout(() => setOrderExecuted(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className="bg-[#0c0e14]/90 backdrop-blur-3xl rounded-3xl border border-white/10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-white"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0c0e14]/80 backdrop-blur-xl z-10">
          <div className="flex items-center gap-3">
            {symbol.flagUrl ? (
              <img
                src={symbol.flagUrl}
                alt={symbol.name}
                className="w-8 h-5 rounded-xs border border-white/20 object-cover shadow-xs"
              />
            ) : (
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-sm flex items-center justify-center">
                {symbol.symbol.slice(0, 3)}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-headline font-bold text-xl text-white">
                  {symbol.symbol}
                </h2>
                <span className="text-xs bg-white/10 border border-white/10 px-2.5 py-0.5 rounded-full text-white/70 font-medium">
                  {symbol.category}
                </span>
              </div>
              <p className="text-xs text-white/50">{symbol.name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleWatchlist}
              className={`p-2 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isWatchlisted
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                  : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isWatchlisted ? 'star' : 'star_border'}
              </span>
              {isWatchlisted ? 'Saved' : 'Watch'}
            </button>
            <button
              onClick={onClose}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Price Overview Bar */}
          <div className="flex flex-wrap items-baseline justify-between bg-white/5 backdrop-blur-2xl p-5 rounded-2xl border border-white/10">
            <div>
              <div className="text-xs text-white/50 uppercase font-bold tracking-wider mb-1">
                Last Price
              </div>
              <div className="font-data-tabular font-bold text-3xl text-white">
                ${symbol.last.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-white/50 uppercase font-bold tracking-wider mb-1">
                24h Change
              </div>
              <div
                className={`font-data-tabular font-bold text-lg ${
                  isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {isPositive ? '+' : ''}
                {symbol.change.toFixed(2)} ({isPositive ? '+' : ''}
                {symbol.changePercent.toFixed(2)}%)
              </div>
            </div>
          </div>

          {/* Sub Navigation */}
          <div className="flex gap-2 border-b border-white/10">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'overview'
                  ? 'border-indigo-400 text-indigo-300 font-bold'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Key Metrics & Trading
            </button>
            <button
              onClick={() => setActiveTab('analysis')}
              className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'analysis'
                  ? 'border-indigo-400 text-indigo-300 font-bold'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              AI Market Sentiment
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`pb-2.5 px-3 text-xs font-semibold border-b-2 transition-all ${
                activeTab === 'news'
                  ? 'border-indigo-400 text-indigo-300 font-bold'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              Latest News
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Metrics Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider">
                  Financial Highlights
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">52-Week High</span>
                    <span className="font-data-tabular font-bold text-white text-sm">
                      ${symbol.high52w || (symbol.last * 1.15).toFixed(2)}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">52-Week Low</span>
                    <span className="font-data-tabular font-bold text-white text-sm">
                      ${symbol.low52w || (symbol.last * 0.85).toFixed(2)}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">24h Volume</span>
                    <span className="font-data-tabular font-bold text-white text-sm">
                      {symbol.volume}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">Market Cap</span>
                    <span className="font-data-tabular font-bold text-white text-sm">
                      {symbol.marketCap || '$1.2T'}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">P/E Ratio</span>
                    <span className="font-data-tabular font-bold text-white text-sm">
                      {symbol.peRatio || 24.5}
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl">
                    <span className="text-white/50 block mb-0.5">Category</span>
                    <span className="font-semibold text-indigo-300 text-sm">
                      {symbol.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Simulation Ticket */}
              <div className="bg-white/5 backdrop-blur-2xl p-5 rounded-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white/60 uppercase tracking-wider">
                    Paper Trading Order
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-2 py-0.5 rounded-full">
                    Simulated Execution
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 border border-white/10 rounded-xl">
                  <button
                    onClick={() => setOrderType('buy')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${
                      orderType === 'buy'
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Buy {symbol.symbol}
                  </button>
                  <button
                    onClick={() => setOrderType('sell')}
                    className={`py-2 text-xs font-bold rounded-lg transition-all ${
                      orderType === 'sell'
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Sell {symbol.symbol}
                  </button>
                </div>

                <form onSubmit={handleExecuteOrder} className="space-y-3">
                  <div>
                    <label className="text-xs text-white/50 block mb-1">
                      Quantity (Units)
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10000"
                      value={shares}
                      onChange={e => setShares(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full bg-white/10 border border-white/15 text-white rounded-xl px-3.5 py-2 text-sm font-data-tabular focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                    />
                  </div>

                  <div className="flex justify-between text-xs py-2 border-t border-b border-white/10">
                    <span className="text-white/50">Est. Total Value</span>
                    <span className="font-data-tabular font-bold text-white">
                      ${totalOrderValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs text-white transition-all shadow-lg ${
                      orderType === 'buy'
                        ? 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/20'
                        : 'bg-rose-500 hover:bg-rose-400 shadow-rose-500/20'
                    }`}
                  >
                    Submit Paper Order ({orderType.toUpperCase()})
                  </button>

                  {orderExecuted && (
                    <div className="p-2.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium rounded-xl text-center animate-in fade-in">
                      ✓ Order Executed successfully for {shares} shares of {symbol.symbol}!
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                  AI Market Overview for {symbol.symbol}
                </div>
                <p className="text-white/80 leading-relaxed text-xs">
                  {symbol.symbol} is showing positive momentum with strong support near ${symbol.dayLow || (symbol.last * 0.98).toFixed(2)}.
                  Relative Strength Index (RSI) stands at 58, indicating neutral to moderately bullish bias. Technical moving averages suggest institutional accumulation.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center">
                  <span className="text-white/50 block">Consensus Rating</span>
                  <span className="font-bold text-sm text-emerald-400 mt-1 block">Moderate Buy</span>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center">
                  <span className="text-white/50 block">Target Price</span>
                  <span className="font-data-tabular font-bold text-sm text-white mt-1 block">
                    ${(symbol.last * 1.12).toFixed(2)}
                  </span>
                </div>
                <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center">
                  <span className="text-white/50 block">Volatility Index</span>
                  <span className="font-bold text-sm text-white mt-1 block">Low / Medium</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-white/50 mb-1">
                  <span>Reuters • 15m ago</span>
                  <span className="text-indigo-400 font-semibold">Market News</span>
                </div>
                <h5 className="font-semibold text-white text-sm">
                  {symbol.name} Gains Momentum as Institutional Volume Spikes
                </h5>
                <p className="text-white/70 mt-1">
                  Traders point to upcoming earnings guidance and broader sector rallies for sustained interest.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-white/50 mb-1">
                  <span>Bloomberg • 1h ago</span>
                  <span className="text-indigo-400 font-semibold">Financial Analysis</span>
                </div>
                <h5 className="font-semibold text-white text-sm">
                  Global Indices React to Interest Rate & Inflation Figures
                </h5>
                <p className="text-white/70 mt-1">
                  Analysts update price targets following macroeconomic data releases.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
