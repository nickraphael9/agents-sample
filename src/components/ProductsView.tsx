import React from 'react';

export const ProductsView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-6 pb-12 space-y-8">
      <div>
        <h1 className="font-headline font-bold text-3xl text-[#181c21]">
          ChartFlow Analytics Suite
        </h1>
        <p className="text-[#434656] text-sm mt-1">
          Institutional-grade charting, algorithmic screeners, and real-time execution tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#E0E3EB] shadow-2xs hover:border-[#0049db]/40 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#0049db]/10 text-[#0049db] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">candlestick_chart</span>
          </div>
          <h3 className="font-headline font-bold text-lg text-[#181c21]">Advanced Interactive Charts</h3>
          <p className="text-xs text-[#434656] leading-relaxed">
            Multi-timeframe analysis, 100+ built-in technical indicators, Pine Script engine, and custom drawing canvases.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E3EB] shadow-2xs hover:border-[#0049db]/40 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#0049db]/10 text-[#0049db] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">filter_alt</span>
          </div>
          <h3 className="font-headline font-bold text-lg text-[#181c21]">Real-time Stock Screener</h3>
          <p className="text-xs text-[#434656] leading-relaxed">
            Filter global equities, cryptocurrencies, and forex by valuation, volume surges, moving average crossovers, and RSI.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E0E3EB] shadow-2xs hover:border-[#0049db]/40 transition-all space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#0049db]/10 text-[#0049db] flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">notifications_active</span>
          </div>
          <h3 className="font-headline font-bold text-lg text-[#181c21]">Smart Price & Volatility Alerts</h3>
          <p className="text-xs text-[#434656] leading-relaxed">
            Receive low-latency webhooks, SMS, and desktop notifications when key support/resistance levels are breached.
          </p>
        </div>
      </div>
    </div>
  );
};
