import React from 'react';
import { MarketSymbol } from '../types';

interface WorldIndicesTableProps {
  symbols: MarketSymbol[];
  onSelectSymbol: (symbol: MarketSymbol) => void;
  onSeeAll?: () => void;
}

export const WorldIndicesTable: React.FC<WorldIndicesTableProps> = ({
  symbols,
  onSelectSymbol,
  onSeeAll
}) => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-headline font-bold text-[18px] text-white flex items-center gap-1">
          World indices
          <span className="material-symbols-outlined text-white/50 text-[18px]">
            chevron_right
          </span>
        </h3>
        {onSeeAll && (
          <button
            onClick={onSeeAll}
            className="text-xs text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer"
            id="see-all-world-indices"
          >
            See all →
          </button>
        )}
      </div>

      <div className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="py-3 px-4 text-[11px] font-bold text-white/50 uppercase tracking-wider">
                  Symbol
                </th>
                <th className="py-3 px-4 text-[11px] font-bold text-white/50 uppercase tracking-wider text-right">
                  Last
                </th>
                <th className="py-3 px-4 text-[11px] font-bold text-white/50 uppercase tracking-wider text-right">
                  Chg
                </th>
                <th className="py-3 px-4 text-[11px] font-bold text-white/50 uppercase tracking-wider text-right">
                  Chg %
                </th>
              </tr>
            </thead>
            <tbody>
              {symbols.map((sym, index) => {
                const isPositive = sym.change >= 0;
                return (
                  <tr
                    key={sym.symbol}
                    onClick={() => onSelectSymbol(sym)}
                    id={`world-index-row-${sym.symbol.toLowerCase()}`}
                    className={`hover:bg-white/10 transition-colors cursor-pointer ${
                      index < symbols.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {sym.flagUrl ? (
                          <div
                            className="w-6 h-4 rounded-xs overflow-hidden flex-shrink-0 bg-cover bg-center border border-white/20 shadow-xs"
                            style={{ backgroundImage: `url(${sym.flagUrl})` }}
                            title={sym.name}
                          />
                        ) : (
                          <div className="w-6 h-4 bg-white/10 rounded-xs flex items-center justify-center text-[9px] font-bold text-white/70 border border-white/10">
                            {sym.symbol.slice(0, 2)}
                          </div>
                        )}
                        <div>
                          <div className="text-[14px] font-semibold text-white">
                            {sym.symbol}
                          </div>
                          <div className="text-[12px] text-white/50">
                            {sym.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right font-data-tabular text-[13px] font-semibold text-white">
                      {sym.last.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right font-data-tabular text-[13px] font-semibold ${
                        isPositive ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isPositive ? '+' : ''}
                      {sym.change.toFixed(2)}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right font-data-tabular text-[13px] font-semibold ${
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
      </div>
    </section>
  );
};
