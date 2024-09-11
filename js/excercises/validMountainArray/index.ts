function validMountainArray1(arr: number[]): boolean {
  if (arr.length < 3) return false;

  let i = 0;
  while (i + 1 < arr.length && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === arr.length - 1) return false;

  while (i + 1 < arr.length && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === arr.length - 1;
}

function validMountainArray2(arr: number[]): boolean {
  const n = arr.length;
  if (n < 3) return false;

  // Find the index of the peak
  let peak = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] <= arr[i - 1]) {
      peak = i - 1;
      break;
    }
  }

  // If peak is at the start or end, it's not a valid mountain
  if (peak === 0 || peak === n - 1) return false;

  // Check if it's strictly decreasing after the peak
  for (let i = peak + 1; i < n; i++) {
    if (arr[i] >= arr[i - 1]) return false;
  }

  return true;
}

export { validMountainArray1, validMountainArray2 };
