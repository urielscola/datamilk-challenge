import { formatMarketSize } from './format';

describe('formatMarketSize', () => {
  test('Should format the market size number correctly', () => {
    const shoudBeBillion = formatMarketSize(1000000000);
    const shoudBeMillion = formatMarketSize(10000000);
    const shoudBeThousands = formatMarketSize(10000);
    const shouldNotFormat = formatMarketSize(100);

    expect(shoudBeBillion).toBe('1B');
    expect(shoudBeMillion).toBe('10M');
    expect(shoudBeThousands).toBe('10K');
    expect(shouldNotFormat).toBe('100');
  });
});
