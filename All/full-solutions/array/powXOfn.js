function pow(x, n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return 1 / pow(x, -n);
  }

  if (n % 2 === 0) {
    return pow(x * x, n / 2);
  }

  return x * pow(x, n - 1);
}