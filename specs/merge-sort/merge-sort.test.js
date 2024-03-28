/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length === 1) {
    return nums;
  } else {
    let mid = Math.floor(nums.length / 2);
    let left = nums.slice(0, mid);
    let right = nums.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
};

const merge = (arr1, arr2) => {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  return res.concat(arr1, arr2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
