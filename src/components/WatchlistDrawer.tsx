import React from 'react';
import { MarketSymbol } from '../types';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlistSymbols: MarketSymbol[];
  onSelectSymbol: (symbol: MarketSymbol) => void;
  onRemoveFromWatchlist: (symbolCode: string) => void;
}

export const WatchlistDrawer: React.FC<WatchlistDrawerProps> = ({
  isOpen,
  onClose,
  watchlistSymbols,
  onSelectSymbol,
  onRemoveFromWatchlist
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c0e14]/90 backdrop-blur-3xl border-l border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400">star</span>
              <h3 className="font-headline font-bold text-lg text-white">
                My Watchlist
              </h3>
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs px-2.5 py-0.5 rounded-full font-bold shadow-md">
                {watchlistSymbols.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/60 hover:text-white rounded-xl transition-colors hover:bg-white/10"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* List Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {watchlistSymbols.length === 0 ? (
              <div className="py-16 text-center text-xs text-white/50 space-y-3">
                <span className="material-symbols-outlined text-[42px] text-white/20">
                  star_border
                </span>
                <p className="text-sm font-semibold text-white/70">Your watchlist is currently empty.</p>
                <p className="text-[12px] text-white/40 max-w-xs mx-auto">
                  Click the star icon on any stock or index card to save it to your personal drawer!
                </p>
              </div>
            ) : (
              watchlistSymbols.map(sym => {
                const isPositive = sym.change >= 0;
                return (
                  <div
                    key={sym.symbol}
                    onClick={() => {
                      onSelectSymbol(sym);
                      onClose();
                    }}
                    className="p-3.5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs flex items-center justify-center font-data-tabular">
                        {sym.symbol.slice(0, 3)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {sym.symbol}
                        </div>
                        <div className="text-xs text-white/50 truncate max-w-[140px]">
                          {sym.name}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-data-tabular text-sm font-bold text-white">
                          ${sym.last.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </div>
                        <div
                          className={`font-data-tabular text-xs font-semibold ${
                            isPositive ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {isPositive ? '+' : ''}
                          {sym.changePercent.toFixed(2)}%
                        </div>
                      </div>

                      <button
                        onClick={e => {
                          e.stopPropagation();
                          onRemoveFromWatchlist(sym.symbol);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 text-white/40 hover:text-rose-400 transition-all"
                        title="Remove from Watchlist"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
