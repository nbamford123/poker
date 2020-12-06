// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arraysMatch = (array1: Array<any>, array2: Array<any>): boolean =>
    array1.every((x, idx) => x === array2[idx]);
