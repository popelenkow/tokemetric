import { describe, expect, it } from 'vitest';
import { InstrumentInfo, TransactionData } from '../../api/backend/types';
import { commissions } from '../transaction';
import { floorTo } from '../value';
import { fixtureAlgo1, fixtureAlgo2, fixtureAlgo3 } from './__fixtures__/algo';
import { fixtureDogs1 } from './__fixtures__/dogs';
import { fixtureFtm1 } from './__fixtures__/ftm';
import { fixtureHbar1 } from './__fixtures__/hbar';
import { fixtureMog1 } from './__fixtures__/mog';
import { fixtureNeiro1 } from './__fixtures__/neiro';
import { fixturePnut1 } from './__fixtures__/pnut';
import { fixtureXlm1 } from './__fixtures__/xlm';
import { getGridPrices } from './ratio';
import { getGridTradeQuantity } from './trade';

type GridHistoryOrder = {
  buy: number;
  sell: number;
  profit: number;
  count: number;
};
type FixtureData = {
  data: TransactionData<'grid'>;
  info: InstrumentInfo;
  orders: GridHistoryOrder[];
  quantity: number;
};

const testTrades = (fixtureData: FixtureData, floor: boolean) => {
  const { data, info, orders, quantity: fixtureQuantity } = fixtureData;
  const trades = orders.reduce((acc, x) => acc + x.count, 0);

  const quantity = getGridTradeQuantity(data, info);

  const buyPrices = getGridPrices(data, info, 'buy', floor);
  const sellPrices = getGridPrices(data, info, 'sell', floor);

  const commission = commissions.limit;

  const profits = buyPrices.map((_, i) => {
    const buy = buyPrices[i] * quantity;
    const sell = sellPrices[i] * quantity;
    const buyCommission = buy * commission;
    const sellCommission = sell * commission;
    const profit = sell - buy - buyCommission - sellCommission;
    return floorTo(profit, 4);
  });

  expect(trades).toBe(data.trades);
  expect(quantity).toBe(fixtureQuantity);
  expect(buyPrices).toStrictEqual(orders.map((x) => x.buy));
  expect(sellPrices).toStrictEqual(orders.map((x) => x.sell));
  expect(profits).toStrictEqual(orders.map((x) => x.profit));
};

describe('trade', () => {
  describe('algo', () => {
    it('1', () => {
      testTrades(fixtureAlgo1, true);
    });
    it('2', () => {
      testTrades(fixtureAlgo2, true);
    });
    it('3', () => {
      testTrades(fixtureAlgo3, true);
    });
  });
  it('dogs', () => {
    testTrades(fixtureDogs1, true);
  });
  it('ftm', () => {
    testTrades(fixtureFtm1, true);
  });
  it('hbar', () => {
    testTrades(fixtureHbar1, true);
  });
  it('mog', () => {
    testTrades(fixtureMog1, true);
  });
  it('neiro', () => {
    testTrades(fixtureNeiro1, true);
  });
  it('pnut', () => {
    testTrades(fixturePnut1, true);
  });
  it('xlm', () => {
    testTrades(fixtureXlm1, true);
  });
});
