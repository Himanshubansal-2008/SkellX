export const isValidDimension = (value) => {
  if (typeof value === 'number') {
    return value >= 0;
  }

  if (typeof value === 'string') {
    return value.length > 0;
  }

  return false;
};
