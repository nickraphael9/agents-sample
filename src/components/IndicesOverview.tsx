import React from 'react';
import { IndexCardData, MarketSymbol } from '../types';

interface IndicesOverviewProps {
  indices: IndexCardData[];
  onSelectIndex: (code: string) => void;
}

export const IndicesOverview: React.FC<IndicesOverviewProps> = ({
  indices,
  onSelectIndex
}) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-headline font-bold text-[22px] md:text-[24px] text-white flex items-center gap-1">
          Indices
          <span className="material-symbols-outlined text-white/50 text-[20px]">
            chevron_right
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {indices.map(index => {
          const isPositive = index.change >= 0;
          const sparklinePath = generateSparklinePath(index.sparkline);

          return (
            <div
              key={index.code}
              onClick={() => onSelectIndex(index.code)}
              id={`index-card-${index.code.toLowerCase()}`}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="font-bold text-[15px] text-white">
                    {index.symbol}
                  </div>
                  <div className="font-data-tabular text-[12px] text-white/50 mt-0.5">
                    {index.code}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-data-tabular text-[15px] font-bold text-white">
                    {index.value.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
                  </div>
                  <div
                    className={`font-data-tabular text-[12px] mt-0.5 font-semibold ${
                      isPositive ? 'text-emerald-400' : 'text-rose-400'
                    }`}
                  >
                    {isPositive ? '+' : ''}
                    {index.change.toFixed(2)} ({isPositive ? '+' : ''}
                    {index.changePercent.toFixed(2)}%)
                  </div>
                </div>
              </div>

              {/* Sparkline SVG */}
              <div className="h-16 w-full opacity-80 group-hover:opacity-100 transition-opacity">
                <svg
                  className={`w-full h-full ${
                    isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                  preserveAspectRatio="none"
                  viewBox="0 0 100 30"
                >
                  <path
                    d={sparklinePath.line}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d={sparklinePath.fill}
                    fill="currentColor"
                    fillOpacity="0.15"
                    stroke="none"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function generateSparklinePath(points: number[]) {
  if (!points || points.length === 0) {
    return { line: 'M0,15 L100,15', fill: 'M0,15 L100,15 L100,30 L0,30 Z' };
  }

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  const normalized = points.map((p, i) => {
    const x = (i / (points.length - 1)) * 100;
    const y = 28 - ((p - min) / range) * 22; // Keep padding
    return { x, y };
  });

  const pathCommands = normalized.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const fillCommands = `${pathCommands} L100,30 L0,30 Z`;

  return { line: pathCommands, fill: fillCommands };
}
