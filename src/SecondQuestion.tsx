import { arr } from "./Array";

// Solution 1 [O(n^2)]

/**
 * BRUTE FORCE
 *
 * Exponential algorithm that traveses data to find two values
 * thats sum equals the key.
 *
 * @param data
 * @param key
 */
const findSums = (data: number[], key: number) => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      for (let y = 0; y < data.length; y++) {
        if (key === data[i] + data[j] + data[y]) {
          return data[i] * data[j] * data[y];
        }
      }
    }
  }
};

// Solution 2 [Time O(n^2)] Sacrifices space for time [O(n)]

/**
 * Traverses data to find two values thats sum equals the key.
 *
 * @param data
 * @param key
 */
export const findSumHashing = (data: number[], key: number) => {
  const dataMap = {};
  let index: number;
  for (let i = 0; i < data.length; i++) {
    dataMap[data[i]] = 1;
  }
  for (let j = 0; j < data.length; j++) {
    for (let x = 0; x < data.length; x++) {
      index = key - data[j] - data[x];
      if (dataMap[index]) {
        return data[j] * data[x] * index;
      }
    }
  }
};

console.log(findSums(arr, 2020));
console.log(findSumHashing(arr, 2020));
