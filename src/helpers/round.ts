export const round = (num: number, precision = 1) =>
  Math.round((num + Number.EPSILON) * precision) / precision;
