export const formatMarketSize = (value: number): string => {
  const valueAsNumber = Number(value);
  const absoluteValue = Math.abs(valueAsNumber);

  if (absoluteValue >= 1.0e9) {
    return `${absoluteValue / 1.0e9}B`;
  }

  if (absoluteValue >= 1.0e6) {
    return `${absoluteValue / 1.0e6}M`;
  }

  if (absoluteValue >= 1.0e3) {
    return `${absoluteValue / 1.0e3}K`;
  }

  return absoluteValue.toString();
};
