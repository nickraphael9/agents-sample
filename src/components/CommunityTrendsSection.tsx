import React from 'react';
import { COMMUNITY_TRENDS_LIST } from '../data/marketData';

interface CommunityTrendsSectionProps {
  onSelectTrend: (symbolCode: string) => void;
}

export const CommunityTrendsSection: React.FC<CommunityTrendsSectionProps> = ({
  onSelectTrend
}) => {
  return (
    <section>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-[11px] font-bold text-white/50 uppercase tracking-wider">
          Community Trends
        </h4>
        <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {COMMUNITY_TRENDS_LIST.map(item => (
          <div
            key={item.symbol}
            onClick={() => onSelectTrend(item.symbol)}
            id={`community-trend-${item.symbol.toLowerCase()}`}
            className="flex items-center justify-between p-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl cursor-pointer hover:bg-white/10 hover:border-white/20 hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center text-[11px] font-bold group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-pink-500 group-hover:text-white transition-all">
                {item.symbol}
              </div>
              <div>
                <span className="text-[13px] font-semibold text-white block">
                  {item.symbol}
                </span>
                <span className="text-[11px] text-white/50 block">
                  {item.name}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 rounded-full inline-block">
                {item.percentage}% Bullish
              </span>
              <span className="text-[10px] text-white/40 block mt-0.5">
                {item.ideasCount} ideas
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
