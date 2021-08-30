export const mapNumber = (
  x: number,
  a: number,
  b: number,
  c: number,
  d: number
): number => (x - a) * ((d - c) / (b - a)) + c;

export const mapNumberToPercent = (x: number, a: number, b: number) => {
  return mapNumber(x, a, b, 0, 100);
};
