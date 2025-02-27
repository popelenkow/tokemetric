import { TransactionData } from '../../../../api/backend/types';
export * from './info';

export const data: TransactionData<'grid'> = {
  orderId: '0',
  type: 'grid',
  instrument: 'FTMUSDT',
  amount: 109,
  leverage: 1.4,
  totalProfit: -31.85759021,
  spotProfit: 0,
  fundingProfit: -1.2,
  gridProfit: 0,
  trades: 2834,
  grids: 93,
  quantity: 1,
  minPrice: 1.013,
  maxPrice: 1.519,
  startPrice: 1.2656,
  endPrice: 0.7178,
  duration: 2959750,
  startTime: '2025-01-01T01:00:00.000Z',
  endTime: '2025-01-01T01:00:00.000Z',
  detailTime: '2025-01-07T17:00:49.614Z',
  detailStatus: 'pending',
  profitStatus: 'done',
  close: 'pending',
};

export const gridError = data.trades * 0.00001 * 6.668;

export const orders = [
  { buy: 1.013, sell: 1.0174, profit: 0.0039, count: 53 },
  { buy: 1.0174, sell: 1.0218, profit: 0.0039, count: 47 },
  { buy: 1.0218, sell: 1.0263, profit: 0.004, count: 35 },
  { buy: 1.0263, sell: 1.0308, profit: 0.004, count: 29 },
  { buy: 1.0308, sell: 1.0353, profit: 0.004, count: 24 },
  { buy: 1.0353, sell: 1.0398, profit: 0.004, count: 31 },
  { buy: 1.0398, sell: 1.0443, profit: 0.004, count: 33 },
  { buy: 1.0443, sell: 1.0489, profit: 0.0041, count: 21 },
  { buy: 1.0489, sell: 1.0535, profit: 0.0041, count: 13 },
  { buy: 1.0535, sell: 1.0581, profit: 0.0041, count: 23 },
  { buy: 1.0581, sell: 1.0627, profit: 0.0041, count: 12 },
  { buy: 1.0627, sell: 1.0673, profit: 0.0041, count: 20 },
  { buy: 1.0673, sell: 1.072, profit: 0.0042, count: 29 },
  { buy: 1.072, sell: 1.0767, profit: 0.0042, count: 39 },
  { buy: 1.0767, sell: 1.0814, profit: 0.0042, count: 30 },
  { buy: 1.0814, sell: 1.0861, profit: 0.0042, count: 41 },
  { buy: 1.0861, sell: 1.0908, profit: 0.0042, count: 46 },
  { buy: 1.0908, sell: 1.0956, profit: 0.0043, count: 45 },
  { buy: 1.0956, sell: 1.1004, profit: 0.0043, count: 42 },
  { buy: 1.1004, sell: 1.1052, profit: 0.0043, count: 40 },
  { buy: 1.1052, sell: 1.11, profit: 0.0043, count: 30 },
  { buy: 1.11, sell: 1.1148, profit: 0.0043, count: 28 },
  { buy: 1.1148, sell: 1.1197, profit: 0.0044, count: 31 },
  { buy: 1.1197, sell: 1.1246, profit: 0.0044, count: 32 },
  { buy: 1.1246, sell: 1.1295, profit: 0.0044, count: 47 },
  { buy: 1.1295, sell: 1.1344, profit: 0.0044, count: 35 },
  { buy: 1.1344, sell: 1.1394, profit: 0.0045, count: 42 },
  { buy: 1.1394, sell: 1.1444, profit: 0.0045, count: 49 },
  { buy: 1.1444, sell: 1.1494, profit: 0.0045, count: 52 },
  { buy: 1.1494, sell: 1.1544, profit: 0.0045, count: 44 },
  { buy: 1.1544, sell: 1.1594, profit: 0.0045, count: 60 },
  { buy: 1.1594, sell: 1.1645, profit: 0.0046, count: 57 },
  { buy: 1.1645, sell: 1.1696, profit: 0.0046, count: 43 },
  { buy: 1.1696, sell: 1.1747, profit: 0.0046, count: 29 },
  { buy: 1.1747, sell: 1.1798, profit: 0.0046, count: 23 },
  { buy: 1.1798, sell: 1.185, profit: 0.0047, count: 15 },
  { buy: 1.185, sell: 1.1901, profit: 0.0046, count: 21 },
  { buy: 1.1901, sell: 1.1953, profit: 0.0047, count: 20 },
  { buy: 1.1953, sell: 1.2005, profit: 0.0047, count: 26 },
  { buy: 1.2005, sell: 1.2058, profit: 0.0048, count: 39 },
  { buy: 1.2058, sell: 1.211, profit: 0.0047, count: 42 },
  { buy: 1.211, sell: 1.2163, profit: 0.0048, count: 47 },
  { buy: 1.2163, sell: 1.2216, profit: 0.0048, count: 55 },
  { buy: 1.2216, sell: 1.227, profit: 0.0049, count: 61 },
  { buy: 1.227, sell: 1.2323, profit: 0.0048, count: 76 },
  { buy: 1.2323, sell: 1.2377, profit: 0.0049, count: 77 },
  { buy: 1.2377, sell: 1.2431, profit: 0.0049, count: 53 },
  { buy: 1.2431, sell: 1.2485, profit: 0.0049, count: 38 },
  { buy: 1.2485, sell: 1.254, profit: 0.0049, count: 48 },
  { buy: 1.254, sell: 1.2595, profit: 0.0049, count: 46 },
  { buy: 1.2595, sell: 1.265, profit: 0.0049, count: 55 },
  { buy: 1.265, sell: 1.2705, profit: 0.0049, count: 87 },
  { buy: 1.2705, sell: 1.276, profit: 0.0049, count: 41 },
  { buy: 1.276, sell: 1.2816, profit: 0.005, count: 35 },
  { buy: 1.2816, sell: 1.2872, profit: 0.005, count: 34 },
  { buy: 1.2872, sell: 1.2928, profit: 0.005, count: 31 },
  { buy: 1.2928, sell: 1.2985, profit: 0.0051, count: 41 },
  { buy: 1.2985, sell: 1.3041, profit: 0.005, count: 39 },
  { buy: 1.3041, sell: 1.3098, profit: 0.0051, count: 62 },
  { buy: 1.3098, sell: 1.3156, profit: 0.0052, count: 51 },
  { buy: 1.3156, sell: 1.3213, profit: 0.0051, count: 45 },
  { buy: 1.3213, sell: 1.3271, profit: 0.0052, count: 40 },
  { buy: 1.3271, sell: 1.3329, profit: 0.0052, count: 30 },
  { buy: 1.3329, sell: 1.3387, profit: 0.0052, count: 23 },
  { buy: 1.3387, sell: 1.3445, profit: 0.0052, count: 26 },
  { buy: 1.3445, sell: 1.3504, profit: 0.0053, count: 31 },
  { buy: 1.3504, sell: 1.3563, profit: 0.0053, count: 28 },
  { buy: 1.3563, sell: 1.3622, profit: 0.0053, count: 31 },
  { buy: 1.3622, sell: 1.3682, profit: 0.0054, count: 21 },
  { buy: 1.3682, sell: 1.3741, profit: 0.0053, count: 14 },
  { buy: 1.3741, sell: 1.3801, profit: 0.0054, count: 16 },
  { buy: 1.3801, sell: 1.3862, profit: 0.0055, count: 28 },
  { buy: 1.3862, sell: 1.3922, profit: 0.0054, count: 22 },
  { buy: 1.3922, sell: 1.3983, profit: 0.0055, count: 19 },
  { buy: 1.3983, sell: 1.4044, profit: 0.0055, count: 11 },
  { buy: 1.4044, sell: 1.4105, profit: 0.0055, count: 9 },
  { buy: 1.4105, sell: 1.4167, profit: 0.0056, count: 11 },
  { buy: 1.4167, sell: 1.4229, profit: 0.0056, count: 6 },
  { buy: 1.4229, sell: 1.4291, profit: 0.0056, count: 4 },
  { buy: 1.4291, sell: 1.4353, profit: 0.0056, count: 6 },
  { buy: 1.4353, sell: 1.4416, profit: 0.0057, count: 8 },
  { buy: 1.4416, sell: 1.4479, profit: 0.0057, count: 4 },
  { buy: 1.4479, sell: 1.4542, profit: 0.0057, count: 4 },
  { buy: 1.4542, sell: 1.4605, profit: 0.0057, count: 0 },
  { buy: 1.4605, sell: 1.4669, profit: 0.0058, count: 1 },
  { buy: 1.4669, sell: 1.4733, profit: 0.0058, count: 1 },
  { buy: 1.4733, sell: 1.4798, profit: 0.0059, count: 0 },
  { buy: 1.4798, sell: 1.4862, profit: 0.0058, count: 0 },
  { buy: 1.4862, sell: 1.4927, profit: 0.0059, count: 0 },
  { buy: 1.4927, sell: 1.4992, profit: 0.0059, count: 0 },
  { buy: 1.4992, sell: 1.5058, profit: 0.0059, count: 0 },
  { buy: 1.5058, sell: 1.5123, profit: 0.0058, count: 0 },
  { buy: 1.5123, sell: 1.519, profit: 0.006, count: 0 },
];
