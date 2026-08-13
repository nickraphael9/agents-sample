import { MarketSymbol, IndexCardData, CommunityIdea } from '../types';

export const FLAG_JAPAN = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Kn7p3yt0kDNe6bUuYkkmeXXab_Zq7TS0BHlcJvsk07atGqFOV_5up3XXTAtJaRbsvd0R1uwzqXfamHv9e-BtDgBxYW2_Pt6FgPFaOREqCyo3snJOBP2ep6tQq678A-ilogRuctBrCJHTybuBQzGlDwwJdqweYfXKBqdjahUNVzPy_1cX1U9_G3_Xnq7AlpMJwuDVvsGghs1SllogmaZo0sIwUWG4CcIqDlMkuhyeeGj8PPPETVWAfQ';
export const FLAG_UK = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw61JSyTTADVA66n04tPCt5l6LotNV6mHNKa7ZN5PL7nELEaRlEhOf6GlIzieUUrD5205owMYBu8HTZwcTS8Z5Ibr7qqGCVA57fEAI7FSKHruBkumzex0OJyYbqGlIrpfzTpTKDSAKulXZsubaJfJ-tKcSohzta1A2-1LHZQcMWQ8Ul9QokrKHxhhMgz_5JnXrplMw3nHuvnyZ9cqWUarSdGh2iZaiRz8jzdEG1ncz4rrBYVQHCy6MOg';
export const FLAG_GERMANY = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIJIy-AxHn4nlNE1QV9i5Y1h5Ab4h9UIjQjQcbbTenmIE_71q05kjiD6WBGoyF8TvjpDaR8179dRPP2SPfr4wsHKXofFmExeDi_ri06e_BYQbpSHT7cjQjI0mDM0fQWZ0cH5U02RD5014dyWU5vvbGGg_EBtt1dtkmCfqCyWweLDVtLl2rJ7DE0YwwERJtcgHnyqqNK7ygEw1p2yFAmCMHeepHGtIlJZO0u4MbH8_RTEeGaGtuhPl8DA';
export const FLAG_FRANCE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG2duJm_X6P-uqWCpiR1WmJeD-j20uiyx69gdzoyMGTNrZOoUr9XDcLVeqB8j9sCiFq4eJ9wziAbzIzm_QjkMjDcAtrj8CZ8JW7OOjoHe4HdcDrYFAHt1apNP82QRFG0hefhuRa2Sy06sgmijNNk-imCeEMvwn50JKklAgwc7knz7ROQpl6DztWA4A5MC9niiKKRwRljsMxDVAG0WM-Vqe4OBBCsbKW0DdYR905MB3m2Sq5Tswp1JX_Q';

export const INDEX_CARDS: IndexCardData[] = [
  {
    symbol: 'S&P 500',
    code: 'SPX',
    name: 'S&P 500 Index',
    value: 5432.10,
    change: 12.45,
    changePercent: 0.23,
    sparkline: [5400, 5410, 5405, 5420, 5415, 5428, 5432.10]
  },
  {
    symbol: 'Nasdaq 100',
    code: 'NDX',
    name: 'Nasdaq 100 Index',
    value: 19876.54,
    change: 45.67,
    changePercent: 0.45,
    sparkline: [19750, 19790, 19780, 19820, 19840, 19860, 19876.54]
  },
  {
    symbol: 'Dow 30',
    code: 'DJI',
    name: 'Dow Jones Industrial Average',
    value: 39123.45,
    change: -15.20,
    changePercent: -0.04,
    sparkline: [39200, 39180, 39190, 39150, 39140, 39110, 39123.45]
  }
];

export const ALL_SYMBOLS: MarketSymbol[] = [
  // World Indices
  {
    symbol: 'NI225',
    name: 'Japan 225 Index',
    category: 'World stocks',
    last: 38123.50,
    change: 150.20,
    changePercent: 0.40,
    volume: '1.4B',
    flagUrl: FLAG_JAPAN,
    high52w: 41000,
    low52w: 31000,
    dayHigh: 38250,
    dayLow: 37950,
    marketCap: '$4.2T',
    peRatio: 18.5,
    sparkline: [37800, 37920, 38010, 38050, 38123.50],
    history1D: [
      { time: '09:00', price: 37970, volume: 120 },
      { time: '11:00', price: 38020, volume: 240 },
      { time: '13:00', price: 38080, volume: 180 },
      { time: '15:00', price: 38123.50, volume: 310 }
    ],
    history1M: [
      { time: '01 Aug', price: 37500, volume: 1100 },
      { time: '05 Aug', price: 37200, volume: 1500 },
      { time: '08 Aug', price: 37900, volume: 1300 },
      { time: '12 Aug', price: 38123.50, volume: 1400 }
    ]
  },
  {
    symbol: 'UKX',
    name: 'FTSE 100 Index',
    category: 'World stocks',
    last: 8234.10,
    change: -12.30,
    changePercent: -0.15,
    volume: '850M',
    flagUrl: FLAG_UK,
    high52w: 8450,
    low52w: 7300,
    dayHigh: 8260,
    dayLow: 8220,
    marketCap: '$2.8T',
    peRatio: 14.2,
    sparkline: [8260, 8250, 8245, 8230, 8234.10],
    history1D: [
      { time: '09:00', price: 8255, volume: 90 },
      { time: '11:00', price: 8240, volume: 150 },
      { time: '13:00', price: 8225, volume: 200 },
      { time: '15:00', price: 8234.10, volume: 160 }
    ],
    history1M: [
      { time: '01 Aug', price: 8300, volume: 800 },
      { time: '05 Aug', price: 8180, volume: 950 },
      { time: '08 Aug', price: 8210, volume: 880 },
      { time: '12 Aug', price: 8234.10, volume: 850 }
    ]
  },
  {
    symbol: 'DAX',
    name: 'DAX Index',
    category: 'World stocks',
    last: 18456.70,
    change: 45.80,
    changePercent: 0.25,
    volume: '620M',
    flagUrl: FLAG_GERMANY,
    high52w: 18890,
    low52w: 14600,
    dayHigh: 18490,
    dayLow: 18390,
    marketCap: '$1.9T',
    peRatio: 15.8,
    sparkline: [18390, 18410, 18430, 18440, 18456.70],
    history1D: [
      { time: '09:00', price: 18410, volume: 110 },
      { time: '11:00', price: 18430, volume: 140 },
      { time: '13:00', price: 18445, volume: 130 },
      { time: '15:00', price: 18456.70, volume: 170 }
    ],
    history1M: [
      { time: '01 Aug', price: 18200, volume: 600 },
      { time: '05 Aug', price: 17900, volume: 800 },
      { time: '08 Aug', price: 18300, volume: 650 },
      { time: '12 Aug', price: 18456.70, volume: 620 }
    ]
  },
  {
    symbol: 'PX1',
    name: 'CAC 40 Index',
    category: 'World stocks',
    last: 7890.20,
    change: -5.60,
    changePercent: -0.07,
    volume: '540M',
    flagUrl: FLAG_FRANCE,
    high52w: 8250,
    low52w: 6800,
    dayHigh: 7920,
    dayLow: 7870,
    marketCap: '$2.1T',
    peRatio: 16.1,
    sparkline: [7910, 7900, 7885, 7895, 7890.20],
    history1D: [
      { time: '09:00', price: 7905, volume: 80 },
      { time: '11:00', price: 7895, volume: 110 },
      { time: '13:00', price: 7880, volume: 140 },
      { time: '15:00', price: 7890.20, volume: 120 }
    ],
    history1M: [
      { time: '01 Aug', price: 7950, volume: 510 },
      { time: '05 Aug', price: 7780, volume: 680 },
      { time: '08 Aug', price: 7860, volume: 530 },
      { time: '12 Aug', price: 7890.20, volume: 540 }
    ]
  },

  // US Stocks & Highest Volume
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    category: 'US stocks',
    last: 125.67,
    change: -1.42,
    changePercent: -1.12,
    volume: '82.4M',
    isPopular: true,
    isHighestVolume: true,
    high52w: 140.76,
    low52w: 39.23,
    dayHigh: 128.20,
    dayLow: 124.80,
    marketCap: '$3.08T',
    peRatio: 72.4,
    sparkline: [128, 127, 126.5, 125, 125.67],
    history1D: [
      { time: '09:30', price: 127.80, volume: 1200000 },
      { time: '11:30', price: 126.50, volume: 950000 },
      { time: '13:30', price: 125.10, volume: 1100000 },
      { time: '16:00', price: 125.67, volume: 1500000 }
    ],
    history1M: [
      { time: '01 Aug', price: 118.00, volume: 75000000 },
      { time: '05 Aug', price: 101.00, volume: 110000000 },
      { time: '08 Aug', price: 120.50, volume: 90000000 },
      { time: '12 Aug', price: 125.67, volume: 82400000 }
    ]
  },
  {
    symbol: 'MU',
    name: 'Micron Technology',
    category: 'US stocks',
    last: 132.45,
    change: 3.03,
    changePercent: 2.34,
    volume: '95.1M',
    isHighestVolume: true,
    high52w: 157.50,
    low52w: 61.20,
    dayHigh: 133.80,
    dayLow: 129.50,
    marketCap: '$146.5B',
    peRatio: 38.2,
    sparkline: [129, 130.5, 131.2, 132.0, 132.45],
    history1D: [
      { time: '09:30', price: 129.80, volume: 800000 },
      { time: '11:30', price: 131.00, volume: 600000 },
      { time: '13:30', price: 131.90, volume: 700000 },
      { time: '16:00', price: 132.45, volume: 900000 }
    ],
    history1M: [
      { time: '01 Aug', price: 122.00, volume: 45000000 },
      { time: '05 Aug', price: 110.00, volume: 65000000 },
      { time: '08 Aug', price: 128.00, volume: 55000000 },
      { time: '12 Aug', price: 132.45, volume: 95100000 }
    ]
  },
  {
    symbol: 'INTC',
    name: 'Intel Corporation',
    category: 'US stocks',
    last: 34.50,
    change: 0.15,
    changePercent: 0.45,
    volume: '68.3M',
    isHighestVolume: true,
    high52w: 51.28,
    low52w: 19.80,
    dayHigh: 34.90,
    dayLow: 34.10,
    marketCap: '$147.2B',
    peRatio: 28.5,
    sparkline: [34.2, 34.1, 34.3, 34.4, 34.50],
    history1D: [
      { time: '09:30', price: 34.20, volume: 500000 },
      { time: '11:30', price: 34.35, volume: 400000 },
      { time: '13:30', price: 34.40, volume: 450000 },
      { time: '16:00', price: 34.50, volume: 600000 }
    ],
    history1M: [
      { time: '01 Aug', price: 30.50, volume: 40000000 },
      { time: '05 Aug', price: 20.10, volume: 120000000 },
      { time: '08 Aug', price: 32.00, volume: 80000000 },
      { time: '12 Aug', price: 34.50, volume: 68300000 }
    ]
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    category: 'US stocks',
    last: 215.89,
    change: 2.24,
    changePercent: 1.05,
    volume: '54.2M',
    isPopular: true,
    isHighestVolume: true,
    high52w: 237.23,
    low52w: 164.08,
    dayHigh: 216.50,
    dayLow: 213.20,
    marketCap: '$3.31T',
    peRatio: 33.8,
    sparkline: [213, 214.2, 215, 215.5, 215.89],
    history1D: [
      { time: '09:30', price: 213.50, volume: 600000 },
      { time: '11:30', price: 214.80, volume: 500000 },
      { time: '13:30', price: 215.30, volume: 550000 },
      { time: '16:00', price: 215.89, volume: 700000 }
    ],
    history1M: [
      { time: '01 Aug', price: 222.00, volume: 40000000 },
      { time: '05 Aug', price: 207.00, volume: 70000000 },
      { time: '08 Aug', price: 213.00, volume: 50000000 },
      { time: '12 Aug', price: 215.89, volume: 54200000 }
    ]
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    category: 'US stocks',
    last: 186.40,
    change: 1.85,
    changePercent: 1.00,
    volume: '42.1M',
    isPopular: true,
    high52w: 201.20,
    low52w: 118.35,
    dayHigh: 187.10,
    dayLow: 184.20,
    marketCap: '$1.94T',
    peRatio: 41.5,
    sparkline: [184, 185.1, 185.8, 186.2, 186.40],
    history1D: [
      { time: '09:30', price: 184.50, volume: 400000 },
      { time: '11:30', price: 185.60, volume: 350000 },
      { time: '13:30', price: 186.10, volume: 380000 },
      { time: '16:00', price: 186.40, volume: 500000 }
    ],
    history1M: [
      { time: '01 Aug', price: 184.00, volume: 35000000 },
      { time: '05 Aug', price: 161.00, volume: 80000000 },
      { time: '08 Aug', price: 181.00, volume: 45000000 },
      { time: '12 Aug', price: 186.40, volume: 42100000 }
    ]
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    category: 'US stocks',
    last: 165.20,
    change: 1.10,
    changePercent: 0.67,
    volume: '38.6M',
    isPopular: true,
    high52w: 191.75,
    low52w: 120.21,
    dayHigh: 166.00,
    dayLow: 163.80,
    marketCap: '$2.05T',
    peRatio: 24.1,
    sparkline: [164, 164.5, 164.9, 165.1, 165.20],
    history1D: [
      { time: '09:30', price: 164.20, volume: 350000 },
      { time: '11:30', price: 164.80, volume: 300000 },
      { time: '13:30', price: 165.00, volume: 320000 },
      { time: '16:00', price: 165.20, volume: 400000 }
    ],
    history1M: [
      { time: '01 Aug', price: 172.00, volume: 30000000 },
      { time: '05 Aug', price: 158.00, volume: 55000000 },
      { time: '08 Aug', price: 162.00, volume: 38000000 },
      { time: '12 Aug', price: 165.20, volume: 38600000 }
    ]
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    category: 'US stocks',
    last: 208.50,
    change: -4.20,
    changePercent: -1.97,
    volume: '61.8M',
    isPopular: true,
    high52w: 271.00,
    low52w: 138.80,
    dayHigh: 214.00,
    dayLow: 206.80,
    marketCap: '$664B',
    peRatio: 61.3,
    sparkline: [213, 211, 209.5, 208, 208.50],
    history1D: [
      { time: '09:30', price: 212.80, volume: 700000 },
      { time: '11:30', price: 210.20, volume: 600000 },
      { time: '13:30', price: 207.50, volume: 650000 },
      { time: '16:00', price: 208.50, volume: 800000 }
    ],
    history1M: [
      { time: '01 Aug', price: 225.00, volume: 50000000 },
      { time: '05 Aug', price: 198.00, volume: 85000000 },
      { time: '08 Aug', price: 205.00, volume: 60000000 },
      { time: '12 Aug', price: 208.50, volume: 61800000 }
    ]
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    category: 'US stocks',
    last: 418.10,
    change: 2.80,
    changePercent: 0.67,
    volume: '28.9M',
    isPopular: true,
    high52w: 468.35,
    low52w: 309.45,
    dayHigh: 419.50,
    dayLow: 414.80,
    marketCap: '$3.11T',
    peRatio: 35.1,
    sparkline: [415, 416.2, 417.0, 417.8, 418.10],
    history1D: [
      { time: '09:30', price: 415.50, volume: 300000 },
      { time: '11:30', price: 416.80, volume: 250000 },
      { time: '13:30', price: 417.50, volume: 280000 },
      { time: '16:00', price: 418.10, volume: 350000 }
    ],
    history1M: [
      { time: '01 Aug', price: 420.00, volume: 25000000 },
      { time: '05 Aug', price: 395.00, volume: 45000000 },
      { time: '08 Aug', price: 412.00, volume: 30000000 },
      { time: '12 Aug', price: 418.10, volume: 28900000 }
    ]
  },

  // Crypto
  {
    symbol: 'BTCUSD',
    name: 'Bitcoin / US Dollar',
    category: 'Crypto',
    last: 61240.00,
    change: 1450.00,
    changePercent: 2.42,
    volume: '$28.4B',
    high52w: 73750,
    low52w: 25100,
    dayHigh: 61800,
    dayLow: 59500,
    marketCap: '$1.21T',
    sparkline: [59500, 60100, 60800, 61050, 61240.00],
    history1D: [
      { time: '00:00', price: 59600, volume: 5000 },
      { time: '06:00', price: 60200, volume: 8000 },
      { time: '12:00', price: 60900, volume: 9200 },
      { time: '18:00', price: 61240, volume: 7500 }
    ],
    history1M: [
      { time: '01 Aug', price: 64500, volume: 220000 },
      { time: '05 Aug', price: 53800, volume: 450000 },
      { time: '08 Aug', price: 58900, volume: 310000 },
      { time: '12 Aug', price: 61240, volume: 284000 }
    ]
  },
  {
    symbol: 'ETHUSD',
    name: 'Ethereum / US Dollar',
    category: 'Crypto',
    last: 2680.50,
    change: 62.10,
    changePercent: 2.37,
    volume: '$14.2B',
    high52w: 4090,
    low52w: 1520,
    dayHigh: 2710,
    dayLow: 2590,
    marketCap: '$322B',
    sparkline: [2600, 2630, 2660, 2675, 2680.50],
    history1D: [
      { time: '00:00', price: 2610, volume: 15000 },
      { time: '06:00', price: 2640, volume: 22000 },
      { time: '12:00', price: 2670, volume: 28000 },
      { time: '18:00', price: 2680.50, volume: 19000 }
    ],
    history1M: [
      { time: '01 Aug', price: 3150, volume: 1200000 },
      { time: '05 Aug', price: 2200, volume: 2500000 },
      { time: '08 Aug', price: 2580, volume: 1800000 },
      { time: '12 Aug', price: 2680.50, volume: 1420000 }
    ]
  },
  {
    symbol: 'SOLUSD',
    name: 'Solana / US Dollar',
    category: 'Crypto',
    last: 148.20,
    change: 4.80,
    changePercent: 3.35,
    volume: '$3.8B',
    high52w: 210,
    low52w: 18,
    dayHigh: 151,
    dayLow: 142,
    marketCap: '$69B',
    sparkline: [142, 144, 146, 147.5, 148.20],
    history1D: [
      { time: '00:00', price: 143, volume: 45000 },
      { time: '06:00', price: 145, volume: 62000 },
      { time: '12:00', price: 147.5, volume: 71000 },
      { time: '18:00', price: 148.20, volume: 55000 }
    ],
    history1M: [
      { time: '01 Aug', price: 168, volume: 3000000 },
      { time: '05 Aug', price: 112, volume: 7500000 },
      { time: '08 Aug', price: 138, volume: 5000000 },
      { time: '12 Aug', price: 148.20, volume: 3800000 }
    ]
  },

  // Forex
  {
    symbol: 'EURUSD',
    name: 'Euro / US Dollar',
    category: 'Forex',
    last: 1.0925,
    change: 0.0018,
    changePercent: 0.16,
    volume: '$110B',
    sparkline: [1.0905, 1.0910, 1.0918, 1.0922, 1.0925],
    history1D: [
      { time: '08:00', price: 1.0908, volume: 10000 },
      { time: '12:00', price: 1.0918, volume: 14000 },
      { time: '16:00', price: 1.0925, volume: 12000 }
    ],
    history1M: [
      { time: '01 Aug', price: 1.0820, volume: 90000 },
      { time: '05 Aug', price: 1.0950, volume: 130000 },
      { time: '08 Aug', price: 1.0910, volume: 100000 },
      { time: '12 Aug', price: 1.0925, volume: 110000 }
    ]
  },
  {
    symbol: 'USDJPY',
    name: 'US Dollar / Japanese Yen',
    category: 'Forex',
    last: 147.20,
    change: -0.85,
    changePercent: -0.57,
    volume: '$95B',
    sparkline: [148.1, 147.8, 147.5, 147.3, 147.20],
    history1D: [
      { time: '08:00', price: 148.00, volume: 8000 },
      { time: '12:00', price: 147.60, volume: 11000 },
      { time: '16:00', price: 147.20, volume: 9500 }
    ],
    history1M: [
      { time: '01 Aug', price: 153.50, volume: 110000 },
      { time: '05 Aug', price: 142.00, volume: 220000 },
      { time: '08 Aug', price: 146.50, volume: 130000 },
      { time: '12 Aug', price: 147.20, volume: 95000 }
    ]
  },

  // Futures
  {
    symbol: 'CL1!',
    name: 'Crude Oil WTI Futures',
    category: 'Futures',
    last: 78.40,
    change: 1.25,
    changePercent: 1.62,
    volume: '320K',
    sparkline: [77.1, 77.5, 77.9, 78.2, 78.40],
    history1D: [
      { time: '08:00', price: 77.20, volume: 4000 },
      { time: '12:00', price: 77.80, volume: 6500 },
      { time: '16:00', price: 78.40, volume: 5000 }
    ],
    history1M: [
      { time: '01 Aug', price: 76.50, volume: 28000 },
      { time: '05 Aug', price: 73.00, volume: 45000 },
      { time: '08 Aug', price: 76.80, volume: 35000 },
      { time: '12 Aug', price: 78.40, volume: 32000 }
    ]
  },
  {
    symbol: 'GC1!',
    name: 'Gold Futures',
    category: 'Futures',
    last: 2468.30,
    change: 12.80,
    changePercent: 0.52,
    volume: '190K',
    sparkline: [2455, 2460, 2462, 2465, 2468.30],
    history1D: [
      { time: '08:00', price: 2456, volume: 2000 },
      { time: '12:00', price: 2463, volume: 3500 },
      { time: '16:00', price: 2468.30, volume: 2800 }
    ],
    history1M: [
      { time: '01 Aug', price: 2440, volume: 15000 },
      { time: '05 Aug', price: 2410, volume: 28000 },
      { time: '08 Aug', price: 2450, volume: 22000 },
      { time: '12 Aug', price: 2468.30, volume: 19000 }
    ]
  },

  // Bonds
  {
    symbol: 'US10Y',
    name: 'U.S. 10-Year Treasury Yield',
    category: 'Bonds',
    last: 3.84,
    change: -0.04,
    changePercent: -1.03,
    volume: 'High',
    sparkline: [3.88, 3.87, 3.86, 3.85, 3.84],
    history1D: [
      { time: '08:00', price: 3.88, volume: 100 },
      { time: '12:00', price: 3.86, volume: 120 },
      { time: '16:00', price: 3.84, volume: 110 }
    ],
    history1M: [
      { time: '01 Aug', price: 4.05, volume: 800 },
      { time: '05 Aug', price: 3.68, volume: 1500 },
      { time: '08 Aug', price: 3.80, volume: 1100 },
      { time: '12 Aug', price: 3.84, volume: 900 }
    ]
  },

  // ETFs
  {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    category: 'ETFs',
    last: 542.80,
    change: 1.30,
    changePercent: 0.24,
    volume: '58.2M',
    sparkline: [541, 541.8, 542.2, 542.5, 542.80],
    history1D: [
      { time: '09:30', price: 541.20, volume: 600000 },
      { time: '11:30', price: 542.00, volume: 500000 },
      { time: '13:30', price: 542.40, volume: 550000 },
      { time: '16:00', price: 542.80, volume: 700000 }
    ],
    history1M: [
      { time: '01 Aug', price: 550.00, volume: 40000000 },
      { time: '05 Aug', price: 518.00, volume: 90000000 },
      { time: '08 Aug', price: 538.00, volume: 60000000 },
      { time: '12 Aug', price: 542.80, volume: 58200000 }
    ]
  },
  {
    symbol: 'QQQ',
    name: 'Invesco QQQ Trust',
    category: 'ETFs',
    last: 472.10,
    change: 2.10,
    changePercent: 0.45,
    volume: '41.5M',
    sparkline: [469, 470.2, 471.0, 471.8, 472.10],
    history1D: [
      { time: '09:30', price: 469.50, volume: 450000 },
      { time: '11:30', price: 470.80, volume: 400000 },
      { time: '13:30', price: 471.50, volume: 420000 },
      { time: '16:00', price: 472.10, volume: 500000 }
    ],
    history1M: [
      { time: '01 Aug', price: 480.00, volume: 35000000 },
      { time: '05 Aug', price: 445.00, volume: 75000000 },
      { time: '08 Aug', price: 465.00, volume: 50000000 },
      { time: '12 Aug', price: 472.10, volume: 41500000 }
    ]
  }
];

export const COMMUNITY_TRENDS_LIST = [
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices',
    sentiment: 'bullish' as const,
    percentage: 84,
    ideasCount: 1420
  },
  {
    symbol: 'CRWV',
    name: 'CoreWeave, Inc.',
    sentiment: 'bullish' as const,
    percentage: 91,
    ideasCount: 890
  },
  {
    symbol: 'GOOG',
    name: 'Alphabet Inc (Google)',
    sentiment: 'bullish' as const,
    percentage: 78,
    ideasCount: 2150
  }
];

export const COMMUNITY_IDEAS: CommunityIdea[] = [
  {
    id: '1',
    author: 'QuantumTrader',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    timeAgo: '2h ago',
    symbol: 'NVDA',
    title: 'NVDA Resistance Test at $128 — Breakout Setup',
    description: 'NVIDIA is forming a ascending triangle pattern on the 4-hour chart. Watch for high volume above $128 for potential target at $135.',
    likes: 342,
    comments: 58,
    sentiment: 'Bullish'
  },
  {
    id: '2',
    author: 'MacroVision',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    timeAgo: '4h ago',
    symbol: 'SPX',
    title: 'S&P 500 Consolidation Ahead of CPI Release',
    description: 'The S&P 500 is trading tightly around 5,430. Key support lies at 5,400 with immediate overhead resistance at 5,450.',
    likes: 189,
    comments: 23,
    sentiment: 'Bullish'
  },
  {
    id: '3',
    author: 'CryptoWhale',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    timeAgo: '6h ago',
    symbol: 'BTCUSD',
    title: 'Bitcoin Regains $61,000 — Onchain Metrics Bullish',
    description: 'Exchange outflows increase as long-term holders continue accumulation. Target $64k next week.',
    likes: 512,
    comments: 94,
    sentiment: 'Bullish'
  }
];
