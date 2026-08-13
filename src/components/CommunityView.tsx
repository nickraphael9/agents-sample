import React from 'react';
import { COMMUNITY_IDEAS } from '../data/marketData';

export const CommunityView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-6 pb-12 space-y-8">
      <div>
        <h1 className="font-headline font-bold text-3xl text-[#181c21]">
          Trading Ideas & Community
        </h1>
        <p className="text-[#434656] text-sm mt-1">
          Insights, technical setups, and macro analysis shared by top market analysts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COMMUNITY_IDEAS.map(idea => (
          <div
            key={idea.id}
            className="bg-white p-5 rounded-2xl border border-[#E0E3EB] shadow-2xs hover:border-[#0049db]/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={idea.avatar}
                    alt={idea.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <span className="text-xs font-bold text-[#181c21] block">
                      {idea.author}
                    </span>
                    <span className="text-[10px] text-[#737687]">
                      {idea.timeAgo}
                    </span>
                  </div>
                </div>
                <span className="text-xs bg-[#089981]/10 text-[#089981] font-bold px-2 py-0.5 rounded-full">
                  {idea.sentiment}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold text-[#0049db] font-data-tabular">
                  ${idea.symbol}
                </span>
                <h4 className="font-headline font-bold text-sm text-[#181c21]">
                  {idea.title}
                </h4>
                <p className="text-xs text-[#434656] leading-relaxed line-clamp-3">
                  {idea.description}
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E0E3EB] flex items-center justify-between text-xs text-[#737687]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                  {idea.likes}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
                  {idea.comments}
                </span>
              </div>
              <button className="text-[#0049db] font-semibold hover:underline">
                Read Idea →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
