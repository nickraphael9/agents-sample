import React, { useState } from 'react';
import { TabType, MarketSymbol } from '../types';
import { ALL_SYMBOLS } from '../data/marketData';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onSelectSymbol: (symbol: MarketSymbol) => void;
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
  onToggleWatchlist: () => void;
  watchlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onSelectSymbol,
  onOpenLogin,
  onOpenGetStarted,
  onToggleWatchlist,
  watchlistCount
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const filteredSymbols = searchQuery.trim()
    ? ALL_SYMBOLS.filter(
        s =>
          s.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ALL_SYMBOLS.slice(0, 6);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0c0e14]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
      <div className="h-16 w-full px-4 lg:px-6 flex items-center justify-between gap-6 max-w-7xl mx-auto">
        {/* Logo & Main Nav */}
        <div className="flex items-center gap-8 h-full">
          <div
            onClick={() => setActiveTab('markets')}
            className="flex items-center gap-2 cursor-pointer group"
            id="header-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-white text-[20px]">
                monitoring
              </span>
            </div>
            <span className="font-headline font-bold text-[19px] text-white tracking-tight">
              ChartFlow
            </span>
          </div>

          <nav className="hidden md:flex items-center h-full gap-6">
            <button
              onClick={() => setActiveTab('products')}
              className={`text-[14px] font-medium transition-colors h-full border-b-2 flex items-center ${
                activeTab === 'products'
                  ? 'text-indigo-400 border-indigo-500 font-semibold'
                  : 'text-white/60 hover:text-white border-transparent'
              }`}
              id="nav-products"
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`text-[14px] font-medium transition-colors h-full border-b-2 flex items-center ${
                activeTab === 'community'
                  ? 'text-indigo-400 border-indigo-500 font-semibold'
                  : 'text-white/60 hover:text-white border-transparent'
              }`}
              id="nav-community"
            >
              Community
            </button>
            <button
              onClick={() => setActiveTab('markets')}
              className={`text-[14px] font-medium transition-colors h-full border-b-2 flex items-center ${
                activeTab === 'markets'
                  ? 'text-indigo-400 border-indigo-500 font-semibold'
                  : 'text-white/60 hover:text-white border-transparent'
              }`}
              id="nav-markets"
            >
              Markets
            </button>
            <button
              onClick={() => setActiveTab('brokers')}
              className={`text-[14px] font-medium transition-colors h-full border-b-2 flex items-center ${
                activeTab === 'brokers'
                  ? 'text-indigo-400 border-indigo-500 font-semibold'
                  : 'text-white/60 hover:text-white border-transparent'
              }`}
              id="nav-brokers"
            >
              Brokers
            </button>
            <button
              onClick={() => setActiveTab('more')}
              className={`text-[14px] font-medium transition-colors h-full border-b-2 flex items-center ${
                activeTab === 'more'
                  ? 'text-indigo-400 border-indigo-500 font-semibold'
                  : 'text-white/60 hover:text-white border-transparent'
              }`}
              id="nav-more"
            >
              More
            </button>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden sm:block">
          <div
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-text text-white/70 gap-2 w-full backdrop-blur-md"
            id="search-trigger"
          >
            <span className="material-symbols-outlined text-[20px] text-white/40">
              search
            </span>
            <input
              type="text"
              placeholder="Search symbols, markets..."
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="bg-transparent text-[13px] text-white focus:outline-none w-full placeholder:text-white/40"
            />
            {searchQuery && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  setSearchQuery('');
                }}
                className="text-xs text-white/40 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsSearchOpen(false)}
              />
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#0c0e14]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-2xl z-20 overflow-hidden max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-white/10 bg-white/5 text-[11px] font-bold text-white/40 uppercase tracking-wider flex justify-between">
                  <span>{searchQuery ? 'Search Results' : 'Trending Symbols'}</span>
                  <span>ESC to close</span>
                </div>
                {filteredSymbols.length === 0 ? (
                  <div className="p-4 text-center text-xs text-white/50">
                    No symbols found matching "{searchQuery}"
                  </div>
                ) : (
                  filteredSymbols.map(sym => (
                    <div
                      key={sym.symbol}
                      onClick={() => {
                        onSelectSymbol(sym);
                        setIsSearchOpen(false);
                      }}
                      className="px-4 py-2.5 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-colors border-b border-white/5 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-bold text-xs flex items-center justify-center font-data-tabular">
                          {sym.symbol.slice(0, 3)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {sym.symbol}
                          </div>
                          <div className="text-xs text-white/50 truncate max-w-[180px]">
                            {sym.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-data-tabular text-xs font-semibold text-white">
                          ${sym.last.toLocaleString()}
                        </div>
                        <div
                          className={`font-data-tabular text-[11px] ${
                            sym.change >= 0 ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {sym.change >= 0 ? '+' : ''}
                          {sym.changePercent.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleWatchlist}
            className="relative p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full border border-white/10 transition-colors flex items-center gap-1.5 px-3"
            title="Watchlist"
            id="watchlist-toggle-btn"
          >
            <span className="material-symbols-outlined text-[18px] text-amber-300">star</span>
            <span className="text-xs font-medium hidden sm:inline text-white/80">Watchlist</span>
            {watchlistCount > 0 && (
              <span className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full font-data-tabular shadow-sm">
                {watchlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenLogin}
            className="text-[14px] font-medium text-white/70 hover:text-white px-3 py-1.5 rounded-full transition-colors hidden sm:block hover:bg-white/5"
            id="header-login-btn"
          >
            Log in
          </button>

          <button
            onClick={onOpenGetStarted}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-[14px] font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/25 border border-white/20"
            id="header-get-started-btn"
          >
            Get started
          </button>

          <div
            onClick={onOpenLogin}
            className="w-8 h-8 rounded-full bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-white cursor-pointer hover:bg-indigo-500/50 transition-all ml-1 shadow-sm"
            title="User Profile"
            id="header-profile-btn"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};
