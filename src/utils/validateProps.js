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

export const toSafeCount = (value, fallback = 0) => {
  const num = Number(value);
  if (Number.isFinite(num) && num >= 0) {
    return Math.floor(num);
  }
  return fallback;
};

export const toSafeColumns = (value, fallback = 1) => {
  const num = Number(value);
  if (Number.isFinite(num) && num >= 1) {
    return Math.floor(num);
  }
  return Math.max(1, fallback);
};
