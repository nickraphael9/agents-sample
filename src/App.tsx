import React, { useState, useEffect } from 'react';
import { CategoryType, TabType, MarketSymbol, IndexCardData } from './types';
import { ALL_SYMBOLS, INDEX_CARDS } from './data/marketData';
import { Header } from './components/Header';
import { CategoryNav } from './components/CategoryNav';
import { IndicesOverview } from './components/IndicesOverview';
import { WorldIndicesTable } from './components/WorldIndicesTable';
import { HighestVolumeSection } from './components/HighestVolumeSection';
import { CommunityTrendsSection } from './components/CommunityTrendsSection';
import { InteractiveChart } from './components/InteractiveChart';
import { SymbolDetailModal } from './components/SymbolDetailModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { LoginModal } from './components/LoginModal';
import { GetStartedModal } from './components/GetStartedModal';
import { ProductsView } from './components/ProductsView';
import { CommunityView } from './components/CommunityView';
import { BrokersView } from './components/BrokersView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('markets');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('US stocks');
  const [symbols, setSymbols] = useState<MarketSymbol[]>(ALL_SYMBOLS);
  const [indices, setIndices] = useState<IndexCardData[]>(INDEX_CARDS);
  const [selectedSymbol, setSelectedSymbol] = useState<MarketSymbol>(
    ALL_SYMBOLS.find(s => s.symbol === 'NVDA') || ALL_SYMBOLS[0]
  );
  const [modalSymbol, setModalSymbol] = useState<MarketSymbol | null>(null);
  const [selectedPill, setSelectedPill] = useState<string | null>('NVIDIA');

  // Watchlist State (with localStorage backup)
  const [watchlist, setWatchlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('chartflow_watchlist');
      return saved ? JSON.parse(saved) : ['NVDA', 'AAPL', 'BTCUSD'];
    } catch {
      return ['NVDA', 'AAPL', 'BTCUSD'];
    }
  });
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);

  // Modals
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('chartflow_watchlist', JSON.stringify(watchlist));
    } catch (e) {
      console.error(e);
    }
  }, [watchlist]);

  // Subtle real-time price tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSymbols(prev =>
        prev.map(sym => {
          const delta = (Math.random() - 0.49) * (sym.last * 0.001);
          const newLast = parseFloat((sym.last + delta).toFixed(2));
          const newChange = parseFloat((sym.change + delta).toFixed(2));
          const newPercent = parseFloat(((newChange / (sym.last - sym.change)) * 100).toFixed(2));
          return {
            ...sym,
            last: newLast,
            change: newChange,
            changePercent: newPercent
          };
        })
      );

      setIndices(prev =>
        prev.map(idx => {
          const delta = (Math.random() - 0.49) * (idx.value * 0.0005);
          const newValue = parseFloat((idx.value + delta).toFixed(2));
          return {
            ...idx,
            value: newValue,
            change: parseFloat((idx.change + delta).toFixed(2))
          };
        })
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleToggleWatchlist = (symbolCode: string) => {
    setWatchlist(prev =>
      prev.includes(symbolCode)
        ? prev.filter(s => s !== symbolCode)
        : [...prev, symbolCode]
    );
  };

  const handleSelectPill = (pill: string) => {
    setSelectedPill(pill);
    const matched = symbols.find(
      s =>
        s.symbol.toLowerCase() === pill.toLowerCase() ||
        s.name.toLowerCase().includes(pill.toLowerCase())
    );
    if (matched) {
      setSelectedSymbol(matched);
    }
  };

  const handleSelectSymbol = (sym: MarketSymbol) => {
    setSelectedSymbol(sym);
  };

  const handleOpenModal = (sym: MarketSymbol) => {
    setModalSymbol(sym);
  };

  const watchlistSymbols = symbols.filter(s => watchlist.includes(s.symbol));

  // Filter symbols based on category
  const worldIndicesList = symbols.filter(
    s => s.category === 'World stocks' || s.symbol.startsWith('NI') || s.symbol === 'UKX' || s.symbol === 'DAX' || s.symbol === 'PX1'
  );

  const highestVolumeList = symbols.filter(
    s => s.isHighestVolume || s.symbol === 'MU' || s.symbol === 'NVDA' || s.symbol === 'INTC' || s.symbol === 'AAPL'
  );

  const popularUSStockPills = ['NVIDIA', 'Apple', 'Amazon', 'Alphabet', 'Tesla', 'Microsoft'];

  return (
    <div className="min-h-screen bg-[#0c0e14] text-white flex flex-col font-['Inter',sans-serif] relative overflow-x-hidden selection:bg-indigo-500/30">
      {/* Ambient Frosted Glass Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4f46e5] rounded-full mix-blend-screen filter blur-[130px] opacity-25 pointer-events-none z-0" />
      <div className="fixed bottom-[0%] right-[0%] w-[60%] h-[60%] bg-[#db2777] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[10%] w-[35%] h-[35%] bg-[#06b6d4] rounded-full mix-blend-screen filter blur-[110px] opacity-15 pointer-events-none z-0" />

      {/* Top Fixed Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectSymbol={handleSelectSymbol}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
        onToggleWatchlist={() => setIsWatchlistOpen(true)}
        watchlistCount={watchlist.length}
      />

      {/* Main Container */}
      <main className="w-full pt-16 flex-1 relative z-10">
        {activeTab === 'markets' && (
          <div className="flex flex-col w-full">
            <div className="px-4 md:px-6 max-w-7xl mx-auto w-full pt-6 pb-12">
              {/* Hero Header Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="material-symbols-outlined text-white text-[22px]">auto_graph</span>
                </div>
                <h1 className="font-headline font-bold text-3xl md:text-4xl text-white tracking-tight">
                  Markets, everywhere
                </h1>
              </div>

              {/* Category Pills Nav */}
              <CategoryNav
                activeCategory={activeCategory}
                onSelectCategory={cat => setActiveCategory(cat)}
              />

              {/* Indices Overview Cards (S&P 500, Nasdaq 100, Dow 30) */}
              <IndicesOverview
                indices={indices}
                onSelectIndex={code => {
                  const matched = symbols.find(s => s.symbol.includes(code) || code.includes(s.symbol));
                  if (matched) setSelectedSymbol(matched);
                }}
              />

              {/* Layout Grid for Tables & Visualizer */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: World Indices & Interactive Chart */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                  {/* World Indices Table */}
                  <WorldIndicesTable
                    symbols={worldIndicesList}
                    onSelectSymbol={sym => handleOpenModal(sym)}
                    onSeeAll={() => setActiveCategory('World stocks')}
                  />

                  {/* Interactive Market Chart (replaces the static image) */}
                  <InteractiveChart
                    selectedSymbol={selectedSymbol}
                    onOpenDetailModal={() => handleOpenModal(selectedSymbol)}
                    isWatchlisted={watchlist.includes(selectedSymbol.symbol)}
                    onToggleWatchlist={() => handleToggleWatchlist(selectedSymbol.symbol)}
                  />
                </div>

                {/* Right Column: US Stocks & Trending */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                  {/* US Stocks & Highest Volume */}
                  <HighestVolumeSection
                    popularPills={popularUSStockPills}
                    volumeSymbols={highestVolumeList}
                    selectedPill={selectedPill}
                    onSelectPill={handleSelectPill}
                    onSelectSymbol={sym => handleOpenModal(sym)}
                  />

                  {/* Community Trends */}
                  <CommunityTrendsSection
                    onSelectTrend={code => {
                      const matched = symbols.find(s => s.symbol.includes(code));
                      if (matched) handleOpenModal(matched);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && <ProductsView />}
        {activeTab === 'community' && <CommunityView />}
        {activeTab === 'brokers' && <BrokersView />}
        {activeTab === 'more' && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-8 pb-16 space-y-6">
            <h1 className="font-headline font-bold text-3xl text-white">
              Additional Analytics & Tools
            </h1>
            <p className="text-sm text-white/60">
              Explore Pine Script editors, economic calendars, earnings releases, and global market heatmaps.
            </p>
            <div className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl text-center space-y-3 shadow-2xl">
              <span className="material-symbols-outlined text-[48px] text-indigo-400">
                auto_graph
              </span>
              <h3 className="font-headline font-bold text-xl text-white">
                Global Heatmap Visualizer Active
              </h3>
              <p className="text-xs text-white/50 max-w-md mx-auto">
                Real-time multi-asset heatmaps are monitoring over 12,000 tickers across 42 global exchanges.
              </p>
              <button
                onClick={() => setActiveTab('markets')}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold text-xs rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
              >
                Back to Live Markets Overview
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateTab={tab => setActiveTab(tab)} />

      {/* Symbol Detail Modal */}
      <SymbolDetailModal
        symbol={modalSymbol}
        onClose={() => setModalSymbol(null)}
        isWatchlisted={modalSymbol ? watchlist.includes(modalSymbol.symbol) : false}
        onToggleWatchlist={() =>
          modalSymbol && handleToggleWatchlist(modalSymbol.symbol)
        }
      />

      {/* Watchlist Slide-over Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlistSymbols={watchlistSymbols}
        onSelectSymbol={sym => handleOpenModal(sym)}
        onRemoveFromWatchlist={code => handleToggleWatchlist(code)}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* Get Started Signup Modal */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        onSwitchToLogin={() => setIsLoginOpen(true)}
      />
    </div>
  );
}
