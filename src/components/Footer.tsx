import React from 'react';
import { TabType } from '../types';

interface FooterProps {
  onNavigateTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab }) => {
  return (
    <footer className="w-full bg-[#ebeef5] py-12 border-t border-[#E0E3EB] mt-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand Column */}
        <div className="col-span-2 md:col-span-1 space-y-3">
          <div
            onClick={() => onNavigateTab('markets')}
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#0049db] text-[24px]">
              monitoring
            </span>
            <span className="font-headline font-semibold text-lg text-[#181c21]">
              ChartFlow
            </span>
          </div>
          <p className="text-xs text-[#434656] leading-relaxed">
            Precision analytics for the modern trader.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-[11px] font-bold text-[#181c21] uppercase tracking-wider mb-4">
            Product
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <button
              onClick={() => onNavigateTab('products')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Charts
            </button>
            <button
              onClick={() => onNavigateTab('products')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Screeners
            </button>
          </div>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-[11px] font-bold text-[#181c21] uppercase tracking-wider mb-4">
            Community
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <button
              onClick={() => onNavigateTab('community')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Ideas
            </button>
            <button
              onClick={() => onNavigateTab('community')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Scripts
            </button>
          </div>
        </div>

        {/* Market */}
        <div>
          <h4 className="text-[11px] font-bold text-[#181c21] uppercase tracking-wider mb-4">
            Market
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <button
              onClick={() => onNavigateTab('markets')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Indices
            </button>
            <button
              onClick={() => onNavigateTab('markets')}
              className="text-left text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Forex
            </button>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-[11px] font-bold text-[#181c21] uppercase tracking-wider mb-4">
            Social
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#434656] hover:text-[#0049db] transition-colors"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-8 mt-8 border-t border-[#E0E3EB]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#737687]">
        <p>© 2026 ChartFlow Inc. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Market data provided with real-time low-latency streams.</p>
      </div>
    </footer>
  );
};
