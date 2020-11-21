// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arraysMatch = (array1: Array<any>, array2: Array<any>): boolean =>
    array1.reduce((pv, cv, idx) => pv && array2[idx] === cv, true);
