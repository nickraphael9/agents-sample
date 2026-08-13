import React from 'react';
import { MarketSymbol } from '../types';

interface HighestVolumeSectionProps {
  popularPills: string[];
  volumeSymbols: MarketSymbol[];
  selectedPill: string | null;
  onSelectPill: (pill: string) => void;
  onSelectSymbol: (symbol: MarketSymbol) => void;
}

export const HighestVolumeSection: React.FC<HighestVolumeSectionProps> = ({
  popularPills,
  volumeSymbols,
  selectedPill,
  onSelectPill,
  onSelectSymbol
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* US Stocks Highlights */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-headline font-bold text-[18px] text-white flex items-center gap-1">
            US stocks
            <span className="material-symbols-outlined text-white/50 text-[18px]">
              chevron_right
            </span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {popularPills.map(pill => {
            const isSelected = selectedPill === pill;
            return (
              <button
                key={pill}
                onClick={() => onSelectPill(pill)}
                id={`us-stock-pill-${pill.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-md border border-white/20'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>
      </section>

      {/* Highest Volume Table */}
      <section>
        <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2">
          Highest Volume
        </h4>
        <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <table className="w-full text-left border-collapse">
            <tbody>
              {volumeSymbols.map((sym, index) => {
                const isPositive = sym.change >= 0;
                return (
                  <tr
                    key={sym.symbol}
                    onClick={() => onSelectSymbol(sym)}
                    id={`highest-vol-row-${sym.symbol.toLowerCase()}`}
                    className={`hover:bg-white/10 transition-colors cursor-pointer ${
                      index < volumeSymbols.length - 1
                        ? 'border-b border-white/5'
                        : ''
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="text-[13px] font-semibold text-white">
                        {sym.symbol}
                      </div>
                      <div className="text-[12px] text-white/50 truncate max-w-[120px]">
                        {sym.name}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right font-data-tabular text-[13px] font-semibold text-white">
                      {sym.last.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td
                      className={`py-3 px-4 text-right font-data-tabular text-[13px] font-semibold ${
                        isPositive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isPositive ? '+' : ''}
                      {sym.changePercent.toFixed(2)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
