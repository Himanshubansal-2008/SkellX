export const isValidDimension = (value) => {
  if (typeof value === 'number') {
    return Number.isFinite(value) && value >= 0;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed === 'auto') {
      return true;
    }
    return /^\d+(\.\d+)?%$/.test(trimmed);
  }

  return false;
};
