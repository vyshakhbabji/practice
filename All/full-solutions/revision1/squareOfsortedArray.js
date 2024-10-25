function squareOfsortedArray(arr) {
  return arr.map((val) => val * val).sort((a, b) => a - b);
}