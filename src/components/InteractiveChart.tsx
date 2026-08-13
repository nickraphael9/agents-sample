import React, { useState } from 'react';
import { MarketSymbol } from '../types';

interface InteractiveChartProps {
  selectedSymbol: MarketSymbol;
  onOpenDetailModal: () => void;
  isWatchlisted: boolean;
  onToggleWatchlist: () => void;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({
  selectedSymbol,
  onOpenDetailModal,
  isWatchlisted,
  onToggleWatchlist
}) => {
  const [timeframe, setTimeframe] = useState<'1D' | '1M' | '1Y'>('1D');
  const [chartType, setChartType] = useState<'line' | 'candlestick'>('line');
  const [showIndicators, setShowIndicators] = useState(true);
  const [hoverData, setHoverData] = useState<{ price: number; time: string; vol: number } | null>(null);
  const [viewMode, setViewMode] = useState<'interactive' | 'reference'>('interactive');

  const historyData =
    timeframe === '1D'
      ? selectedSymbol.history1D || []
      : selectedSymbol.history1M || [];

  const prices = historyData.map(d => d.price);
  const minPrice = prices.length ? Math.min(...prices) * 0.998 : selectedSymbol.last * 0.98;
  const maxPrice = prices.length ? Math.max(...prices) * 1.002 : selectedSymbol.last * 1.02;
  const priceRange = maxPrice - minPrice || 1;

  const isPositive = selectedSymbol.change >= 0;

  return (
    <div className="bg-white/5 backdrop-blur-3xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-4 md:p-6 w-full">
      {/* Top Chart Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-headline font-bold text-lg md:text-xl text-white">
              {selectedSymbol.symbol}
            </h3>
            <span className="text-xs px-2.5 py-0.5 bg-white/10 border border-white/10 text-white/70 font-medium rounded-full">
              {selectedSymbol.category}
            </span>
            <span className="text-xs text-white/50">
              {selectedSymbol.name}
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-1">
            <span className="font-data-tabular font-bold text-2xl text-white">
              ${hoverData ? hoverData.price.toLocaleString(undefined, { minimumFractionDigits: 2 }) : selectedSymbol.last.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
            <span
              className={`font-data-tabular font-semibold text-sm ${
                isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isPositive ? '+' : ''}
              {selectedSymbol.change.toFixed(2)} ({isPositive ? '+' : ''}
              {selectedSymbol.changePercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Toggle */}
          <div className="bg-white/5 border border-white/10 p-1 rounded-xl flex gap-1 backdrop-blur-md">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'interactive'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
              id="chart-mode-interactive"
            >
              Interactive Chart
            </button>
            <button
              onClick={() => setViewMode('reference')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'reference'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
              id="chart-mode-reference"
            >
              Overview Map
            </button>
          </div>

          {viewMode === 'interactive' && (
            <>
              {/* Timeframes */}
              <div className="bg-white/5 border border-white/10 p-1 rounded-xl flex gap-1 backdrop-blur-md">
                {(['1D', '1M'] as const).map(tf => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                      timeframe === tf
                        ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md border border-white/20'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

              {/* Chart Type */}
              <button
                onClick={() =>
                  setChartType(chartType === 'line' ? 'candlestick' : 'line')
                }
                className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 rounded-xl text-xs flex items-center gap-1 transition-all"
                title="Toggle Chart Style"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {chartType === 'line' ? 'show_chart' : 'candlestick_chart'}
                </span>
              </button>

              {/* Indicator toggle */}
              <button
                onClick={() => setShowIndicators(!showIndicators)}
                className={`px-3 py-1 rounded-xl text-xs font-medium transition-all border ${
                  showIndicators
                    ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40'
                    : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                }`}
              >
                SMA (20)
              </button>
            </>
          )}

          {/* Action Buttons */}
          <button
            onClick={onToggleWatchlist}
            className={`p-1.5 rounded-xl text-xs flex items-center gap-1 border transition-all ${
              isWatchlisted
                ? 'bg-amber-500/20 text-amber-300 border-amber-400/50'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
            }`}
            title="Add to Watchlist"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isWatchlisted ? 'star' : 'star_border'}
            </span>
          </button>

          <button
            onClick={onOpenDetailModal}
            className="px-3.5 py-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 text-white text-xs font-semibold rounded-xl transition-all flex items-center gap-1 shadow-lg shadow-indigo-500/20 border border-white/20"
          >
            Full Analytics
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </button>
        </div>
      </div>

      {/* Main Chart Canvas Area */}
      {viewMode === 'interactive' ? (
        <div className="relative h-72 md:h-80 w-full pt-4">
          {/* Hover Crosshair Info */}
          {hoverData && (
            <div className="absolute top-2 left-2 z-10 bg-[#0c0e14]/90 border border-white/20 text-white text-xs px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md font-data-tabular flex items-center gap-3">
              <span>Time: {hoverData.time}</span>
              <span>Price: ${hoverData.price.toFixed(2)}</span>
              <span>Vol: {hoverData.vol.toLocaleString()}</span>
            </div>
          )}

          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 500 220"
            preserveAspectRatio="none"
            onMouseLeave={() => setHoverData(null)}
          >
            {/* Grid lines */}
            <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

            {/* Volume Histogram at Bottom */}
            {historyData.map((d, i) => {
              const x = (i / (historyData.length - 1 || 1)) * 480 + 10;
              const barHeight = Math.min(40, (d.volume / 2000000) * 35 + 5);
              return (
                <rect
                  key={`vol-${i}`}
                  x={x - 4}
                  y={200 - barHeight}
                  width="8"
                  height={barHeight}
                  fill={isPositive ? '#10b981' : '#f43f5e'}
                  fillOpacity="0.35"
                />
              );
            })}

            {/* Price Line or Candlesticks */}
            {chartType === 'line' ? (
              <>
                {/* Area Gradient Fill */}
                <path
                  d={generateLinePath(historyData, minPrice, priceRange, true)}
                  fill={isPositive ? 'url(#greenGradient)' : 'url(#redGradient)'}
                  opacity="0.3"
                />
                {/* Main Curve */}
                <path
                  d={generateLinePath(historyData, minPrice, priceRange, false)}
                  fill="none"
                  stroke={isPositive ? '#10b981' : '#f43f5e'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </>
            ) : (
              /* Candlesticks */
              historyData.map((d, i) => {
                const x = (i / (historyData.length - 1 || 1)) * 480 + 10;
                const yPrice = 180 - ((d.price - minPrice) / priceRange) * 150;
                const openY = yPrice + (i % 2 === 0 ? 8 : -8);
                const isCandleGreen = d.price >= openY;

                return (
                  <g key={`candle-${i}`}>
                    <line
                      x1={x}
                      y1={yPrice - 12}
                      x2={x}
                      y2={yPrice + 12}
                      stroke={isCandleGreen ? '#10b981' : '#f43f5e'}
                      strokeWidth="1.5"
                    />
                    <rect
                      x={x - 4}
                      y={Math.min(yPrice, openY)}
                      width="8"
                      height={Math.max(4, Math.abs(yPrice - openY))}
                      fill={isCandleGreen ? '#10b981' : '#f43f5e'}
                    />
                  </g>
                );
              })
            )}

            {/* Indicator Moving Average Line */}
            {showIndicators && historyData.length > 2 && (
              <path
                d={generateSmaPath(historyData, minPrice, priceRange)}
                fill="none"
                stroke="#818cf8"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
            )}

            {/* Hover Points & Triggers */}
            {historyData.map((d, i) => {
              const x = (i / (historyData.length - 1 || 1)) * 480 + 10;
              const y = 180 - ((d.price - minPrice) / priceRange) * 150;
              return (
                <circle
                  key={`pt-${i}`}
                  cx={x}
                  cy={y}
                  r="6"
                  fill="transparent"
                  className="cursor-pointer hover:fill-indigo-400 transition-colors"
                  onMouseEnter={() => setHoverData(d)}
                />
              );
            })}

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ) : (
        /* Reference Overview Mode */
        <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl my-2 flex items-center justify-center bg-white/5 border border-white/10 relative group">
          <img
            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
            alt="TradingView Markets Overview"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setViewMode('interactive')}
              className="bg-white text-black font-bold px-5 py-2.5 rounded-full shadow-lg text-sm hover:bg-white/90"
            >
              Switch to Interactive Live Chart
            </button>
          </div>
        </div>
      )}

      {/* Footer Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-white/10 text-xs">
        <div>
          <span className="text-white/40 block">52W Range</span>
          <span className="font-data-tabular font-semibold text-white">
            ${selectedSymbol.low52w || (selectedSymbol.last * 0.8).toFixed(2)} - $
            {selectedSymbol.high52w || (selectedSymbol.last * 1.2).toFixed(2)}
          </span>
        </div>
        <div>
          <span className="text-white/40 block">Day Range</span>
          <span className="font-data-tabular font-semibold text-white">
            ${selectedSymbol.dayLow || (selectedSymbol.last * 0.99).toFixed(2)} - $
            {selectedSymbol.dayHigh || (selectedSymbol.last * 1.01).toFixed(2)}
          </span>
        </div>
        <div>
          <span className="text-white/40 block">Volume</span>
          <span className="font-data-tabular font-semibold text-white">
            {selectedSymbol.volume}
          </span>
        </div>
        <div>
          <span className="text-white/40 block">Market Cap</span>
          <span className="font-data-tabular font-semibold text-white">
            {selectedSymbol.marketCap || '$2.4T'}
          </span>
        </div>
      </div>
    </div>
  );
};

function generateLinePath(
  data: { price: number }[],
  min: number,
  range: number,
  isClosed: boolean
) {
  if (!data.length) return 'M0,100 L500,100';
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1 || 1)) * 480 + 10;
    const y = 180 - ((d.price - min) / range) * 150;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const path = `M${pts.join(' L')}`;
  if (isClosed) {
    return `${path} L490,200 L10,200 Z`;
  }
  return path;
}

function generateSmaPath(
  data: { price: number }[],
  min: number,
  range: number
) {
  const pts = data.map((d, i) => {
    const x = (i / (data.length - 1 || 1)) * 480 + 10;
    const smaPrice = d.price * 0.998;
    const y = 180 - ((smaPrice - min) / range) * 150;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return `M${pts.join(' L')}`;
}
