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
      if (key === data[i] + data[j]) {
        return data[i] * data[j];
      }
    }
  }
};

// Solution 2 [O(nlog(n))]

/**
 * Swaps two values within an array.
 *
 * @param data
 * @param firstIndex
 * @param secondIndex
 */
const swap = (data: number[], firstIndex: number, secondIndex: number) => {
  [data[firstIndex], data[secondIndex]] = [data[secondIndex], data[firstIndex]];
};

/**
 * Partition algorithm used within the quick sort method.
 *
 * @param data
 * @param left
 * @param right
 */
const partition = (data: number[], left: number, right: number) => {
  let pivot = data[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (data[left] < pivot) {
      left++;
    }
    while (data[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(data, left, right);
      left++;
      right--;
    }
  }
  return left;
};

/**
 * Recursive quick sort method.
 *
 * @param data
 * @param left
 * @param right
 */
const recursiveQuickSort = (data: number[], left: number, right: number) => {
  let index = partition(data, left, right);
  if (left < index - 1) {
    recursiveQuickSort(data, left, index - 1);
  }
  if (right > index) {
    recursiveQuickSort(data, index, right);
  }
  return data;
};

/**
 * Sorts a number array.
 *
 * @param data
 */
const sort = (data: number[]) => {
  if (data.length > 0) {
    recursiveQuickSort(data, 0, data.length - 1);
  }
  return data;
};

/**
 * Traverses data to find two values thats sum equals the key.
 *
 * @param data
 * @param key
 */
const findSumBinarySearch = (data: number[], key: number) => {
  let left = 0;
  let right = data.length - 1;
  while (left <= right) {
    if (data[left] + data[right] < key) {
      left++;
    } else if (data[left] + data[right] > key) {
      right--;
    } else if (data[left] + data[right] === key) {
      return data[left] * data[right];
    }
  }
};

// Solution 3 [Time O(n)] Sacrifices space for time [O(n)]

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
    index = key - data[j];
    if (dataMap[index]) {
      return data[j] * index;
    }
  }
};

console.log(findSums(arr, 2020));
console.log(findSumHashing(arr, 2020));
console.log(findSumBinarySearch(sort(arr), 2020));
