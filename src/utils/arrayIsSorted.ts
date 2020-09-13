export const arrayIsSorted = (
  array: Array<number>,
  descending = false,
): boolean =>
  array.every(
    (val: number, idx: number, arr: Array<number>) =>
      !idx || (descending ? val <= arr[idx - 1] : val >= arr[idx - 1]),
  );
