import React from 'react';

export const BrokersView: React.FC = () => {
  const brokers = [
    { name: 'Interactive Brokers', rating: '4.9 ★', fee: '$0 Commission', region: 'Global', bestFor: 'Pro Traders & Options' },
    { name: 'Robinhood', rating: '4.7 ★', fee: '$0 Commission', region: 'US', bestFor: 'Retail Equities & Crypto' },
    { name: 'Binance', rating: '4.8 ★', fee: '0.1% Spot Fee', region: 'Global', bestFor: 'Cryptocurrency Trading' },
    { name: 'E*TRADE', rating: '4.6 ★', fee: '$0 Stocks / ETFs', region: 'US', bestFor: 'Long-term Portfolios' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-6 pb-12 space-y-8">
      <div>
        <h1 className="font-headline font-bold text-3xl text-[#181c21]">
          Broker Integrations
        </h1>
        <p className="text-[#434656] text-sm mt-1">
          Connect your brokerage account to trade directly from ChartFlow's unified order book interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brokers.map(b => (
          <div
            key={b.name}
            className="bg-white p-6 rounded-2xl border border-[#E0E3EB] shadow-2xs hover:border-[#0049db]/40 transition-all flex items-center justify-between"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-headline font-bold text-lg text-[#181c21]">
                  {b.name}
                </h3>
                <span className="text-xs font-bold text-[#089981] bg-[#089981]/10 px-2 py-0.5 rounded-full">
                  {b.rating}
                </span>
              </div>
              <p className="text-xs text-[#737687]">
                Fees: <span className="text-[#181c21] font-medium">{b.fee}</span> • Region: <span className="text-[#181c21] font-medium">{b.region}</span>
              </p>
              <p className="text-xs text-[#434656]">
                Best For: {b.bestFor}
              </p>
            </div>

            <button className="px-4 py-2 bg-[#0049db] hover:bg-[#2962ff] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
